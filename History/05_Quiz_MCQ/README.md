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

`class06` is clean on both checks:

```
117 questions · 72 statement sets · 4 assertion-reason · 41 plain MCQ
prelims-pattern 65% · answer index 15/10/10/10
correct lands on A/B/C/D : 24.8% / 25.0% / 25.0% / 25.2%
one option looks clearly longest on 0.0% of plain MCQs
no statement answer code above 17%
```

## Still to do

Classes VII–XII History banks. Class VII (`Our Pasts II`, medieval) is next.
