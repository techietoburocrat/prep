# NCERT History Quizzes — source

Durable source for the NCERT History quiz artifacts. Engine and scripts are
copied from `Polity/05_Quiz_MCQ/` and follow the same rules; the palette is
History's own.

```
_template.html      the quiz engine + styling, with a /*__DATA__*/ placeholder
data/class06.js     Class VI · Our Pasts I (10 chapters, 117 questions)
build.mjs           template + data  ->  dist/classNN.html  (self-contained)
audit.mjs           static checks; exits non-zero on any problem
simulate.mjs        replays 400 attempts and measures whether the quiz is guessable
normalize.mjs       reformats a bank and spreads the answer index off zero
```

```bash
node audit.mjs                # must print "All banks clean."
node simulate.mjs             # must print "No exploitable pattern found."
node build.mjs                # writes dist/
node normalize.mjs class06    # optional: reformat + re-spread one bank
```

Published artifacts (same URLs, updated in place):

| Class | Bank | URL |
|---|---|---|
| VI — Our Pasts I | `class06` | https://claude.ai/code/artifact/29fc4e7a-d507-4d47-bdb2-cdafa7d160f8 |

## The rules

Identical to the Polity banks — read `Polity/05_Quiz_MCQ/README.md` for the full
reasoning. In short:

1. **Prefer formats whose options carry no content.** Statement sets store
   `[text, isTrue]` pairs; the engine reshuffles them every attempt and computes
   the answer code afresh, so neither the answer nor the position of the false
   statement is memorisable.
2. **Hand-written options must be equally plausible** — same grammatical form,
   lengths within a few characters, every distractor a real term from the
   syllabus.
3. **Explanations never reference statement numbers**, because the statements
   move. The engine prepends its own line; the authored text explains the
   content.
4. **Vary how many statements are true, and how many there are.** No truth mix
   above ~50% of the sets and no answer code above ~17% of the answers.
5. **No anecdote recall.** Test the concept, the distinction, the site, the
   date — would this plausibly appear in Prelims?

## Palette

The accent is **lapis lazuli** (`#27467B` light / `#84AEE2` dark) — the stone
traded from Afghanistan to the Harappan cities in Chapter 3, and the blue
pigment used in the Ajanta paintings in Chapter 10. Neutrals are biased cool to
sit with it. Favicon 🏺.

Each subject and class gets a distinct accent and favicon so the browser tabs
stay tellable apart; do not reuse a Polity accent here.

## Current state

`class06`, `class07`, `class08`, `class09` and `class10` are all clean on both checks.

```
class10 — 129 questions · 60 statement sets · 13 assertion-reason · 56 plain MCQ
prelims-pattern 57% · answer index 27/14/14/14
truth mixes  3/2×18  4/2×8  4/3×8  3/3×7  2/1×6  2/2×5  4/1×4  2/0×2  4/4×1  3/1×1
correct lands on A/B/C/D : 25.1% / 24.9% / 25.2% / 24.8%
one option looks clearly longest on 0.0% of plain MCQs
no statement answer code above 13%
```

`class10` covers all eight chapter tags — the five printed chapters plus the three
restored ones (Indo-China, Cities, Novels), each a separate tag so the menu is usable.

### ⚠️ Read the simulator output, do not trust its verdict

`simulate.mjs` prints **"No exploitable pattern found."** even when the numbers
above it are bad, because it only judges the length ratio when the pattern is
common enough to be *learnable* (`n / plain >= 0.15`). The first `class10` run
printed that verdict while reporting:

```
one option looks clearly longest on 4.3% of plain MCQs; it is correct 100.0% of the time
```

Three questions had a correct option that was visibly the longest on screen. That
is a real tell on those questions regardless of the gate, and it was fixed at
source by **lengthening the distractors** — never by shortening the correct
option, which merely creates the opposite tell. Always read the two conditional
length lines and the code histogram yourself.

## Still to do

Classes XI–XII History banks. Class XI (`Themes in World History`) is next; notes
for it are not yet written either.
