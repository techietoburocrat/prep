# Removed Chapters — Class X, pre-rationalisation edition

The current printed book has **5 chapters**. The **2018-19 edition had 8**. These are the three NCERT dropped:

| Old ch. | Old code | Chapter | UPSC value |
|---|---|---|---|
| **II** | `jess302` | **The Nationalist Movement in Indo-China** | ⭐⭐⭐⭐ **Decolonisation is named in the GS1 syllabus.** The only place in the whole NCERT series you meet Vietnam, French colonialism in Asia, and an anti-colonial war that defeated two superpowers |
| **VI** | `jess306` | **Work, Life and Leisure: Cities in the Contemporary World** | ⭐⭐⭐ Urbanisation, London and Bombay, slums, migration — feeds GS1 society *and* GS1 urbanisation |
| **VIII** | `jess308` | **Novels, Society and History** | ⭐⭐ Caste, gender and nationalism through fiction; occasional essay use |

## ⚠️ The renumbering trap — this cost real time

The chapters were **renumbered** when Indo-China was dropped, so the same code means different things depending on the year:

| Code | 2018-19 edition | 2019 onwards |
|---|---|---|
| `jess302` | **The Nationalist Movement in Indo-China** | Nationalism in India |
| `jess303` | Nationalism in India | The Making of a Global World |

**Downloading `jess302.pdf` from a mid-2019 Wayback snapshot gives you "Nationalism in India", not Indo-China** — which is exactly what happened on the first attempt here. Always verify the first page with `pdftotext -f 1 -l 1` before trusting a file.

## Where these came from

⚠️ **Not available from any live source.** `ncert.nic.in` returns **404** for `jess306`, `jess307` and `jess308` (confirmed with retries — a bare `000` from that host means a connection reset, *not* absence, so always retry before concluding a file is gone). There is **no archive.org scan of the old Class X edition** either; unlike Class IX, the `dli.scoerat` collection has no Class X volume, and title searches return nothing.

✅ **The working source is the Wayback Machine's copy of the WHOLE-BOOK ZIP**, which is the cleanest route because it is internally consistent — all eight chapters as they stood together:

```
https://web.archive.org/web/20190312174053if_/http://ncert.nic.in/textbook/pdf/jess3dd.zip
```

**Method, worth reusing for Classes 11–12:**

1. Find candidate snapshots via the CDX API — note it needs retries, it 503s often:
   ```
   http://web.archive.org/cdx/search/cdx?url=ncert.nic.in/textbook/pdf/jess3dd.zip&fl=timestamp,statuscode,length&collapse=digest
   ```
2. Prefer the **`dd.zip` whole-book archive over individual chapter PDFs** — one download, and no risk of mixing editions.
3. Insert `if_` after the timestamp in the Wayback URL to get the **original file** rather than a rewritten page.
4. Unzip and **verify every chapter with `pdftotext -f 1 -l 1`**.

To enumerate what was ever archived for a book code:
```
http://web.archive.org/cdx/search/cdx?url=ncert.nic.in%2Ftextbook%2Fpdf%2F*&fl=original&collapse=original&filter=original:.*jess3.*
```

`00_Front_Matter_Contents_OLD_edition.pdf` (`jess3ps`) holds the old contents page, kept as proof of the 8-chapter structure.

## Quality note

These are **original publisher PDFs**, not scans — the text layer is clean and there is none of the OCR date-corruption that affects the Class IX supplement source. Quote from them directly.
