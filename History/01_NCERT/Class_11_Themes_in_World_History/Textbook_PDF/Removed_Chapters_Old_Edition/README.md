# Class XI — the FOUR themes NCERT deleted (old edition, recovered)

**Recovered 2026-08-15.** The rationalised *Themes in World History* prints **7 themes**; the original edition had **11**. These are the four that were cut.

## What is here

| File | Old theme # | UPSC value | Restored in the supplement? |
|---|---|---|---|
| `OLD_Theme01_From_the_Beginning_of_Time.pdf` | 1 | ⭐ Human evolution, hominids, the origins-of-language debate | ❌ **Deliberately skipped** — prehistory/anthropology, better served by Geography and S&T. PDF kept for completeness |
| `OLD_Theme04_The_Central_Islamic_Lands.pdf` | 4 | ⭐⭐⭐⭐ **The rise of Islam, the caliphate, the Crusades, Islamic learning and the transmission of Greek science** | ✅ **Yes — the biggest hole in the series** |
| `OLD_Theme08_Confrontation_of_Cultures.pdf` | 8 | ⭐⭐⭐ The Spanish in the Americas; Columbus, Cortés, Pizarro; the destruction of the Aztecs and Incas | ✅ **Yes — Theme 6 currently begins mid-argument without it** |
| `OLD_Theme09_SectionIV_AND_The_Industrial_Revolution.pdf` | 9 | ⭐⭐⭐⭐ ***"INDUSTRIAL REVOLUTION" IS A GS1 SYLLABUS WORD*** | ✅ **Yes — highest priority of the four** |

> ⚠️ **The Theme 9 file also carries the SECTION IV INTRODUCTION** (*"Towards Modernisation"*), which contains the book's best passage on **civic vs ethnic nationalism** and its **three variants of imperialism**. **That introduction is NOT lost** — the current edition moved it into the Theme 6 file, and it is already covered in [`../../Notes/06_Theme6_Displacing_Indigenous_Peoples.md`](../../Notes/06_Theme6_Displacing_Indigenous_Peoples.md). No need to write it twice.

## How they were recovered — the route that worked

⭐ **The Wayback Machine's copy of the whole-book zip**, exactly as for Class X:

```
https://web.archive.org/web/20200615215721if_/http://ncert.nic.in/textbook/pdf/kehs1dd.zip
```

- **Book code: `kehs1`.** The **June 2020** snapshot predates rationalisation, so the zip contains **all 11 original chapters** (`kehs101`–`kehs111`), dated **30 April 2020**, ~20 MB.
- ⭐ **Prefer `<code>dd.zip` over individual chapter PDFs** — one download, internally consistent, no risk of mixing editions.
- Insert **`if_`** after the Wayback timestamp to get the original file rather than a rewritten page.
- Enumerate what was ever archived with the CDX API:
  `web.archive.org/cdx/search/cdx?url=ncert.nic.in%2Ftextbook%2Fpdf%2F*&fl=original,timestamp&collapse=original&filter=original:.*kehs1.*`
  ⚠️ **The CDX API 503s constantly — always `--retry 3 --retry-all-errors`.**
- ⭐ **The CDX listing itself is the tell:** it returns **`kehs101` … `kehs111`**, i.e. **eleven** chapter files. The current book has seven. That mismatch is how you know the old edition survives.

## ⚠️ Every file was verified before being trusted

**THE RENUMBERING TRAP:** when NCERT drops a chapter it **renumbers the rest**, so the same code means different things by year. Each PDF here was checked with `pdftotext -f 1 -l 1 -layout` and renamed by its **actual first-page content**, not by its code. The old numbering runs:

| Old # | Theme | Fate |
|---|---|---|
| 1 | From the Beginning of Time | ❌ **deleted** |
| 2 | Writing and City Life | → now **Theme 1** |
| 3 | An Empire Across Three Continents | → now **Theme 2** |
| 4 | **The Central Islamic Lands** | ❌ **deleted** |
| 5 | Nomadic Empires | → now **Theme 3** |
| 6 | The Three Orders | → now **Theme 4** |
| 7 | Changing Cultural Traditions | → now **Theme 5** |
| 8 | **Confrontation of Cultures** | ❌ **deleted** |
| 9 | **The Industrial Revolution** | ❌ **deleted** |
| 10 | Displacing Indigenous Peoples | → now **Theme 6** |
| 11 | Paths to Modernisation | → now **Theme 7** |

⭐ **This table is also the key to the book's SIX dangling cross-references** — the printed book still points at chapters by their old numbers. See [`../../Notes/00_Index.md`](../../Notes/00_Index.md) for the full list.

## Where the notes are

[`../../Notes/08_Supplement_Industrial_Revolution_Islamic_Lands_and_Confrontation.md`](../../Notes/08_Supplement_Industrial_Revolution_Islamic_Lands_and_Confrontation.md)
