/* Build print-ready HTML from the Class 6 History notes.
   Each ASCII-diagram block is auto-sized so its widest line fits the page. */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { marked } from 'marked';

const NOTES = process.argv[2] || 'c:/Users/pavan/OneDrive/Desktop/Mission/History/01_NCERT/Class_06_Our_Pasts_I/Notes';
const OUT = process.argv[3] || 'C:/Users/pavan/AppData/Local/Temp/claude/c--Users-pavan-OneDrive-Desktop-Mission-History/f10aaf61-53b0-4794-ae07-e2d8aa297f00/scratchpad/pdfbuild/html';
mkdirSync(OUT, { recursive: true });

// A4 portrait, 14mm side margins -> usable width in px at 96dpi
const CONTENT_PX = (210 - 28) / 25.4 * 96;   // ~688
const CH_RATIO = 0.601;                       // Consolas advance / font-size
const MIN_PT = 6.4, MAX_PT = 11.5;

/* Whole-pixel sizes only: at fractional sizes Chrome sub-pixel-positions each
   glyph, so adjacent box-drawing characters stop joining and long rules render
   as dashes. Floor rather than round so the widest line still fits.          */
function fitFontPx(maxChars) {
  if (!maxChars) return MAX_PT;
  const px = CONTENT_PX / (maxChars * CH_RATIO);
  return Math.max(MIN_PT, Math.min(MAX_PT, Math.floor(px * 2) / 2));
}

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---- keep ASCII-art columns true in print ----------------------------------
   Inside diagrams every glyph must come from the one monospace face. Emoji do
   not: Chrome renders them from Segoe UI Emoji at roughly double advance, which
   tears the box frames apart. They were authored as two columns, so two spaces
   put them back. A handful of invented/uncovered symbols map to same-width
   ASCII. This applies ONLY to fenced blocks — emoji in prose are untouched.  */
const KEEP = new Set();   // Cascadia Mono lacks ★ ☆ ☂ — map them below instead
const SAME_WIDTH = {
  '★': '*', '☆': 'o', '☂': '^',
  '⊕': '*', '⊞': '#', '⋔': 'Y', '⌇': '~', '⧉': '=',
  '①': '1', '②': '2', '③': '3', '④': '4',
  '⑤': '5', '⑥': '6', '⑦': '7', '⑧': '8'
};
function asciiSafe(text) {
  return text
    .replace(/"सत्यमेव जयते" — /g, '')
    .replace(/[️︎⃣]/g, '')                    // zero-width modifiers
    // single-width substitutions first, before the blanket emoji sweeps
    .replace(/[★☆☂⊕⊞⋔⌇⧉①-⑧]/g, c => SAME_WIDTH[c])
    .replace(/[\u{1F000}-\u{1FAFF}]/gu, '  ')                // pictographs, flags
    .replace(/[\u{2700}-\u{27BF}\u{2B00}-\u{2BFF}\u{23E9}-\u{23FA}]/gu, '  ')
    .replace(/[\u{2600}-\u{26FF}]/gu, c => (KEEP.has(c) ? c : '  '))
    .replace(/[ऀ-ॿ]/g, '');                        // stray Devanagari
}

