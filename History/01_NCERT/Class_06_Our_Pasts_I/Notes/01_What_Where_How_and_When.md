# Chapter 1 — What, Where, How and When?

> **The one-line point:** Before you learn *any* history, you must learn **how anyone knows it at all.** This chapter is the methodology chapter — and UPSC quietly asks from it every year.

[← Index](00_Index.md) | [Next: Ch.2 →](02_From_Hunting_Gathering_to_Growing_Food.md)

---

## 🏷️ Syllabus Classification

| Field | Value |
|---|---|
| **Subject** | History |
| **Sub-discipline** | **Historiography & Sources** (foundational/methodological — not a content area) |
| **Period** | Cuts across all periods |
| **Prelims (GS Paper I)** | *History of India* → source-criticism, terminology, dating |
| **Mains (GS Paper I)** | Supplies the **framing and caveats** for any ancient-India answer; not a standalone topic |
| **Also feeds** | Art & Culture (all of it rests on these sources), Essay (nature of evidence) |
| **Weightage** | ⭐⭐⭐ — 0–1 direct Prelims Qs, but it makes every other chapter answerable |
| **Overlaps with** | **Polity** (Art. 1: *"India, that is Bharat"*), **Geography** (rivers, hills, physiography) |

> 🧭 **Where this sits in the bigger map:** this is *not* Modern History and *not* Art & Culture. It's the **toolkit chapter** — the equivalent of learning what a debugger is before debugging.

---

## 🎯 Learning Outcomes

By the end of this chapter you should be able to:

- [ ] **Distinguish** archaeological sources from literary sources, and place inscriptions and coins correctly in both.
- [ ] **Explain** why an inscription is generally more reliable than a manuscript, using the copying-drift argument.
- [ ] **Identify** which social groups are systematically absent from ancient records, and explain *why* — the seed of every "marginalised histories" answer.
- [ ] **Locate** on a mental map: Narmada valley, Sulaiman & Kirthar hills, Garo hills, Vindhyas, Indus, Ganga — and state what each is famous for.
- [ ] **Trace** the etymology of *India*, *Bharat*, *Hindustan* and *Jambudvipa*, and link it to Article 1 of the Constitution.
- [ ] **Convert** freely between "X years ago" and BCE/CE dates, and state what BP means.
- [ ] **State the limits** of radiocarbon dating (organic material only) and of stratigraphy.
- [ ] **Apply** the survivorship-bias rule: never infer absence of a thing from absence of its evidence.
- [ ] **Define** numismatics, epigraphy, artefact, stratigraphy, manuscript, inscription.

---

## 🎬 Start Here: A Question Worth Sitting With

A textbook tells you *"Ashoka fought the Kalinga war and felt remorse."*

**How does anyone know that?** Nobody alive saw it. There's no video. No newspaper. No witness. The event happened around 261 BCE — over 2,200 years ago.

The honest answer: **because Ashoka himself carved it into a rock, and that rock still exists.**

That's it. That's the entire foundation. Every single sentence in the next nine chapters rests on a physical object or a text that survived. **History is not a story someone made up. History is an inference from surviving evidence.**

---

## 💻 The Software Engineer's Analogy

Think of the past as a **production system that crashed 2,000 years ago and left no monitoring.**

You have no live access. You cannot reproduce the bug. All you have is:

```
┌──────────────────────────────────────────────────────────────┐
│  WHAT SURVIVED FROM A DEAD SYSTEM                            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  📦 ARTEFACTS         →  the binary artefacts left on disk   │
│     (pots, tools,        You can inspect them, but nobody    │
│      bones, beads)       wrote docs for them                 │
│                                                              │
│  📜 INSCRIPTIONS      →  signed, immutable, deployed to      │
│     (Ashoka's edicts)    production. Hard to fake.           │
│                          HIGH TRUST.                         │
│                                                              │
│  📖 MANUSCRIPTS       →  code copied by hand, generation     │
│     (Vedas, epics)       after generation. Every copy        │
│                          introduces drift. LOWER TRUST       │
│                          on details, high on worldview.      │
│                                                              │
│  🪙 COINS             →  timestamped, versioned releases     │
│                          with the maintainer's name on them  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

And the archaeological layers of a site are literally **an append-only log**:

```
   ┌────────────────────────────────┐  ← HEAD (most recent)
   │  Layer 1 : modern                                    │
   ├────────────────────────────────┤
   │  Layer 2 : medieval pottery                          │
   ├────────────────────────────────┤
   │  Layer 3 : Gupta coins                               │
   ├────────────────────────────────┤
   │  Layer 4 : NBPW ware, iron                           │
   ├────────────────────────────────┤
   │  Layer 5 : Harappan seals      │  ← oldest commit
   └────────────────────────────────┘
              BEDROCK
