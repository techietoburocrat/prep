# Class XII *Themes in Indian History, Part III* — the TWO themes NCERT deleted

**Recovered 2026-08-16. Both files are original publisher PDFs with a clean text layer — not OCR scans — so every date and quotation in them is reliable.**

---

## What is here

| File | Old theme # | Title | Pages | Why it matters |
|---|:--:|---|:--:|---|
| `12_OldTheme12_Colonial_Cities_...pdf` | **12** | *Colonial Cities: Urbanisation, Planning and Architecture* | from p. **316** | ⭐⭐⭐⭐ **Art & Culture material** — Indo-Saracenic / neo-classical / neo-Gothic, the Presidency towns, hill stations, White Town vs Black Town, census and urban categories. Also the **urban counterpart to Theme 9's rural history** |
| `14_OldTheme14_Understanding_Partition_...pdf` | **14** | *Understanding Partition: Politics, Memories, Experiences* | from p. **376** | ⭐⭐⭐⭐⭐ **The most costly deletion in the book.** Theme 11 ends *at* Partition and Theme 12 opens *after* it — the rationalised book has a hole exactly where Partition should be. It is also the **only chapter in the whole NCERT series that teaches ORAL HISTORY as evidence** |

---

## The old → new numbering table

The rationalised edition kept **four** themes, numbered 9–12. The original had **six**, numbered 10–15.

| Old # | Title | New # |
|:--:|---|:--:|
| 10 | Colonialism and the Countryside | **9** |
| 11 | Rebels and the Raj | **10** |
| **12** | **Colonial Cities** | ❌ **DELETED** |
| 13 | Mahatma Gandhi and the Nationalist Movement | **11** |
| **14** | **Understanding Partition** | ❌ **DELETED** |
| 15 | Framing the Constitution | **12** |

⚠️ **The shift is NOT constant** — 1, 1, —, 2, —, 3. A cross-reference written for the old book points at the wrong chapter in the new one, and by a *different* amount depending on where it sits. **Never trust a "see Chapter N" in this book without checking.**

### Three pieces of evidence for the renumbering, visible in the printed book

1. **A figure number that was never updated.** In the current Theme 12, the same photo caption appears **twice** — once as **`Fig. 15.2`** and once as `Fig. 12.2` (*"Images of desolation and destruction continued to haunt members of the Constituent Assembly"*). The `15.2` is the leftover, and it proves the present Theme 12 was the old Theme 15.
2. **Orphaned figures in the credits page.** The credits list, under Khushwant Singh's *Train to Pakistan*: `Figs. 12.1; 12.4; 12.12; 12.13; 12.15`. **The chapter only runs to Fig. 12.9.** Three credited figures do not exist in the book — and they come from a *Partition* novel. That is the deleted Partition chapter leaving a footprint.
3. **The CDX listing itself.** `web.archive.org` shows `lehs301` … `lehs30**6**` where the current book has four files.

---

## ⭐ How these were recovered — the route that worked

**Do not rediscover this. It cost real time, and the obvious routes all fail.**

### ❌ What did NOT work

- **`ncert.nic.in` for the deleted chapters** — `lehs305` now returns **404** (confirmed: a 2025-09-04 snapshot captures the 404).
- ⚠️ **The Wayback Machine's whole-book zip.** `lehs3dd.zip` is listed in CDX with many snapshots (2019, 2021, 2022, 2023, 2025, 2026) — **and every one of them returns a 548-byte nginx 404 page when fetched**, with `if_`, with `id_`, with `http://` and with `https://`. This is different from Classes 10 and 11, where the `dd.zip` route was the thing that worked. **A CDX entry is not a promise that the bytes are retrievable.**
- **Wayback's individual `lehs305.pdf` snapshot** (`20220523111748`, listed as 200 / 974 KB) — also returns the 548-byte 404 page under every URL form tried.

### ✅ What DID work

⭐⭐⭐ **The Internet Archive item `ncert-lehs3` is a scan of the OLD SIX-CHAPTER edition, and it holds all six chapters.**

```bash
# 1. find it by TITLE, not by book code
curl "https://archive.org/advancedsearch.php?q=title%3A%28themes+in+indian+history%29&fl%5B%5D=identifier&fl%5B%5D=title&rows=40&output=json"
#    -> ncert-lehs1, ncert-lehs2, ncert-lehs3

# 2. check the file list BEFORE downloading anything big
curl "https://archive.org/metadata/ncert-lehs3" | tr ',' '\n' | grep '"name":"lehs30[0-9].pdf"'
#    -> lehs301 ... lehs306  == SIX chapters == the OLD edition

# 3. download the ones you need
curl -L -o lehs305.pdf "https://archive.org/download/ncert-lehs3/lehs305.pdf"
```

⚠️ **This is the opposite of the Class 9 experience**, where `ncert-iess3` turned out to be a scan of the *rationalised* book and held only 5 of 8 chapters. **So always check the file list first** — the item may be either edition, and `_djvu.txt` derivatives are cheap to pull if you need to confirm content before committing to a big download.

*(For the record: `lehs303.pdf` was also obtained independently from the Wayback snapshot `20200110112034if_`, and it is **byte-identical in size (5,276,494)** to the archive.org copy — a useful cross-check that both routes serve the same file.)*

### Gotchas worth keeping

- **archive.org rate-limits hard.** A burst of requests returns `429 Too Many Requests`; the CDX API separately returns bare nginx `404`s under load. Back off and retry rather than concluding a file is gone.
- ⚠️ **The renumbering trap applies to the snapshot DATE, not just the file name.** A post-2022 snapshot of `lehs303.pdf` is **Theme 11 (Gandhi)** in the rationalised book, not Colonial Cities. **Always use a pre-2022 snapshot for the old edition, and always verify with `pdftotext -f 1 -l 1` before trusting any file.** Both files here were verified in place after copying.

---

## Reading order

- **Read *Understanding Partition* BETWEEN Theme 11 and Theme 12** — that is precisely the gap it fills.
- **Read *Colonial Cities* alongside Theme 9**, as its urban counterpart.