// Render fenced blocks ourselves so we can size each one individually.
const renderer = new marked.Renderer();
renderer.code = ({ text }) => {
  const clean = asciiSafe(text);
  const widest = clean.split('\n').reduce((m, l) => Math.max(m, [...l].length), 0);
  const size = fitFontPx(widest).toFixed(2);
  return `<pre class="diagram" style="font-size:${size}px"><code>${esc(clean)}</code></pre>`;
};
// Keep tables inside a scroll/shrink wrapper so they never push the page sideways.
renderer.table = function (token) {
  const head = token.header.map(c => `<th>${this.parser.parseInline(c.tokens)}</th>`).join('');
  const rows = token.rows.map(r =>
    `<tr>${r.map(c => `<td>${this.parser.parseInline(c.tokens)}</td>`).join('')}</tr>`).join('\n');
  return `<div class="tablewrap"><table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
};

marked.setOptions({ renderer, gfm: true, breaks: false });

const CSS = `
@page { size: A4 portrait; margin: 14mm 14mm 16mm; }
:root{
  --ink:#1B1F27; --muted:#5A6472; --line:#D4DAE3; --accent:#27467B;
  --accent-soft:#EDF1F8; --paper:#FFFFFF;
  --serif: Georgia,'Iowan Old Style','Palatino Linotype',serif;
  --sans: 'Segoe UI',-apple-system,Roboto,Helvetica,Arial,sans-serif;
  --mono: 'Cascadia Mono',Consolas,'DejaVu Sans Mono','Courier New',monospace;
}
*{box-sizing:border-box;}
body{
  margin:0; background:var(--paper); color:var(--ink);
  font-family:var(--serif); font-size:10.2pt; line-height:1.5;
  -webkit-print-color-adjust:exact; print-color-adjust:exact;
}
h1,h2,h3,h4{font-family:var(--sans); text-wrap:balance; line-height:1.25; margin:0 0 .4em;}
h1{font-size:20pt; color:var(--accent); margin-top:0; padding-bottom:.25em; border-bottom:2.5px solid var(--accent);}
h2{font-size:13.5pt; margin-top:1.5em; color:var(--accent); padding-bottom:.15em; border-bottom:1px solid var(--line);}
h3{font-size:11.5pt; margin-top:1.2em;}
h4{font-size:10.4pt; margin-top:1em; color:var(--muted);}
h1,h2,h3,h4{break-after:avoid; page-break-after:avoid;}
p,ul,ol{margin:0 0 .65em;}
ul,ol{padding-left:1.35em;}
li{margin:.16em 0;}
a{color:var(--accent); text-decoration:none;}
strong{color:#111620;}
hr{border:0; border-top:1px solid var(--line); margin:1.3em 0;}

pre.diagram{
  font-family:var(--mono); line-height:1.18; white-space:pre;
  background:#F7F9FC; border:1px solid var(--line); border-left:3px solid var(--accent);
  border-radius:4px; padding:8px 10px; margin:.7em 0; overflow:hidden;
  break-inside:avoid; page-break-inside:avoid;
}
pre.diagram code{font-family:inherit; font-size:inherit;}
code{font-family:var(--mono); font-size:.88em; background:var(--accent-soft);
     padding:.08em .3em; border-radius:3px;}

.tablewrap{margin:.7em 0; break-inside:avoid; page-break-inside:avoid;}
table{width:100%; border-collapse:collapse; font-family:var(--sans); font-size:8.6pt;}
th,td{border:1px solid var(--line); padding:4px 6px; text-align:left; vertical-align:top;}
th{background:var(--accent); color:#fff; font-weight:600;}
tbody tr:nth-child(even){background:#F6F8FC;}
td code{font-size:.9em;}

blockquote{
  margin:.7em 0; padding:.5em .8em; background:var(--accent-soft);
  border-left:3px solid var(--accent); border-radius:0 4px 4px 0;
  break-inside:avoid; page-break-inside:avoid;
}
blockquote p:last-child{margin-bottom:0;}

/* the ← / Index / → nav rows */
p > a[href$=".md"]{font-size:8.5pt;}

.chapter{break-before:page; page-break-before:always;}
.chapter:first-of-type{break-before:auto; page-break-before:auto;}

.titlepage{
  height:255mm; display:flex; flex-direction:column;
  justify-content:center; align-items:center; text-align:center;
  break-after:page; page-break-after:always;
}
.titlepage .kicker{font-family:var(--sans); font-size:10pt; letter-spacing:.22em;
  text-transform:uppercase; color:var(--muted); margin-bottom:1.2em;}
.titlepage h1{font-family:var(--serif); font-size:38pt; border:0; color:var(--ink); margin:0;}
.titlepage .sub{font-family:var(--serif); font-size:17pt; color:var(--accent); margin:.35em 0 0; font-style:italic;}
.titlepage .rule{width:70mm; height:2.5px; background:var(--accent); margin:1.6em 0;}
.titlepage .meta{font-family:var(--sans); font-size:9.5pt; color:var(--muted); line-height:1.9;}
.titlepage .glyph{font-size:34pt; margin-bottom:.5em;}
`;

function page(title, bodyHtml) {
  return `<!doctype html><html><head><meta charset="utf-8">
<title>${esc(title)}</title><style>${CSS}</style></head><body>
${bodyHtml}
</body></html>`;
}

const files = readdirSync(NOTES).filter(f => f.endsWith('.md')).sort();
const titleOf = md => (md.match(/^#\s+(.+)$/m) || [, 'Untitled'])[1].replace(/[*_`]/g, '');

// ---- individual chapter PDFs ----
for (const f of files) {
  const md = readFileSync(join(NOTES, f), 'utf8');
  writeFileSync(join(OUT, basename(f, '.md') + '.html'),
    page(titleOf(md), `<div class="chapter">${marked.parse(md)}</div>`), 'utf8');
}

// ---- one combined book ----
const today = new Date().toISOString().slice(0, 10);
const title = `<div class="titlepage">
  <div class="glyph">&#127994;</div>
  <div class="kicker">${process.env.KICKER || 'NCERT &middot; History'}</div>
  <h1>${process.env.BOOKTITLE || 'Our Pasts I'}</h1>
  <div class="sub">${process.env.BOOKSUB || 'complete chapter notes'}</div>
  <div class="rule"></div>
  <div class="meta">
    Prepared for UPSC Civil Services 2027<br>
    ${process.env.BOOKLINE || ''}<br>
    ${today}
  </div>
</div>`;

const body = files.map(f => {
  const md = readFileSync(join(NOTES, f), 'utf8');
  return `<div class="chapter">${marked.parse(md)}</div>`;
}).join('\n');

writeFileSync(join(OUT, (process.env.COMBINED || '_COMPLETE') + '.html'),
  page('Class VI History — Our Pasts I (complete)', title + body), 'utf8');

console.log(`wrote ${files.length} chapter files + 1 combined -> ${OUT}`);
