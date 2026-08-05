/* Rewrite a question bank so the correct answer is not parked at index 0.
   Run:  node normalize.mjs            (all banks)
         node normalize.mjs class10    (one bank)

   Questions that use a canonical Prelims answer-code set (CODE3, CODE2, COUNT,
   AR) are left untouched — there the index is decided by which combination is
   actually right, and reordering the codes would break convention. Every other
   question has its four options rotated so that, across the bank, the correct
   answer lands on 0, 1, 2 and 3 in turn.

   The engine also reshuffles options at run time, so this is belt and braces —
   but it keeps the source itself free of the pattern.                        */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadData } from './build.mjs';

const here = dirname(fileURLToPath(import.meta.url));

const NAMED_SETS = {
  CODE3: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
  CODE2: ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'],
  COUNT: ['Only one', 'Only two', 'All three', 'None'],
  COUNT4: ['Only one', 'Only two', 'Only three', 'All four'],
  AR: [
    'Both A and R are true and R is the correct explanation of A',
    'Both A and R are true but R is not the correct explanation of A',
    'A is true but R is false',
    'A is false but R is true'
  ]
};
const nameFor = o => Object.keys(NAMED_SETS).find(k => NAMED_SETS[k].join('|') === o.join('|'));

const q = s => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n') + "'";
const wrap = (text, indent) => {
  // Keep long strings on one line; readability comes from one field per line.
  return ' '.repeat(indent) + text;
};

const only = process.argv[2];
const names = readdirSync(join(here, 'data'))
  .filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''))
  .filter(n => !only || n === only);

for (const name of names) {
  const { src, QUESTIONS } = loadData(name);
  const header = src.slice(0, src.indexOf('const QUESTIONS = ['));

  let dial = 0;                    // cycles 0..3 across free-form questions
  let lastChapter = null;
  let pending = '';                // chapter banner to glue onto the next entry
  const out = [];

  for (const item of QUESTIONS) {
    // Statement sets generate their own options at run time — nothing to rotate.
    const setName = item.S ? 'S' : nameFor(item.o);
    let o = item.o, a = item.a;
    if (!setName) {
      // Rotate to a *target* index rather than by a relative amount, so
      // running this twice produces the same file.
      const target = dial % 4;
      dial++;
      const shift = (target - item.a + 4) % 4;
      o = o.map((_, i) => item.o[(i - shift + 4) % 4]);
      a = target;
    }

    if (item.c !== lastChapter) {
      pending = `\n/* ============ ${item.c} ============ */\n`;
      lastChapter = item.c;
    }

    const f = [];
    f.push(`{c:${q(item.c)},`);
    f.push(` q:${q(item.q)},`);
    if (item.head) f.push(` head:${q(item.head)},`);
    if (item.S) f.push(` S:[${item.S.map(s => `\n    [${q(s[0])},${s[1]}]`).join(',')}],`);
    if (item.L) f.push(` L:[${item.L.map(l => '\n    ' + q(l)).join(',')}],`);
    if (item.ask) f.push(` ask:${q(item.ask)},`);
    if (item.S) f.push(` mode:${q(item.mode || 'code')}${item.unit ? `,unit:${q(item.unit)}` : ''},`);
    else f.push(setName ? ` o:${setName},a:${a},` : ` o:[${o.map(x => '\n    ' + q(x)).join(',')}],\n a:${a},`);
    f.push(` e:${q(item.e)}}`);
    out.push(pending + f.join('\n'));
    pending = '';
  }

  const body = 'const QUESTIONS = [\n' + out.join(',\n') + '\n\n];\n';
  writeFileSync(join(here, 'data', name + '.js'), header + body, 'utf8');
  console.log(`normalised ${name}.js — ${QUESTIONS.length} questions`);
}