```

**Deeper = older.** Always. This principle is called **stratigraphy**, and it is the single most important rule in archaeology. If a coin is found *below* a Harappan layer, either the dating is wrong or the site was disturbed — exactly like an out-of-order timestamp in a log telling you something's broken.

---

## 1️⃣ WHAT do we find? — The Two Great Families of Evidence

Everything historians use falls into two buckets. **Learn this split cold — it is the most-asked idea from this chapter.**

```
                        ┌─────────────────────────┐
                        │   SOURCES OF HISTORY                   │
                        └────────────┬────────────┘
                     ┌───────────────┴───────────────┐
                     ▼                               ▼
        ┌────────────────────────┐      ┌────────────────────────┐
        │  ARCHAEOLOGICAL        │      │  LITERARY / LITERAL    │
        │  "THINGS people made"  │      │  "WORDS people wrote"  │
        ├────────────────────────┤      ├────────────────────────┤
        │ • Tools, weapons       │      │ • Manuscripts          │
        │ • Pottery              │      │ • Inscriptions*        │
        │ • Buildings, cities    │      │ • Coins (legends)*     │
        │ • Coins                │      │ • Foreign accounts     │
        │ • Seals                │      │                        │
        │ • Bones (human/animal) │      │ * these sit in BOTH    │
        │ • Burials              │      │   buckets — they are   │
        │ • Ornaments            │      │   objects AND text     │
        └───────────┬────────────┘      └───────────┬────────────┘
                    │                                            │
                    ▼                               ▼
          Studied by ARCHAEOLOGISTS       Studied by HISTORIANS
          (dig, date, classify)           (read, translate, interpret)
