# NCERT History Textbooks — what's downloaded, and the traps

**All NCERT History PDFs, Classes 6–12. 92 files, ~492 MB. Downloaded 2026-08-05 / 08-15.**

Every file was opened and its **first page read** before being renamed, so **filenames reflect actual content**. The old NCERT misnaming trap does not apply to anything in this folder.

---

## 📊 What's here

| Class | Book | Folder | Chapters | Source |
|---|---|---|:---:|---|
| **VI** | *Our Pasts I* ⭐ | `Class_06_.../Textbook_PDF/Our_Pasts_I_original_edition` | **11** | ⚠️ **archive.org** — withdrawn by NCERT |
| **VI** | *Exploring Society: India and Beyond* | `Class_06_.../Exploring_Society_..._current` | 14 | ncert.nic.in (`fees1`) |
| **VII** | *Our Pasts II* | `Class_07_.../Textbook_PDF/Our_Pasts_II` | **8** | ncert.nic.in (`gess1`) |
| **VIII** | *Our Pasts III* | `Class_08_..._Part1/Textbook_PDF/Our_Pasts_III` | **8** | ncert.nic.in (`hess2`) |
| **IX** | *India and the Contemporary World I* | `Class_09_.../Textbook_PDF/...` | **5** | ⚠️ **archive.org** — withdrawn by NCERT |
| **X** | *India and the Contemporary World II* | `Class_10_.../Textbook_PDF/...` | **5** | ncert.nic.in (`jess3`) |
| **XI** | *Themes in World History* | `Class_11_.../Textbook_PDF/...` | **7 themes** | ncert.nic.in (`kehs1`) |
| **XII** | *Themes in Indian History I* | `Class_12_..._I/Textbook_PDF/...` | **4 themes** | ncert.nic.in (`lehs1`) |
| **XII** | *Themes in Indian History II* | `Class_12_..._II/Textbook_PDF/...` | **4 themes** | ncert.nic.in (`lehs2`) |
| **XII** | *Themes in Indian History III* | `Class_12_..._III/Textbook_PDF/...` | **4 themes** | ncert.nic.in (`lehs3`) |

---

## ⚠️ Four traps worth knowing

### 1. Two books are **withdrawn from ncert.nic.in**

**Class VI *Our Pasts I*** (`fess1`) and **Class IX *India and the Contemporary World I*** (`iess3`) return **404 for every chapter**. Both were retrieved from the **Internet Archive** (`archive.org/download/ncert-fess1` and `ncert-iess3`). If you ever need to re-download them, do not waste time on the official site.

### 2. The Class VI and VIII books have been **restructured**

- **Class VI:** *Our Pasts I* was replaced by the combined *Exploring Society: India and Beyond*, in which **only 4 of 14 chapters are History**. Study the old book; keep the new one for reference. (Its chapters **10–12, "Grassroots Democracy", are the current text behind the Polity Class 6 notes.**)
- **Class VIII:** *Our Pasts III* used to be two parts. The rationalised edition is **one book of 8 chapters** under code `hess2`. The `Class_08_Our_Pasts_III_Part2` folder is therefore **obsolete** — everything is in `Part1`.

### 3. Class IX and X History are **NOT `iess1`/`jess1`**

Those codes are **Geography** (*Contemporary India*). The History books are:
- **Class IX History = `iess3`**
- **Class X History = `jess3`**

Getting this wrong downloads the wrong subject entirely.

### 4. Class XI files don't map 1:1 to themes

The rationalised *Themes in World History* has **7 themes in 7 files**, but:
- `02_...` contains **two themes** (An Empire Across Three Continents **and** Nomadic Empires)
- `03_...` is a **section divider only** (9 pages, no theme)
- `06_...` is a **section divider plus Theme 6**

Filenames record this explicitly.

---

## 🔧 How to download more (technique that works)

```bash
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ... Chrome/126.0"
curl -sS -L --max-time 200 --retry 2 -A "$UA" \
     -o out.pdf "https://www.ncert.nic.in/textbook/pdf/CODE##.pdf" </dev/null
```

- ⚠️ Use **`www.ncert.nic.in`** — the bare `ncert.nic.in` **resets the connection** for curl
- ⚠️ A **browser User-Agent is required**
- ⚠️ **Zero-pad chapter numbers** (`01`, not `1`). `seq -w 1 8` does **not** pad — use `printf '%02d'`
- ⚠️ Inside a `while read` loop, add **`</dev/null`** to curl or it eats the input list
- `ps` = front matter; `dd.zip` = whole book
- Codes start with the class letter: **f**=VI, **g**=VII, **h**=VIII, **i**=IX, **j**=X, **k**=XI, **l**=XII
- Discover codes by scraping `textbook.php` for `textbook.php?CODE=0-N`
- **Always verify** with `pdftotext -f 1 -l 1 -layout file.pdf -` before trusting a filename

---

## 📚 Chapter listings

**Class VIII — *Our Pasts III*** (Modern India — ⭐ highest exam value of the school books)
1. Introduction: How, When and Where · 2. From Trade to Territory · 3. Ruling the Countryside · 4. Tribals, Dikus and the Vision of a Golden Age · 5. When People Revolt: 1857 and After · 6. Civilising the "Native", Educating the Nation · 7. Women, Caste and Reform · 8. The Making of the National Movement 1870s–1947

**Class IX — *India and the Contemporary World I*** (world history)
1. The French Revolution · 2. Socialism in Europe and the Russian Revolution · 3. Nazism and the Rise of Hitler · 4. Forest Society and Colonialism · 5. Pastoralists in the Modern World

**Class X — *India and the Contemporary World II***
1. The Rise of Nationalism in Europe · 2. Nationalism in India · 3. The Making of a Global World · 4. The Age of Industrialisation · 5. Print Culture and the Modern World

**Class XI — *Themes in World History***
1. Writing and City Life · 2. An Empire Across Three Continents · 3. Nomadic Empires · 4. The Three Orders · 5. Changing Cultural Traditions · 6. Displacing Indigenous Peoples · 7. Paths to Modernisation

**Class XII — *Themes in Indian History*** (⭐ the most important books for Mains)
- **Part I:** 1. Bricks, Beads and Bones (Harappan) · 2. Kings, Farmers and Towns · 3. Kinship, Caste and Class · 4. Thinkers, Beliefs and Buildings
- **Part II:** 5. Through the Eyes of Travellers · 6. Bhakti–Sufi Traditions · 7. An Imperial Capital: Vijayanagara · 8. Peasants, Zamindars and the State
- **Part III:** 9. Colonialism and the Countryside · 10. Rebels and the Raj (1857) · 11. Mahatma Gandhi and the Nationalist Movement · 12. Framing the Constitution

---

## 📈 Suggested study order for UPSC (not class order)

Ancient and medieval are done first for foundation, but **Modern India carries 3–4× the marks**:

1. ✅ **Class VI** — Ancient India *(notes + quiz complete)*
2. 🔄 **Class VII** — Medieval India *(notes in progress)*
3. ⭐ **Class VIII** — **Modern India / freedom struggle — the single highest-value school book**
4. **Class XII Part III** — Colonialism, 1857, Gandhi, the Constitution
5. **Class X** — Nationalism in India, industrialisation, print culture
6. **Class XII Parts I & II** — deepens Ancient and Medieval for Mains
7. **Class IX / XI** — world history; Mains GS1 only, lower priority
