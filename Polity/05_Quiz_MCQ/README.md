# NCERT Polity Quizzes — source

Durable source for the seven NCERT Polity quiz artifacts. The earlier versions
lived only in session temp directories and were lost; everything now lives here
and is rebuilt from source.

```
_template.html     the quiz engine + styling, with a /*__DATA__*/ placeholder
data/class06..10.js  one question bank per class (COURSE, CHAPTERS, QUESTIONS)
data/class11icw.js   Class XI · Indian Constitution at Work (10 chapters)
data/class11pt.js    Class XI · Political Theory (8 chapters)
build.mjs          template + data  ->  dist/classNN.html  (self-contained)
audit.mjs          static checks; exits non-zero on any problem
simulate.mjs       replays 400 attempts and measures whether the quiz is guessable
normalize.mjs      reformats a bank and spreads the answer index off zero
```

```bash
node audit.mjs                # must print "All banks clean."
node simulate.mjs             # must print "No exploitable pattern found."
node build.mjs                # writes dist/
node normalize.mjs class09    # optional: reformat + re-spread one bank
```

Published artifacts (same URLs, updated in place):

| Class | Bank | URL |
|---|---|---|
| VI   | `class06`    | https://claude.ai/code/artifact/417260c7-e66a-4a9f-8a4b-1e877415113f |
| VII  | `class07`    | https://claude.ai/code/artifact/cad14910-a26a-4924-a35e-dcb51665d395 |
| VIII | `class08`    | https://claude.ai/code/artifact/420d7bdf-930d-488b-bef4-0713ddd99b7b |
| IX   | `class09`    | https://claude.ai/code/artifact/51ab6ef0-ca1e-46df-8d9e-56e885d2a923 |
| X    | `class10`    | https://claude.ai/code/artifact/599fe569-4614-4506-8377-5915f7fb038f |
| XI — Indian Constitution at Work | `class11icw` | https://claude.ai/code/artifact/a0362033-f785-478f-82dc-6e3706ed2e8c |
| XI — Political Theory | `class11pt` | https://claude.ai/code/artifact/d05d284a-9b17-4644-85a6-e91eeae6b81d |

## The problem this rebuild fixed

In the first version every question was written the same way: the correct
option was the long, carefully-qualified one and the three distractors were
short and obviously silly. Shuffling the options did not help, because the tell
was the *text*, not the position — "pick the longest" scored close to 100%.

## The rules

**1. Prefer formats where the options carry no content.**
About half of every bank is a statement set. The data holds the statements with
their truth values:

```js
S:[["An Act of 1956 made Sinhala the only official language.", true],
   ["Tamil areas were granted regional autonomy.",             false],
   ["The constitution said the state shall foster Buddhism.",  true]],
ask:"Which of the statements given above is/are correct?", mode:"code",
```

The engine reshuffles the statements on every attempt and *computes* the answer
code from where the true ones landed. So the answer is never memorisable, and
neither is the position of the false statement — which in the first draft was
almost always the last one. `mode:"count"` ("Only one / Only two / All three /
None") takes any mix of true and false; `mode:"code"` ("1 and 2 only / …")
needs at least two true statements out of three, which `audit.mjs` enforces.

Assertion–reason questions use the standard four-option code, which is likewise
content-free.

**2. Where options are hand-written, make all four equally plausible.**
Same grammatical form, lengths within a few characters, and every distractor a
real term from the syllabus — a real article number, a real year, a real body.
No filler options.

**3. Explanations never reference statement numbers.**
They cannot, because the statements move. The engine prepends its own line
("Statements 1 and 3 are correct; statement 2 is not.") and the authored text
explains the *content*: which claim fails and why.

**4. Vary how many statements are true — and how many there are.**
A three-statement set where all three are true can only ever answer "1, 2 and 3",
so a bank full of them collapses the answer-code distribution no matter how well
the engine shuffles. The Class XI banks first came in at 44–47% on that one code;
the fix was to convert most all-true sets into sets with a genuinely false
statement, and to turn a further batch into **two-statement** sets, which open up
"1 only", "2 only", "Both" and "Neither". Aim for no truth-mix above ~50% of the
sets and no answer code above ~17% of the answers.

**5. No anecdote recall.**
Not "whose story describes a domestic worker" — that tests memory of a textbook
character. Test the concept, the distinction, the article number, the year.

## The two checks

`audit.mjs` is static and per-question: option count, valid answer index, known
chapter tag, no duplicate stems, no option far longer or shorter than the rest,
no absolutes ("always", "never", "only") sitting exclusively in the distractors,
answer index spread across 0–3, and enough variety in how many statements are
true — if nearly every set has exactly one false statement, that is itself a
pattern worth flagging.

`simulate.mjs` is the honest end-to-end test. It replays the engine's own
session builder 400 times and asks: when one option *looks* clearly longest —
longer than the runner-up by at least 8 characters or 12% — how often is it the
right one? The target is about 25%, the same as guessing. Far above 25% means
"pick the longest" works; far *below* 25% is just as exploitable, because then
"never pick the longest" works. Both directions fail the check.

It also prints the distribution of statement answer codes, which is where an
all-true bank gives itself away.

Current state: all seven banks are clean. The correct answer lands on A/B/C/D at
25% each, no bank has a usable length signal, and no statement answer code
exceeds 17%.