```

### 📜 Manuscripts — "words written by hand"

The word breaks down beautifully: **Latin *manu* = hand.** Manuscript = *written by hand*. (Same root you know from *manual*.)

| Property | Detail |
|---|---|
| **Written on** | Palm leaf, and **birch bark (*bhurja patra*)** from the Himalayas |
| **Later also** | Paper (arrives much later, via the Arabs/Chinese) |
| **Languages** | **Sanskrit, Prakrit, Tamil** (the big three in this book) |
| **Contents** | Religious texts, epics, poems, plays, medicine, science, grammar |
| **Weakness** | Fragile. Insects eat them. They must be **copied by hand** to survive — and copyists make changes |

> ⚠️ **The copying problem — this is the key insight.** A manuscript that exists today may be a copy of a copy of a copy. The *original* Rigveda manuscript does not exist. Scribes made errors; some "improved" the text; some inserted verses. So historians treat manuscript details cautiously.
>
> 💻 *You know this exact failure mode:* it's a fork chain with no version control. Every generation introduces silent mutations, and you have no `git diff` against the original.

### 🪨 Inscriptions — "writing on hard surfaces"

| Property | Detail |
|---|---|
| **Written on** | Stone, metal (copper plates), pillars, cave walls, temple walls, pots |
| **Why they matter** | They are **contemporary** (made at the time) and **not copied** — no drift |
| **Famous examples** | **Ashoka's edicts** (Ch.7), **Samudragupta's Prayag prashasti** (Ch.9), **Aihole inscription** of Pulakeshin II (Ch.9), Junagadh rock inscription |
| **Typical content** | Royal orders, land grants, gifts to temples/monasteries, praise of kings, donor names |

> 🔑 **Why UPSC cares:** inscriptions are the *gold standard* source for ancient India. When a Prelims question asks "which of these gives us direct evidence of X" — inscriptions usually win.

### 🚫 The Silence Problem — NCERT's most important warning

Read this twice:

> **Manuscripts and inscriptions were made by and for the powerful.** Kings, priests, rich merchants. They tell us what those people wanted remembered.

So who is **missing** from the record?

- Farmers, herders, artisans, hunter-gatherers, fisherfolk
- **Women** (except a handful of donors and queens)
- Servants, labourers, enslaved people (*dasas* and *dasis*)
- Everyone in regions that didn't write

**Nobody wrote about ordinary life because ordinary life wasn't worth recording — to them.** Archaeology partly fixes this: a broken cooking pot in an ordinary house tells you about a person no inscription ever named.

> 💻 **The analogy that makes this stick:** it's **survivorship bias plus selective logging.** Your logs only record what the developers decided to instrument. If nobody logged the failure path, you'd conclude the failure path never ran. Ancient India's "logging config" was written by kings and priests.

This single idea is the seed of dozens of Mains answers on marginalised histories.

---

## 2️⃣ WHERE did people live? — Geography Decides History

People didn't settle randomly. **Follow the water and the food.** Here's the map you need in your head:

```
                        ╔═══════════════════════════════════════════════╗
                        ║        ANCIENT INDIA — KEY GEOGRAPHY          ║
                        ╚═══════════════════════════════════════════════╝

                                    ▲ N
                                                                        │
        ┌───────────────────────────────────────────────────────────────┐
        │                    ╱╲╱╲ HIMALAYAS ╱╲╱╲╱╲╱╲                    │
        │   SULAIMAN ╲                                    ╱ GARO HILLS  │
        │   & KIRTHAR ╲   ┌──────────────────────────┐  ╱  (early       │
        │   HILLS      ╲  │  ~~~ GANGA ~~~~~~~~~~~   │ ╱    farming,    │
        │   (NW — first  ╲│      valley              │╱     NE India)   │
        │    farming)  ~~~╲~~~~~~~~~~~~~~~~~~~~~~~~~~╱                  │
        │            INDUS ╲   ★ 2nd cities here     ╱                  │
        │            (Sindhu)╲  (~2500 yrs ago)     ╱                   │
        │              ★ 1st  ╲                    ╱                    │
        │            cities    ╲__________________╱                     │
        │          (~4700 yrs)  ▓▓▓ VINDHYAS ▓▓▓                        │
        │                      ~~~ NARMADA ~~~                          │
        │                   (earliest humans, 2 mya)                    │
        │                          ╱    ╲                               │
        │              W. GHATS  ╱ DECCAN ╲  E. GHATS                   │
        │                      ╱  PLATEAU  ╲                            │
        │                     │   ~KRISHNA~ │                           │
        │                     │  ~GODAVARI~ │                           │
        │                      ╲  ~KAVERI~ ╱                            │
        │                       ╲_________╱                             │
        │                    (Sangam Age, Ch.8)                         │
        └───────────────────────────────────────────────────────────────┘
```

### The four places NCERT explicitly names — memorise these pairings

| Place | Significance | Why remember |
|---|---|---|
| **Narmada valley** | Home of some of the **earliest people** in the subcontinent — skilled hunter-gatherers who knew about the plants and animals of the forest | Prelims: "earliest human traces" |
| **Sulaiman & Kirthar hills** (NW, in present Pakistan) | Where **agriculture began** ~8,000 years ago. **Mehrgarh** is here. Wheat, barley, sheep, goat, cattle | The birthplace of Indian farming |
| **Garo hills** (NE) and **Vindhyas** (central) | Other **early agriculture** zones. Rice was first grown north of the Vindhyas | Shows farming began in *multiple* places, not one |
| **Indus and its tributaries** | **First cities**, ~4,700 years ago (Ch.3) | The Harappan story |
| **Ganga & its tributaries (esp. the Son)** | **Second phase of cities**, ~2,500 years ago. Land here called **Magadha** (modern Bihar) | Where Ch.5–7 happen |

> 🧠 **Pattern to notice:** civilisation moves **north-west → east**. Farming starts in the NW hills → first cities on the Indus (west) → then the centre of gravity shifts to the Ganga (east) → Magadha becomes the superpower. That drift is the skeleton of the first seven chapters.

### Why rivers? Three concrete reasons

1. **Water** — for drinking, and for irrigating crops
2. **Fertile alluvial soil** — rivers deposit fine silt every flood, renewing the land for free
3. **Transport** — a river is a ready-made highway; boats carry far more than bullock carts

Plus: **grasslands near rivers** meant fodder for cattle, sheep and goats.

---

## 3️⃣ The Names of This Land — India, Bharata, Jambudvipa

This section looks like trivia. **It is not.** It's asked, and it's also a live political topic.

```
   ORIGIN OF "INDIA"                          ORIGIN OF "BHARAT"
   ═══════════════════                        ══════════════════

   SINDHU                                      "BHARATA"
   (Sanskrit name of the                       = name of a group mentioned
    Indus river)                                  in the RIGVEDA
        │                                                                 │
        │  Iranians & Greeks came                      │  They lived in the
        │  from the north-west,                        │  north-west of the
        │  ~2500 years ago.                            │  subcontinent
        │  They pronounced "S" as "H"                                     │
        ▼                                              ▼
   "HINDOS" / "INDOS"                          The word was later used
        │                                      for the WHOLE COUNTRY
        ▼                                                                 │
   The land east of it became                          ▼
   "INDIA"                                       "BHARATA" / "BHARAT"
                                                                          │
        ▼
   "HINDUSTAN" — from the same
   Sindhu → Hindu root
