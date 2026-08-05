/* Build the self-contained quiz HTML files from _template.html + data/<class>.js
   Usage:  node build.mjs            (builds every data file)
           node build.mjs class10    (builds one)                              */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const template = readFileSync(join(here, '_template.html'), 'utf8');

export function loadData(name) {
  const src = readFileSync(join(here, 'data', name + '.js'), 'utf8');
  const fn = new Function(src + '\nreturn {COURSE, CHAPTERS, QUESTIONS};');
  return { src, ...fn() };
}

// Only build when run directly — audit.mjs imports loadData from here.
const runDirectly = process.argv[1] && process.argv[1].replace(/\\/g, '/').endsWith('/build.mjs');
if (!runDirectly) { /* imported as a library */ } else buildAll();

function buildAll() {
const only = process.argv[2];
const names = readdirSync(join(here, 'data'))
  .filter(f => f.endsWith('.js'))
  .map(f => f.replace(/\.js$/, ''))
  .filter(n => !only || n === only);

mkdirSync(join(here, 'dist'), { recursive: true });

for (const name of names) {
  const { src, COURSE, QUESTIONS } = loadData(name);
  const html = template
    .replace('__TITLE__', COURSE.title)
    .replace('/*__DATA__*/', () => src.trimEnd());
  const out = join(here, 'dist', name + '.html');
  writeFileSync(out, html, 'utf8');
  console.log(`${name}.html  ${QUESTIONS.length} questions  ${(html.length / 1024).toFixed(1)} KB`);
}
}
