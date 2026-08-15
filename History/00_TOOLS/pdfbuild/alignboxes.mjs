/* Re-align ASCII box frames inside fenced code blocks of the notes.

   WHY THIS EXISTS
   ---------------
   mkhtml.mjs replaces every emoji inside a fenced block with TWO spaces, because
   Chrome renders emoji from Segoe UI Emoji at roughly double the monospace
   advance and they would otherwise tear the frames apart. That is correct — but
   it means a line containing a star is ONE column wider per star than it looks
   in the editor, where a star is a single codepoint. Author a box by counting
   characters and every starred line pushes its right border out.

   This script measures each line the way the renderer will see it and pads or
   trims the run of spaces immediately before the trailing frame character so
   that every right border lands in the same column.

   Usage:  node alignboxes.mjs <NOTES_DIR> [--check]
           --check reports without writing.                                   */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const DIR = process.argv[2];
const CHECK = process.argv.includes('--check');
if (!DIR) { console.error('usage: node alignboxes.mjs <NOTES_DIR> [--check]'); process.exit(2); }

// Mirrors the substitutions mkhtml.mjs performs inside fenced blocks.
const rendered = line => line
  .replace(/[️︎⃣]/g, '')
  .replace(/[★☆☂⊕⊞⋔⌇⧉①-⑧]/g, 'X')
  .replace(/[\u{1F000}-\u{1FAFF}]/gu, '  ')
  .replace(/[\u{2700}-\u{27BF}\u{2B00}-\u{2BFF}\u{23E9}-\u{23FA}]/gu, '  ')
  .replace(/[\u{2600}-\u{26FF}]/gu, '  ');

const width = line => [...rendered(line)].length;

const FRAME_END = /[│┃║]$/;          // │ ┃ ║
const FRAME_ANY = /[┌-╿]/;                 // any box-drawing char

let filesTouched = 0, linesFixed = 0, blocksSeen = 0;

for (const f of readdirSync(DIR).filter(n => n.endsWith('.md'))) {
  const path = join(DIR, f);
  const lines = readFileSync(path, 'utf8').split('\n');
  let inFence = false, block = [], start = 0, changedFile = false;

  const flush = end => {
    if (!block.some(l => FRAME_ANY.test(l))) return;
    blocksSeen++;
    // The target width is that of the widest full-frame line (the ┌──┐ / └──┘
    // rules), which is what the box was drawn to.
    const frameRules = block.filter(l => /^\s*[┌└├][─═━]/.test(l));
    const target = frameRules.length ? Math.max(...frameRules.map(width))
                                     : Math.max(...block.map(width));
    block.forEach((l, i) => {
      if (!FRAME_END.test(l)) return;
      const delta = target - width(l);
      if (delta === 0) return;
      const m = l.match(/^(.*?)( *)(.)$/s);          // body, pad, closing frame
      if (!m) return;
      const pad = delta > 0 ? m[2] + ' '.repeat(delta)
                            : m[2].slice(0, Math.max(0, m[2].length + delta));
      if (delta < 0 && m[2].length + delta < 1) return;   // refuse to eat text
      lines[start + i] = m[1] + pad + m[3];
      linesFixed++; changedFile = true;
    });
  };

  lines.forEach((l, i) => {
    if (l.startsWith('```')) {
      if (inFence) { flush(i); block = []; }
      else { start = i + 1; }
      inFence = !inFence;
    } else if (inFence) block.push(l);
  });

  if (changedFile) {
    filesTouched++;
    if (!CHECK) writeFileSync(path, lines.join('\n'), 'utf8');
    console.log(`${CHECK ? 'would fix' : 'fixed'}  ${f}`);
  }
}

console.log(`\n${blocksSeen} framed block(s) · ${linesFixed} line(s) ${CHECK ? 'need realignment' : 'realigned'} · ${filesTouched} file(s)`);