```

**Also note: *Jambudvipa*** — the ancient Sanskrit/Puranic name for the subcontinent, literally *"the land of the jambu (rose-apple) tree."* Ashoka's inscriptions use this term. The new NCERT book emphasises this one heavily.

> 📌 **Constitutional link (connects to your Polity notes):** **Article 1(1) of the Constitution** reads *"India, that is Bharat, shall be a Union of States."* That phrasing is a direct descendant of this exact history. Cross-reference it — UPSC loves questions that straddle History and Polity.

---

## 4️⃣ HOW do we find out? — The Detective Work

### The archaeologist's toolkit

| Method | What it does | 💻 Familiar as |
|---|---|---|
| **Excavation** | Digging in layers, recording *exactly* where each object was found | Structured logging — position is metadata, and losing it destroys the value |
| **Stratigraphy** | Deeper layer = older | Append-only log ordering |
| **Radiocarbon (C-14) dating** | Measures decay of carbon-14 in *organic* material (bone, wood, seeds) to get an age | Inferring a timestamp from a known decay function |
| **Botanical/faunal analysis** | Charred grain and animal bones reveal diet and farming | Analysing data payloads to infer behaviour |
| **Numismatics** | Study of **coins** — kings' names, dates, metal, spread of trade | Versioned releases with the maintainer's signature |
| **Epigraphy** | Study of **inscriptions** | Reading the signed, immutable announcements |

> 🎯 **Two vocabulary words UPSC has used in questions:** **numismatics** (coins) and **epigraphy** (inscriptions). Know them.

### The single most powerful idea in this chapter: *think about what has NOT survived*

Archaeology has a brutal bias. Some materials survive thousands of years; most don't.

```
  SURVIVES WELL ✅              ROTS AWAY ❌
  ─────────────────            ──────────────
  Stone tools                  Wood
  Baked clay pottery           Cloth (cotton, silk)
  Metal (copper, gold)         Leather
  Bone, shell                  Rope, basketry
  Bricks                       Food (unless charred)
  Beads (carnelian, faience)   Paper, palm leaf (mostly)
```

**Consequence:** we know the Stone Age mostly through *stone*, because that's what lasted — not because stone was all they used. They almost certainly used far more wood and plant fibre than stone, and we've simply lost all of it.

> 💻 **This is sampling bias in your dataset.** Your "database" of the past has been filtered by 5,000 years of decay, and the filter is not random — it systematically deletes the organic, the everyday, and the poor. **Never conclude "they didn't have X" from "we haven't found X."**
>
> This exact reasoning error is what Prelims tests. Example: **"The Harappans had no horses"** — what we can actually say is *"horse remains are rare/disputed at Harappan sites."* UPSC asked precisely this in 2013.

---

## 5️⃣ WHEN did it happen? — Dating and the BCE/CE System

### The counting system

```
        ← PAST                                            FUTURE →

  ══════╪══════════╪══════════╪══════╬══════╪══════════╪══════════╪═════▶
      2000 BCE   1000 BCE    500 BCE  │   500 CE    1000 CE    2000 CE
                                                     │
                                 YEAR 1 CE
                              (traditional birth
                               year of Christ)
                                                     │
                       ┌──────────────┴──────────────┐
                       │  NOTE: THERE IS NO YEAR 0   │
                       │  1 BCE is followed directly │
                       │  by 1 CE                    │
                       └─────────────────────────────┘

  BCE numbers COUNT DOWN as you move forward.   CE numbers COUNT UP.
  So 500 BCE is LATER than 1000 BCE.
