# Official UPSC source PDFs

Ground truth for [`../2024.md`](../2024.md), [`../2025.md`](../2025.md) and [`../2026.md`](../2026.md).
All downloaded from **upsc.gov.in**. Do not delete — UPSC removes old files from its site without notice.

| File | Source URL |
|---|---|
| `CSP_2024_GS1.pdf` | `/sites/default/files/QP-CSP-24-GENERAL-STUDIES-PAPER-I-180624.pdf` |
| `CSP_2024_GS1_OFFICIAL_ANSWER_KEY.pdf` | `/sites/default/files/AnsKey-CivilServicesPExam-2024-GeneralStudies-I-210525.pdf` |
| `CSP_2025_GS1.pdf` | `/sites/default/files/QP-CSP-25-GENERAL-STUDIES-PAPER-I-26052025.pdf` |
| `CSP_2025_GS1_OFFICIAL_ANSWER_KEY.pdf` | `/sites/default/files/AnsKeyCivilServicesP-Exam-2025-GeneralStudies-I-130526.pdf` |
| `CSP_2026_GS1.pdf` | `/sites/default/files/QP_CSP_2026_GENERAL_STUDIES_PAPER-I_25052026.pdf` |

All are **Series A**. Answer keys are published per series, so a key only lines up with the paper of the same series.

## Three things that will trip you up if you come back to this

1. **These PDFs have no text layer.** They are page-sized JPEG scans — `pdftotext` returns nothing. To read them, pull the embedded image out of each page (`pypdf`: `page.images`) and read the image. Each page holds exactly one full-page JPEG. **Odd pages are English, even pages are Hindi.**
2. **Use the `www.` host.** `https://upsc.gov.in/sites/default/files/<name>.pdf` returns an HTML error page **with HTTP 200** for a file that exists. `https://www.upsc.gov.in/...` returns the real PDF. A download that "succeeded" at ~92 KB is that HTML page, not a PDF — check the magic bytes are `%PDF`.
3. **Answer keys are not listed on the site.** The [Answer Keys](https://www.upsc.gov.in/examinations/answer-key) page only shows the four most recent keys and ignores `?page=` pagination — but **older key files are still served if you know the exact filename**. Note how the naming changed between years: `AnsKey-CivilServicesPExam-2024-...` vs `AnsKeyCivilServicesP-Exam-2025-...`. Guessing fails; find the filename in a news/coaching article that linked the official PDF, then fetch it from `www.upsc.gov.in`.

## Still missing

- **CSP 2026 official answer key** — expected around **May 2027**, once the CSE 2026 cycle concludes. When it appears, download it here and re-verify [`../2026.md`](../2026.md), whose answers are currently unofficial.
- **2000–2015 papers** — not on upsc.gov.in at all. The official archive starts at **2016**. See [`../00_INDEX.md`](../00_INDEX.md).
