# Class XII, *Themes in Indian History Part II* — the chapter NCERT DELETED

## What is in this folder

| File | What it really is | Verified |
|---|---|---|
| `09_OldTheme9_Kings_and_Chronicles_The_Mughal_Courts.pdf` | **Old THEME NINE — *Kings and Chronicles: The Mughal Courts* (c. sixteenth–seventeenth centuries)** | ✅ `pdftotext -f 1 -l 1` — first page reads *"THEME NINE / Kings and Chronicles / The Mughal Courts"* |

Source: **`https://archive.org/download/ncert-lehs2/lehs205.pdf`** (5.7 MB), downloaded **2026-08-16**. Original publisher PDF with a clean text layer — not a scan.

---

## ⚠️ How this deletion was discovered — it is NOT recorded in the rationalisation note

This one is easy to miss, because **the current Part II looks complete**: it has four themes (5–8) and its contents page lists exactly those four. Nothing announces a missing chapter.

**The tell is arithmetic, and it comes from Part III:**

```
   CURRENT EDITION            ORIGINAL EDITION
   ---------------            ----------------
   PART I    Themes 1-4       PART I    Themes 1-4    (4 -- unchanged)
   PART II   Themes 5-8       PART II   Themes 5-9    (5 -- ONE DELETED)
   PART III  Themes 9-12      PART III  Themes 10-15  (6 -- TWO DELETED)
                                                       ---
                              15 themes originally
```

**Part III's original numbering started at Theme 10.** *(Established independently — see that book's `Removed_Chapters_Old_Edition/README.md`, where old Theme 15 = present Theme 12 is proved by a surviving `Fig. 15.2` caption.)*

**So Part II must originally have ended at Theme 9** — and the current book ends at Theme 8. **One theme is missing, and it is the last one.**

**Confirmed two ways:**
1. **The archive.org item `ncert-lehs2` holds `lehs201`–`lehs20`5** — **five** chapter files where the current book has four.
2. **`lehs205.pdf`'s first page reads *"THEME NINE — Kings and Chronicles: The Mughal Courts"*.**

✅ **And Part I is INTACT.** `archive.org/metadata/ncert-lehs1` lists only `lehs101`–`lehs104` — four chapters, matching the current book. **Nothing was deleted from Part I; do not go looking for a fifth Ancient India theme.**

---

## 📉 What the deletion costs you — ⭐⭐⭐⭐ real, and larger than it first appears

**This is the Mughal *court chronicle* chapter — the *Akbar Nama* and the *Badshah Nama*.** Its loss hurts in three separate places:

1. ⭐⭐⭐⭐⭐ **It breaks Part II's own source-criticism sequence.** Every theme in Class 12 is built around a *kind of source*. Theme 8 (*Peasants, Zamindars and the State*) is built on the ***Ain-i-Akbari***, and it repeatedly warns that the *Ain* was **produced inside the imperial court for imperial purposes**. **Theme 9 was where that court, its patronage and its historians were actually explained.** Without it, Theme 8's caution about its own source has lost its foundation.

2. ⭐⭐⭐⭐⭐ **It is Art & Culture material with no substitute in the series** — **Mughal painting** (the illustrated manuscript, the *nastaliq* calligraphy, the workshops), the ideology of **kingship** (*farr-i izadi*, the "Divine Light"), ***sulh-i kul*** at the level of imperial doctrine, and the **architecture and ritual of the court** (the *jharokha darshan*, the ranked *mansabdari* hierarchy, court etiquette). **Prelims asks this directly.**