```

> 💻 **The off-by-one bug:** if you naively model this as a signed integer axis, you get a bug — there is no zero. `1 BCE + 1 year = 1 CE`, not year 0. Astronomers actually patched this by defining year 0; historians never did. Keeping this in mind stops you making arithmetic slips on Prelims date questions.

### The terminology table

| Term | Full form | Meaning | Older term for the same thing |
|---|---|---|---|
| **BCE** | Before Common Era | Years before year 1 | **BC** (Before Christ) |
| **CE** | Common Era | Years after year 1 | **AD** (*Anno Domini*, Latin: "in the year of the Lord") |
| **BP** | Before Present | Years before **1950** (the convention for radiocarbon dates) | — |

**Why the shift from BC/AD to BCE/CE?** Because BC/AD is explicitly Christian, and the same calendar is now used worldwide by people of every faith. "Common Era" is religion-neutral. NCERT uses BCE/CE.

> ⚠️ **Careful with "BP".** It means "before **1950**," not "before today." It's a fixed reference point (chosen because atmospheric nuclear testing after 1950 wrecked carbon-14 baselines). Small detail, occasionally tested.

### Reading dates the way NCERT writes them

NCERT often says **"about 4,700 years ago"** instead of "2700 BCE". Convert like this:

```
   Years ago  =  2026 (current year)  +  BCE date
   e.g.  2700 BCE  →  2026 + 2700  ≈  4,700 years ago ✅

   For CE dates:
   Years ago  =  2026  −  CE date
   e.g.  320 CE    →  2026 − 320   ≈  1,700 years ago ✅
