/* Audit every question bank for the tells that let a candidate pick the right
   option without knowing the answer. Run:  node audit.mjs
   Exits non-zero so a bad question can never quietly ship.

   Checks on hand-written option sets (o-questions)
   -----------------------------------------------
   LENGTH    the correct option must not be the longest by a wide margin (the
             classic giveaway), nor the shortest by a wide margin
   ABSOLUTE  no single option may run away from the mean length of the set
   HEDGE     absolutes (always / never / only / all / none) must not sit
             disproportionately in the distractors, which marks them as wrong
   INDEX     the correct index must be spread across 0-3, not parked on 0

   Checks on statement sets (S-questions)
   --------------------------------------
   CODE      mode:'code' over three statements needs at least two true ones,
             otherwise no combination code can express the answer after the
             engine reshuffles them; mode:'count' over four needs at least one
   FLAT      a bank in which nearly every statement set has the same number of
             true statements is guessable — flag if one count dominates

   SHAPE     four options, valid answer index, known chapter tag, real
             explanation, no duplicate stems
*/
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadData } from './build.mjs';

const here = dirname(fileURLToPath(import.meta.url));

// Ratio at which a length difference becomes a usable hint.
const LONGEST_RATIO = 1.30;   // correct vs longest distractor
const SHORTEST_RATIO = 1.30;  // shortest distractor vs correct
const SPREAD_RATIO = 1.60;    // any option vs the mean of the set

const HEDGES = /\b(always|never|only|all|none|every|must|cannot|no one|entirely|completely|exclusively)\b/i;

// The assertion-reason code is canonical and carries no content signal.
const AR_KEY = 'Both A and R are true and R is the correct explanation of A|Both A and R are true but R is not the correct explanation of A|A is true but R is false|A is false but R is true';

let problems = 0;
const names = readdirSync(join(here, 'data')).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''));

for (const name of names) {
  const { CHAPTERS, QUESTIONS } = loadData(name);
  const issues = [];
  const idxCount = [0, 0, 0, 0];
  const trueCounts = {};
  const seen = new Map();
  let sQuestions = 0, arQuestions = 0;

  QUESTIONS.forEach((q, n) => {
    const at = `${name} Q${n + 1} [${q.c}] "${q.q.slice(0, 55)}"`;

    if (!CHAPTERS.includes(q.c)) issues.push(`SHAPE  ${at} — unknown chapter tag`);
    if (!q.e || q.e.length < 60) issues.push(`SHAPE  ${at} — explanation too thin`);
    const key = q.q + '|' + (q.S || q.L || []).map(x => (Array.isArray(x) ? x[0] : x)).join('|');
    if (seen.has(key)) issues.push(`SHAPE  ${at} — duplicate of Q${seen.get(key) + 1}`);
    seen.set(key, n);

    // ---- statement sets: options are generated, so only the truth mix matters
    if (q.S) {
      sQuestions++;
      const nS = q.S.length;
      const t = q.S.filter(s => s[1]).length;
      const mode = q.mode || 'code';
      if (q.S.some(s => typeof s[0] !== 'string' || typeof s[1] !== 'boolean'))
        issues.push(`SHAPE  ${at} — statement is not [text, boolean]`);
      if (mode === 'code' && nS === 3 && t < 2)
        issues.push(`CODE   ${at} — mode 'code' over 3 statements needs >=2 true, has ${t}`);
      if (mode === 'code' && nS !== 2 && nS !== 3)
        issues.push(`CODE   ${at} — mode 'code' supports 2 or 3 statements, has ${nS}`);
      if (mode === 'count' && nS === 4 && t === 0)
        issues.push(`CODE   ${at} — mode 'count' over 4 statements cannot express zero true`);
      if (q.o) issues.push(`SHAPE  ${at} — has both S and o`);
      trueCounts[`${nS}/${t}`] = (trueCounts[`${nS}/${t}`] || 0) + 1;
      return;
    }

    // ---- hand-written option sets
    if (!Array.isArray(q.o) || q.o.length !== 4) { issues.push(`SHAPE  ${at} — ${q.o?.length} options`); return; }
    if (!(q.a >= 0 && q.a < 4)) { issues.push(`SHAPE  ${at} — bad answer index ${q.a}`); return; }
    if (new Set(q.o).size !== 4) issues.push(`SHAPE  ${at} — duplicate option text`);

    if (q.o.join('|') === AR_KEY) { arQuestions++; idxCount[q.a]++; return; }
    idxCount[q.a]++;

    const lens = q.o.map(o => o.length);
    const correct = lens[q.a];
    const others = lens.filter((_, i) => i !== q.a);
    const mean = lens.reduce((a, b) => a + b, 0) / 4;

    if (correct / Math.max(...others) > LONGEST_RATIO)
      issues.push(`LENGTH ${at} — correct is longest: ${correct} vs ${Math.max(...others)}`);
    if (Math.min(...others) / correct > SHORTEST_RATIO)
      issues.push(`LENGTH ${at} — correct is shortest: ${correct} vs ${Math.min(...others)}`);
    lens.forEach((l, i) => {
      if (l / mean > SPREAD_RATIO)
        issues.push(`ABSOLUTE ${at} — option ${i + 1} is ${(l / mean).toFixed(2)}x the mean`);
    });

    const hedged = q.o.map(o => HEDGES.test(o));
    if (!hedged[q.a] && hedged.filter(Boolean).length === 3)
      issues.push(`HEDGE  ${at} — all three distractors hedge, the correct one does not`);
  });

  const total = QUESTIONS.length;
  const freeTotal = idxCount.reduce((a, b) => a + b, 0);
  if (freeTotal >= 8 && Math.max(...idxCount) / (freeTotal / 4) > 1.6)
    issues.push(`INDEX  ${name} — answer index skewed: ${idxCount.join('/')} of ${freeTotal}`);

  // If almost every statement set has the same truth mix, that itself is a tell.
  const mixes = Object.entries(trueCounts).sort((a, b) => b[1] - a[1]);
  if (sQuestions >= 10 && mixes[0][1] / sQuestions > 0.55)
    issues.push(`FLAT   ${name} — ${mixes[0][1]}/${sQuestions} statement sets share the mix ${mixes[0][0]} (statements/true)`);

  console.log(`\n=== ${name} — ${total} questions ===`);
  console.log(`    ${sQuestions} statement sets · ${arQuestions} assertion-reason · ${freeTotal - arQuestions} plain MCQ`);
  console.log(`    prelims-pattern ${Math.round((sQuestions + arQuestions) / total * 100)}% · answer index ${idxCount.join('/')}`);
  console.log(`    statement truth mixes (statements/true): ${mixes.map(([k, v]) => k + '×' + v).join('  ')}`);
  const chapters = {};
  QUESTIONS.forEach(q => chapters[q.c] = (chapters[q.c] || 0) + 1);
  CHAPTERS.forEach(c => console.log(`    ${String(chapters[c] || 0).padStart(3)}  ${c}`));
  if (issues.length) { issues.forEach(i => console.log('  ✗ ' + i)); problems += issues.length; }
  else console.log('    ✓ clean');
}

console.log(problems ? `\n${problems} problem(s) found.` : '\nAll banks clean.');
process.exit(problems ? 1 : 0);
