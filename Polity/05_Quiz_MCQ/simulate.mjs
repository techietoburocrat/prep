/* Empirical check that the quiz cannot be gamed. Run:  node simulate.mjs

   Replays the engine's own session builder over many attempts and reports,
   per bank:
     · how often the correct answer is the longest option on screen
     · how often it is the shortest
     · which screen position (A/B/C/D) it lands in
     · for statement sets, which answer code comes up
   A perfect result is ~25% per position and ~25% longest/shortest, i.e. the
   same as guessing. Anything well above that is an exploitable pattern.      */
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadData } from './build.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const ATTEMPTS = 400;

// --- mirrors of the engine in _template.html ---
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const SET_CODE3 = ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'];
const SET_CODE2 = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];
const SET_COUNT = ['Only one', 'Only two', 'All three', 'None'];
const SET_COUNT4 = ['Only one', 'Only two', 'Only three', 'All four'];
function buildCode(mode, n, trueIdx) {
  const c = trueIdx.length;
  if (mode === 'count') {
    const set = n === 4 ? SET_COUNT4 : SET_COUNT;
    const text = c === 0 ? 'None' : c === 1 ? 'Only one' : c === 2 ? 'Only two' : c === 3 ? (n === 3 ? 'All three' : 'Only three') : 'All four';
    return { set, text };
  }
  if (n === 2) {
    const text = c === 2 ? 'Both 1 and 2' : c === 0 ? 'Neither 1 nor 2' : (trueIdx[0] === 1 ? '1 only' : '2 only');
    return { set: SET_CODE2, text };
  }
  return { set: SET_CODE3, text: c === 3 ? '1, 2 and 3' : trueIdx[0] + ' and ' + trueIdx[1] + ' only' };
}
function buildOne(item) {
  let options, correctText;
  if (item.S) {
    const st = shuffle(item.S), trueIdx = [];
    st.forEach((s, i) => { if (s[1]) trueIdx.push(i + 1); });
    const built = buildCode(item.mode || 'code', st.length, trueIdx);
    options = built.set.slice(); correctText = built.text;
  } else { options = item.o.slice(); correctText = item.o[item.a]; }
  const order = shuffle(options.map(t => t));
  return { options: order, correct: order.indexOf(correctText) };
}

let bad = 0;
for (const name of readdirSync(join(here, 'data')).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''))) {
  const { QUESTIONS } = loadData(name);
  const pos = [0, 0, 0, 0];
  let longest = 0, shortest = 0, plain = 0, unresolved = 0, hasUniqueHi = 0, hasUniqueLo = 0;
  const codes = {};

  for (let a = 0; a < ATTEMPTS; a++) {
    for (const item of QUESTIONS) {
      const r = buildOne(item);
      if (r.correct < 0) { unresolved++; continue; }
      pos[r.correct]++;
      if (item.S) codes[r.options[r.correct]] = (codes[r.options[r.correct]] || 0) + 1;
      else {
        plain++;
        // Only a *uniquely* longest option is a tell. When two options tie for
        // longest there is nothing to exploit, so ties are not counted.
        const lens = r.options.map(o => o.length), c = lens[r.correct];
        // A one-character difference is invisible. What a candidate can
        // actually exploit is an option that *looks* clearly longer (or
        // shorter) than the rest, so require a perceptible margin over the
        // runner-up before counting it as a tell.
        const sorted = [...lens].sort((x, y) => y - x);
        const hi = sorted[0], hi2 = sorted[1], lo = sorted[3], lo2 = sorted[2];
        const margin = n => Math.max(8, n * 0.12);
        if (hi - hi2 >= margin(hi2)) { hasUniqueHi++; if (c === hi) longest++; }
        if (lo2 - lo >= margin(lo)) { hasUniqueLo++; if (c === lo) shortest++; }
      }
    }
  }

  const total = pos.reduce((a, b) => a + b, 0);
  const pct = n => (n / total * 100).toFixed(1) + '%';
  const pctP = n => (n / plain * 100).toFixed(1) + '%';
  console.log(`\n=== ${name} — ${ATTEMPTS} simulated attempts, ${total} answers ===`);
  console.log(`    correct lands on A/B/C/D : ${pos.map(pct).join(' / ')}`);
  // The honest test: when one option IS visibly the longest, how often is it
  // the right one? Should sit near 25% — the same as guessing. Far below 25%
  // is just as exploitable as far above ("never pick the longest").
  const condHi = hasUniqueHi ? longest / hasUniqueHi : null;
  const condLo = hasUniqueLo ? shortest / hasUniqueLo : null;
  const show = v => v === null ? 'n/a' : (v * 100).toFixed(1) + '%';
  console.log(`    one option looks clearly longest on ${pctP(hasUniqueHi)} of plain MCQs; it is correct ${show(condHi)} of the time (25% = no signal)`);
  console.log(`    one option looks clearly shortest on ${pctP(hasUniqueLo)}; it is correct ${show(condLo)} of the time`);
  console.log(`    statement answer codes    : ${Object.entries(codes).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${(v / Object.values(codes).reduce((x, y) => x + y, 0) * 100).toFixed(0)}%`).join(' · ')}`);
  if (unresolved) { console.log(`  ✗ ${unresolved} answers could not be expressed in the option set`); bad++; }
  const worstPos = Math.max(...pos) / total;
  if (worstPos > 0.30) { console.log(`  ✗ position bias: one slot holds ${(worstPos * 100).toFixed(1)}%`); bad++; }
  // Only judge the ratio when the pattern is common enough to be learnable.
  for (const [label, cond, n] of [['longest', condHi, hasUniqueHi], ['shortest', condLo, hasUniqueLo]]) {
    if (cond === null || n / plain < 0.15) continue;
    if (cond > 0.40 || cond < 0.12) {
      console.log(`  ✗ length bias: the visibly ${label} option is correct ${(cond * 100).toFixed(1)}% of the time (want ~25%)`);
      bad++;
    }
  }
}
console.log(bad ? `\n${bad} problem(s).` : '\nNo exploitable pattern found.');
process.exit(bad ? 1 : 0);