```

### Useful time-words

| Word | Length |
|---|---|
| Decade | 10 years |
| Century | 100 years |
| Millennium | 1,000 years |

⚠️ **The century trap:** the years **1901–2000** are the **20th century**, not the 19th. The 1st century CE was years 1–100. So a date like **78 CE** (Kanishka's era, Ch.8) is in the **1st century CE**. Add one to the "hundreds" digit.

---

## 6️⃣ The Broad Periodisation You Must Carry Forward

NCERT doesn't lay this out as a table, but you need it. **This is the skeleton for the next nine chapters.**

| Age | Defining material | Roughly when (India) | Chapter |
|---|---|---|---|
| **Palaeolithic** (Old Stone Age) | Rough, chipped stone | 2 million – 12,000 yrs ago | Ch.2 |
| **Mesolithic** (Middle Stone Age) | **Microliths** (tiny tools) | 12,000 – 10,000 yrs ago | Ch.2 |
| **Neolithic** (New Stone Age) | Polished stone + **farming** | 10,000 – 4,500 yrs ago | Ch.2 |
| **Chalcolithic / Bronze Age** | **Copper + bronze**; first cities | ~4,700 – 3,900 yrs ago | Ch.3 |
| **Iron Age** | **Iron**; Vedic later phase, megaliths | ~3,000 yrs ago onward | Ch.4–5 |
| **Early Historic** | Written records, empires | ~600 BCE onward | Ch.5–9 |

> 🧠 **Notice how the naming works:** ages are named after **the hardest material people could work**. That's not arbitrary — the material determined what tools you had, which determined what land you could farm, which determined how much surplus you had, which determined what kind of society you could build. **Technology → economy → politics.** This chain is the through-line of the entire book.

---

## ⚡ UPSC FOCUS

### Prelims — what actually gets asked

| Topic | Watch for |
|---|---|
| **Manuscript vs inscription** | Which is contemporary? Which is copied? Which is more reliable? |
| **Numismatics / epigraphy** | Definitions have appeared as direct options |
| **BCE / CE / BP** | Especially **BP = before 1950** |
| **Origin of "India"** | Sindhu → Hindos/Indos → India; Bharata from the Rigveda; **Jambudvipa** |
| **Radiocarbon dating** | Works only on **organic** material — this limitation is testable |
| **Sites & geography** | Narmada (earliest people), Sulaiman/Kirthar + Mehrgarh (farming), Garo hills & Vindhyas (early agriculture) |

**Classic elimination trap:** any option that says *"we know X did not exist because no evidence was found"* is almost always **wrong**. Absence of evidence ≠ evidence of absence.

### Mains — where this chapter is actually used

You will never get a question called "Sources of History." But this chapter supplies the **opening paragraph and the caveats** for many GS1 answers:

- *"Assess the importance of archaeological sources vis-à-vis literary sources in reconstructing ancient Indian history."*
- Any answer on the Harappans → open by noting **the script is undeciphered**, so all conclusions are archaeological inferences.
- Any answer on Vedic society → note it's reconstructed from **religious texts**, which reflect the priestly worldview, not a neutral census.

**That single habit — naming the limits of your source — visibly raises answer quality.** Examiners notice it.

---

## 🔑 Glossary

| Term | Meaning |
|---|---|
| **Manuscript** | Handwritten text (Latin *manu* = hand); on palm leaf or birch bark (*bhurja patra*) |
| **Inscription** | Writing on a hard surface — stone, metal, pillar, pot |
| **Archaeology** | Study of the past through material remains |
| **Archaeologist** | One who studies artefacts, buildings, bones |
| **Historian** | One who studies the past, especially through texts |
| **Artefact** | Any object made or used by humans |
| **Stratigraphy** | Principle that deeper layers are older |
| **Numismatics** | Study of coins |
| **Epigraphy** | Study of inscriptions |
| **Radiocarbon (C-14) dating** | Dating organic remains via carbon-14 decay |
| **BCE / CE / BP** | Before Common Era / Common Era / Before Present (=1950) |
| **Jambudvipa** | Ancient name for the subcontinent — "land of the jambu tree" |
| **Bhurja patra** | Birch bark used for writing |
| **Sindhu** | Sanskrit name of the Indus; root of "India" and "Hindustan" |
| **Prakrit** | Everyday spoken languages of ancient India (as opposed to formal Sanskrit) |

---

## 🔁 60-Second Recap

1. **Two source families:** archaeological (things) and literary (words). Inscriptions and coins straddle both.
2. **Manuscripts** are copied by hand → drift and error. **Inscriptions** are contemporary and unaltered → more reliable.
3. **Records were made by the powerful.** The poor, women, and labourers are largely absent — archaeology partly compensates.
4. **Geography drives settlement:** rivers give water, fertile silt, and transport. Narmada = earliest people; Sulaiman/Kirthar = first farming; Indus = first cities; Ganga = second phase of cities.
5. **"India"** from **Sindhu** → Hindos/Indos. **"Bharata"** from a Rigvedic group. **Jambudvipa** = Puranic name.
6. **Dating:** BCE counts down, CE counts up, **no year 0**, BP = before 1950. Radiocarbon works only on organic material.
7. **Survival bias is real** — organic material rots, stone survives. Never read absence of evidence as evidence of absence.
8. **Ages are named after materials**, and material capability drives economy, which drives politics.

---

## ✍️ Test Yourself

**Prelims style**

1. Consider the following statements:
   1. Radiocarbon dating can be used to determine the age of stone tools directly.
   2. "BP" in archaeological dating is measured from the year 1950.
   3. Epigraphy is the study of coins.
   Which is/are correct?
   → *Only 2. (C-14 needs organic material — stone isn't organic. Epigraphy = inscriptions; numismatics = coins.)*

2. The term "Jambudvipa" refers to —
   → *The Indian subcontinent, "land of the jambu (rose-apple) tree"; found in Ashokan inscriptions.*

3. Which of the following pairs is/are correctly matched?
   1. Narmada valley — earliest known human settlements
   2. Sulaiman and Kirthar hills — early agriculture and herding
   3. Garo hills — first cities
   → *1 and 2 only. Garo hills = early agriculture, not cities. First cities = Indus.*

**Mains style**

4. *"The reconstruction of ancient Indian history is constrained as much by what did not survive as by what did."* Discuss. **(150 words)**

5. Compare the reliability of inscriptions and manuscripts as sources for ancient Indian history. **(150 words)**

**Self-check (answer out loud, no notes):**
- Why is an inscription generally more trustworthy than a manuscript?
- Name three groups of people who are largely missing from ancient written records, and explain why.
- Why can't radiocarbon dating date a stone hand-axe?

---

[← Index](00_Index.md) | [Next: Ch.2 — From Hunting–Gathering to Growing Food →](02_From_Hunting_Gathering_to_Growing_Food.md)