3. ⭐⭐⭐⭐ **It is the Mughal half of a comparison the syllabus keeps making.** Class 7 Ch.4 (*The Mughals*) covers the same dynasty at school level; **Class 11 Supplement Part B** explains the *iqta*/*mamluk* institutions that reached India before them; and Theme 8 covers the agrarian base. **Theme 9 was the chapter about how the empire described ITSELF.**

> ⭐ **The organising idea worth keeping even before you read it:** the Mughal rulers *"saw themselves as **appointed by Divine Will** to rule over a **large and heterogeneous populace**"*, and **one way of transmitting that vision was by commissioning court historians to write dynastic histories** — chronicles that simultaneously **recorded events** and **collected information to help the rulers govern**. ⭐⭐⭐⭐⭐ **A chronicle is therefore both a history and an instrument of rule** — which is exactly the lesson Part III's Theme 9 teaches with the Fifth Report, two centuries later.

---

## 🔁 How this was recovered — the route that worked (do not rediscover it)

The traps recorded for the other classes **all applied here**, plus one new one:

1. ⭐ **Search archive.org by TITLE, not by book code.** `archive.org/advancedsearch.php?q=title%3A%28themes+in+indian+history%29&fl[]=identifier&rows=40&output=json` → `ncert-lehs1`, `ncert-lehs2`, `ncert-lehs3`.
2. ⭐⭐⭐⭐⭐ **Check `archive.org/metadata/<item>` FIRST and COUNT THE CHAPTER FILES.** The file count alone tells you which edition the item holds — and **it is the cheapest possible check**, a few KB of JSON against a multi-megabyte download. **`lehs201`–`lehs205` = five files = the old edition.** *(Contrast Class 9's `ncert-iess3`, which held only the rationalised book. **An archive.org item may be either edition; never assume.**)*
3. **Then download the single file:** `curl -L -o lehs205.pdf https://archive.org/download/ncert-lehs2/lehs205.pdf`
4. ⭐ **ALWAYS verify with `pdftotext -f 1 -l 1` before trusting the filename.** The renumbering trap is real for this book: **a post-rationalisation `lehs2NN` file means a different chapter than the same name before it.**
5. **archive.org rate-limits hard** — bursts return `429`, and the CDX API separately returns bare nginx `404`s under load. **Back off; do not conclude the file is gone.**

⚠️ **Do not bother with `ncert.nic.in` or the Wayback `dd.zip` route for this book.** The `lehs3dd.zip` snapshots all return a 548-byte nginx 404 despite being listed in CDX — *a CDX entry is not a promise that the bytes are retrievable* — and there is no reason to expect `lehs2dd.zip` to behave differently. **The archive.org item is the reliable route for `lehs*`.**

---

## ⭐⭐⭐⭐⭐ A FIFTH PROOF OF THE DELETION — and it is inside the CURRENT book (found 2026-08-16)

**The rationalised Part II still carries the deleted chapter's RUNNING HEADER.**

Run `pdftotext -layout` over the current `08_Theme8_Peasants_Zamindars_and_the_State.pdf` (which includes the book's Credits pages) and page 224 extracts as:

```
224                     KINGS AND CHRONTICHLEEMSES IN INDIAN HISTORY - PART II
```

That is **two overlapping text runs interleaved character by character**:

```
   KINGS AND CHRONICLES              <- the running header of the DELETED Theme 9
   THEMES IN INDIAN HISTORY - PART II <- the running header of the current book
```

⭐ **In the OLD edition, page 224 is exactly where "THEME NINE — Kings and Chronicles" begins.** When the chapter was cut, the Credits page moved onto page 224 — **and the old header object was left behind in the file.**

⚠️ **Why this is worth recording as a TECHNIQUE, not just a curiosity:** when a PDF is *edited* rather than *rebuilt*, the edit is never complete. Cross-references outlive their targets, figure numbers outlive renumbering, and headers outlive their chapters. **`pdftotext` over the whole book and a search for anomalous strings is a cheap way to detect a deletion nobody announced** — the same method that found `Fig. 15.2` surviving in Part III.

**And Theme 8 points at the missing chapter three more times:** §1.1 *"(see also Chapter 9)"*, the *mansabdari* box in §6 *"See also Chapter 9"*, and §8's promise that *"we will look at these parts more closely in Chapter 9"* — **never kept.** A fourth reference, to East India Company records *"(see also Chapter 10)"*, uses the **old numbering** and now means Part III's Theme 9.

---

## 📌 Status

- ✅ **PDF recovered and verified in place (2026-08-16).**
- ✅ **NOTES WRITTEN (2026-08-16)** — [`../../Notes/09_Supplement_Kings_and_Chronicles_The_Mughal_Courts.md`](../../Notes/09_Supplement_Kings_and_Chronicles_The_Mughal_Courts.md), **2,135 lines**, following the precedent set for Class 7, Class 9, Class 10, Class 11 and Class 12 Part III.
