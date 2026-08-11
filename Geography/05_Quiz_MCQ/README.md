# Geography & Environment Quizzes — source

Durable source for the Geography quiz artifacts. Same engine as the
[Polity quizzes](../../Polity/05_Quiz_MCQ/README.md) — the template, builder,
auditor and simulator were copied unchanged so both subjects share one set of
quality rules.

```
_template.html        the quiz engine + styling, with a /*__DATA__*/ placeholder
data/climates.js      G.C. Leong Part B — the eleven climate types (50 Qs)
data/environment.js   Shankar IAS — ecology to conventions (58 Qs)
build.mjs             template + data  ->  dist/<bank>.html (self-contained)
audit.mjs             static checks; exits non-zero on any problem
simulate.mjs          replays 400 attempts and measures guessability
normalize.mjs         reformats a bank and spreads the answer index off zero
```

```bash
node audit.mjs                 # must print "All banks clean."
node simulate.mjs              # must print "No exploitable pattern found."
node build.mjs                 # writes dist/
node normalize.mjs climates    # optional: reformat + re-spread one bank
```

## The banks

| Bank | Source notes | Questions | Chapters |
|---|---|---|---|
| `climates` | [G.C. Leong Part B](../02_Standard_Reference_Books/GC_Leong/Part_B_Climate_Types/00_Comparison_Matrix.md) | 50 | 11 climate types + cross-cutting |
| `environment` | [Shankar IAS](../02_Standard_Reference_Books/Shankar_IAS_Environment/00_INDEX.md) | 58 | Ecology · biodiversity · protected areas · species · pollution · climate change · Indian law · conventions |

Both are built from the notes in this folder, not from recalled past papers —
so unlike [03_PYQ_Prelims](../03_PYQ_Prelims/00_INDEX.md), nothing here claims to
be an actual UPSC question. These test whether the notes have stuck.

## What the checks caught on the first run

Worth recording, because every one of these was a real defect that would have
made the quiz guessable:

**`climates`, first audit — 3 failures.**

- *LENGTH* — the doldrums question had `"Doldrums"` (8 characters) against three
  distractors averaging 12. The correct answer was the shortest option by a wide
  margin, which is the mirror image of the classic "pick the longest" tell.
  Fixed by rewording all four to a common form.
- *INDEX* — the correct answer sat at position 1 in twenty of twenty-eight
  hand-written sets. `normalize.mjs` rotated them to 7/7/7/7.
- *FLAT* — seventeen of twenty-two statement sets had exactly two true
  statements out of three. Fixed by converting six sets to other truth mixes.

**`climates`, first simulate — a subtler problem the audit could not see.**

Statement answer codes came out at `Only two 50%`. The cause: `mode:'count'`
renders "Only one / Only two / All three / None", and for a set with two true
statements the answer is *always* "Only two" no matter how the engine reshuffles
them. Reshuffling protects the *position* of the false statement but not the
*code* when the mode collapses it.

The fix was to switch those eleven sets to `mode:'code'`, which renders
"1 and 2 only / 2 and 3 only / 1 and 3 only" — three possible codes that the
reshuffle genuinely spreads across. Top code fell from 50% to 23%.

A second simulate pass then showed a length signal on 7.1% of plain MCQs where
the longest option was right half the time. Eleven options were reworded to
bring each set within a few characters. That signal is now 0.0%.

**`environment`, first audit — 2 failures.** An option 1.73× the mean length in
the EIA-stages question, and twenty-six of twenty-eight statement sets sharing
the 3/2 mix. Fixed by rewording the four options to a common form and converting
twelve sets to two-statement form, which opens up "1 only / 2 only / Both /
Neither".

## Current state

```
climates     50 Qs · 22 statement sets · index 25.1/25.4/24.3/25.2
             length signal 0.0% · top statement code 23%
environment  58 Qs · 28 statement sets · index 25.4/24.6/24.5/25.5
             length signal 0.0% · top statement code 22%
```

Both banks pass `audit.mjs` and `simulate.mjs`. One residual note: in
`environment`, an option is clearly shortest on 6.7% of plain MCQs and is
correct 0% of the time. That is two questions, which is noise rather than a
usable rule, and it errs in the harmless direction — but it is the thing to
watch if the bank grows.

## Not yet built

Three further banks would complete the subject, in rough order of value:

| Bank | Source |
|---|---|
| `physical` | [Cl.11 *Fundamentals*](../01_NCERT/Class_11_Fundamentals_of_Physical_Geography/Notes/00_Index.md) + [Leong Part A](../02_Standard_Reference_Books/GC_Leong/Part_A_Physical/) |
| `india` | [Cl.11 *India: Physical Environment*](../01_NCERT/Class_11_India_Physical_Environment/Notes/00_Index.md) + [Cl.12 *India: People and Economy*](../01_NCERT/Class_12_India_People_and_Economy/Notes/00_Index.md) |
| `human` | [Cl.12 *Fundamentals of Human Geography*](../01_NCERT/Class_12_Fundamentals_of_Human_Geography/Notes/00_Index.md) |

`human` is worth more than it looks: population and demography is the
[second-largest Prelims topic](../03_PYQ_Prelims/00_INDEX.md) at 54 of 503
questions, and it is almost never asked in Mains — so it is under-prepared
relative to its weight.

## Publishing

Not yet published. The [artifact rules](../../00_ARTIFACTS.md) apply: publish to
the personal account, register in `00_ARTIFACTS.md`, and never publish from a
temp directory — `dist/` here is the durable source.
