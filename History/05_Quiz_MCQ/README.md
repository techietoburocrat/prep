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

Published artifacts (same URLs, updated in place — republish the same `dist/` path):

| Class | Bank | Qs | Favicon | URL |
|---|---|:--:|:--:|---|
| VI — Our Pasts I | `class06` | 117 | 🏺 | https://claude.ai/code/artifact/29fc4e7a-d507-4d47-bdb2-cdafa7d160f8 |
| VII — Our Pasts II | `class07` | 111 | 🕌 | https://claude.ai/code/artifact/e16f5b53-0fd8-4914-87eb-65366806b343 |
| VIII — Our Pasts III | `class08` | 87 | 🚩 | https://claude.ai/code/artifact/9cba9395-a947-4a8c-94e7-492260772385 |
| IX — India and the Contemporary World I | `class09` | 115 | 🌍 | https://claude.ai/code/artifact/4d6643bc-12c9-4217-a0d9-a924de9d8a31 |
| X — India and the Contemporary World II | `class10` | 129 | 🏭 | https://claude.ai/code/artifact/e68419d6-e5a5-432d-af30-277b8bd96720 |
| XI — Themes in World History | `class11` | 126 | 🏛️ | https://claude.ai/code/artifact/bb8d93b5-667f-4af2-838a-dce9fb02d3d3 |
| XII — Themes in Indian History I | `class12p1` | 61 | 🧱 | https://claude.ai/code/artifact/f4139b07-3671-4bea-ba9d-1d2df5c82568 |
| XII — Themes in Indian History II | `class12p2` | 75 | 🛕 | https://claude.ai/code/artifact/faed50aa-329e-4e70-a0a7-9ffdec8d0074 |
| XII — Themes in Indian History III | `class12p3` | 76 | ⚖️ | https://claude.ai/code/artifact/1db21367-9ce8-4b7a-9f68-fa6d07aa4a0a |

All nine share the lapis accent, so **the favicon is the only thing that tells the browser tabs apart** — keep them stable across republishes. Registered in `Mission/00_ARTIFACTS.md` and on the hub page.

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

✅ **Nothing — the NCERT History series is complete.** Classes VI to XII, nine
banks, 764 questions, all clean on both checks (17 Aug 2026).

⭐ The fast route (proved on Class 10, and used for all four of the XI–XII banks):
do **not** re-read the whole chapter to write questions. Extract just the two dense
blocks per chapter —

```bash
awk '/^### 🔴 Prelims traps/,/^### 🟢/' NN_Theme.md
```

— because those trap tables are already *claim vs truth* pairs, i.e. a distractor
and an answer side by side, which is the shape of an MCQ. Plan the truth-mix
distribution on paper **before** writing so FLAT and the code histogram cannot bite.

### ⚠️ The two traps that bit on every one of the XI–XII banks

1. **Writing naturally produces far too many all-true 3-statement sets.** A 3/3
   `code` set always answers *"1, 2 and 3"*, so ten of them in a 40-set bank puts
   that one code at 26%. The `class12p3` first pass hit exactly that. **Fix at
   source by flipping one statement to false** — and do it in the statement, not
   in the explanation.
2. **Over-correcting then trips FLAT.** Converting every 3/3 to 3/2 pushed
   `class12p2` and `class12p3` to 61–66% of sets sharing the 3/2 mix, over the
   0.55 threshold. **The reliable second move is to DROP one true statement from
   about eight sets, turning 3/2 into 2/1** — that fills the `CODE2` codes, which
   are otherwise the emptiest part of the histogram.

⭐ **A target distribution that passed first time:** roughly `3/2` 40% · `2/1` 25%
· the rest spread over `4/2`, `4/3`, `3/3`, `2/2`, `4/4`, `2/0`. Keep no single
answer code above ~15%.

⚠️ **`normalize.mjs` does not rotate assertion-reason questions**, because `AR` is
a canonical named set. If every AR is written with `a:0` the INDEX check fails even
after normalising. **Vary the AR answers deliberately** — make some reasons false
(`a:2`), some assertions false (`a:3`), and some true-but-not-explanatory (`a:1`).

⚠️ **class09 residual:** the simulator reports a clearly-longest option on 3.7% of
its plain MCQs and a clearly-shortest on 7.4%, correct **0.0%** of the time in both
cases — i.e. a weak *"don't pick that one"* tell on roughly 2–3 questions out of 45.
It is far below the simulator's 15% learnability gate and the bank passes both
checks, but classes 06/07/08/10 all sit at 0.0%. Worth flattening at source
(lengthen the short distractors) next time class09 is touched.
