# Current Affairs quizzes — source

Engine copied from `History/05_Quiz_MCQ/` (itself from Polity). Same scripts, same
rules, **different palette and cadence**.

```
_template.html      the quiz engine + styling, with a /*__DATA__*/ placeholder
data/YYYY-MM.js     one bank per month, grown weekly
build.mjs           template + data  ->  dist/YYYY-MM.html  (self-contained)
audit.mjs           static checks; exits non-zero on any problem
simulate.mjs        replays 400 attempts and measures whether the quiz is guessable
normalize.mjs       reformats a bank and spreads the answer index off zero
```

```bash
node audit.mjs                # must print "All banks clean."
node simulate.mjs             # must print "No exploitable pattern found."
node build.mjs                # writes dist/
```

**Both checks must pass before publishing.** No exceptions — a quiz that leaks its
answers trains the wrong reflex and is worse than no quiz.

## Cadence — the one difference from the static subjects

Static banks are per chapter and written once. Current affairs banks are **per
month, grown weekly**:

- **Every Sunday** — add ~15 questions from that week to the current month's bank
- **End of month** — audit, simulate, build, publish. One artifact per month
- **Phase C (Apr–May 2027)** — rebuild the best ~50 from each quarter into a single
  revision bank

A month ends up around 60 questions. Nine months ≈ 540 — which is the right order
of magnitude for a full current-affairs revision.

## The rules

Identical to the Polity and History banks (full reasoning in
`Polity/05_Quiz_MCQ/README.md`). In short:

1. **Prefer formats whose options carry no content.** Statement sets store
   `[text, isTrue]` pairs; the engine reshuffles them every attempt and computes
   the answer code afresh, so neither the answer nor the position of the false
   statement is memorisable.
2. **Hand-written options must be equally plausible** — same grammatical form,
   lengths within a few characters, every distractor a real term.
3. **Explanations never reference statement numbers**, because the statements move.
4. **Vary how many statements are true, and how many there are.** No truth mix
   above ~50% of the sets and no answer code above ~17% of the answers.
5. **No anecdote recall.** Test the concept, the distinction, the body, the date.

### Two rules specific to current affairs

6. **Never test the date the news broke.** Test the *thing the news was about*.
   "In which month was X launched?" is not a UPSC question. "Which ministry
   implements X?" is.
7. **Every question carries its source** in the explanation — the compilation,
   the PIB release, the report. Current affairs is the one area where an
   unsourced fact in a quiz bank can quietly teach you something false, and
   you'd never find out until the exam.

## Palette

The accent is **ochre** (`#8A5510` light / `#E3B26A` dark) — newsprint aged on a
desk. Deliberately far from the engine's green (correct) and red (wrong), and far
from History's lapis so the browser tabs stay tellable apart. Favicon 📰.

## Current state

No banks yet. The first is `2026-08` — begun Sunday 9 August 2026 with Week 1's
questions.
