# Removed Chapters — the pre-rationalisation Class IX edition

`India_and_the_Contemporary_World_I_OLD_8chapter_edition.pdf` (10.4 MB) is the **full 8-chapter edition** of NCERT Class IX *India and the Contemporary World – I*, before rationalisation cut it to five.

## Why it is here

The current printed book has **5 chapters**. NCERT moved **three** out of the printed book into "extended learning" behind a **QR code**:

| # | Chapter | Section |
|---|---|---|
| **VI** | **Peasants and Farmers** | II — Livelihoods, Economies and Societies |
| **VII** | History and Sport: The Story of Cricket | III — Everyday Life, Culture and Politics |
| **VIII** | **Clothing: A Social History** | III — Everyday Life, Culture and Politics |

Two of these — **Peasants and Farmers** and **Clothing: A Social History** — carry real UPSC weight and have been written up in
[`../../Notes/06_Supplement_Peasants_Farmers_and_Clothing.md`](../../Notes/06_Supplement_Peasants_Farmers_and_Clothing.md), following the same decision we made for **Class 7** (where the deleted *Rulers and Buildings* and *Towns, Traders and Craftspersons* were restored).

## Where it came from — and why not from ncert.nic.in

⚠️ **`ncert.nic.in` has NO copy of the removed chapters.** `iess306`, `iess307` and `iess308` do not resolve. The Class IX History code `iess3` is **withdrawn from the official site entirely** — even the five surviving chapters 404 there (see `01_NCERT/README_TEXTBOOKS.md`, trap #1).

The **archive.org item `ncert-iess3`** — the source of the five current chapters in `../India_and_the_Contemporary_World_I/` — **also holds only `iess301`–`iess305`**. It is a scan of the *rationalised* edition, so it cannot supply the removed chapters either.

✅ **The working source is a different archive.org item entirely — a scan of the OLD edition:**

```
https://archive.org/details/dli.scoerat.5874socialscienceindiaandthecontemporaryworld1
```

Downloaded file (the OCR'd text layer version, far smaller than the 68 MB image container):

```
https://archive.org/download/dli.scoerat.5874socialscienceindiaandthecontemporaryworld1/dli.scoerat.5874socialscienceindiaandthecontemporaryworld1_text.pdf
```

**Finding it:** it does **not** come up under the code `iess3`. Search archive.org's advanced-search JSON API for the **title** instead:

```
https://archive.org/advancedsearch.php?q=%22india+and+the+contemporary+world%22&fl[]=identifier&fl[]=title&rows=40&output=json
```

**Verifying it fast, before downloading 10–68 MB:** every OCR'd archive.org item exposes a `_djvu.txt` derivative — for this item ~380 KB of plain text for the whole book. Pull that first and grep it for the chapter titles. That is how these two chapters were confirmed present, and the `_djvu.txt` is also what the notes were written from.

```bash
curl -s -L -A "Mozilla/5.0" -o book.txt \
  "https://archive.org/download/<identifier>/<identifier>_djvu.txt"
grep -n -i "Peasants and Farmers\|Clothing" book.txt
```

## ⚠️ Caveat on this source

This is an **OCR'd scan**, not a clean publisher PDF. The text layer carries occasional errors, and a few were caught while writing the notes:

- *"the first decade of the **eighteenth** century"* for settlers on the Appalachian plateau — context (Jefferson, 1800) makes it the **nineteenth**.
- *"by the early **eighteenth** century angry peasants began agitating"* over opium prices — context (the 1820s decline) makes it the **nineteenth**. The notes avoid pinning the decade rather than repeat the error.
- The Opium War is rendered *"1837-42"*; the war is **1839–42**, and the book's own Source E dates Lin Ze-xu's confiscation to **1839**.

**Treat any lone date from this scan with suspicion and cross-check it before quoting.** The five current chapters in the sibling folder are clean publisher PDFs and need no such care.
