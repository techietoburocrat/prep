# 🗂️ ARTIFACT REGISTRY

**Hub page (bookmark this one):** https://claude.ai/code/artifact/0c6fdf09-112e-4aa3-ae0d-950da42b29db
Built from [00_ARTIFACT_HUB.html](00_ARTIFACT_HUB.html). Every other artifact is reachable from it.

This file is the source of truth for *which local file built which published page*. The hub is the browsable view; this is the one that survives.

---

## The rule

**Never publish from the session temp folder.** Write the `.html` into its subject folder, commit it, *then* publish. An artifact published from temp can be read forever but can never be edited or retitled again — the source is gone. Eight of the artifacts below are already in that state.

Publishing convention:

| | |
|---|---|
| Source location | `<Subject>/<NN_Folder>/dist/<name>.html`, or `<Subject>/<NN_Folder>/<name>.html` for one-offs |
| Updating | Republish the **same file path**, or pass the existing URL as `url` — both keep the URL. A new path mints a new URL. |
| Account | Personal only — `[redacted]`. Never the Delight work account. |

---

## Current Affairs

| Artifact | URL | Source |
|---|---|---|
| 6 August 2026 — UPSC Daily Brief | [f15ae7c6](https://claude.ai/code/artifact/f15ae7c6-e53c-4886-9c5b-17f55e86ce5b) | ⚠️ none |
| 5 August 2026 — UPSC Daily Brief | [5dab8e5d](https://claude.ai/code/artifact/5dab8e5d-c48c-4818-a0b7-10cf741bab41) | ⚠️ none |
| 4 August 2026 — UPSC Daily Brief | [5bd640bb](https://claude.ai/code/artifact/5bd640bb-9b21-4c5f-ab5a-cd8ccdd7d41e) | ⚠️ none |
| 3 August 2026 — UPSC Daily Brief | [b5d43251](https://claude.ai/code/artifact/b5d43251-63ae-46ce-b22f-aaf1e8b0a48e) | ⚠️ none |
| 2 August 2026 — UPSC Daily Brief | [11e7b64e](https://claude.ai/code/artifact/11e7b64e-a8a1-4d4f-bdaf-b6a4b1397d2c) | ⚠️ none |
| 1 August 2026 — UPSC Daily Brief | [9bad1e93](https://claude.ai/code/artifact/9bad1e93-5f5c-4517-956f-a293d5029523) | ⚠️ none |

The underlying notes do survive in `Current Affairs/01_Daily/2026-08_August/*.md` — only the rendered HTML is gone. Future briefs: write the HTML to `Current Affairs/01_Daily/dist/YYYY-MM-DD.html` before publishing.

## Polity

| Artifact | URL | Source |
|---|---|---|
| UPSC Mains Polity PYQs · 2000–2026 | [65866541](https://claude.ai/code/artifact/65866541-e4fb-47bd-bbd5-cbdf6d412d41) | `Polity/04_PYQ_Mains/upsc-polity-pyq.html` |
| Polity · Quiz Class VI — Social and Political Life I | [417260c7](https://claude.ai/code/artifact/417260c7-e66a-4a9f-8a4b-1e877415113f) | `Polity/05_Quiz_MCQ/dist/class06.html` |
| Class VII Polity Quiz — NCERT Social and Political Life II | [cad14910](https://claude.ai/code/artifact/cad14910-a26a-4924-a35e-dcb51665d395) | `Polity/05_Quiz_MCQ/dist/class07.html` |
| Class VIII Polity Quiz — NCERT Social and Political Life III | [420d7bdf](https://claude.ai/code/artifact/420d7bdf-930d-488b-bef4-0713ddd99b7b) | `Polity/05_Quiz_MCQ/dist/class08.html` |
| Class IX Polity Quiz — NCERT Democratic Politics I | [51ab6ef0](https://claude.ai/code/artifact/51ab6ef0-ca1e-46df-8d9e-56e885d2a923) | `Polity/05_Quiz_MCQ/dist/class09.html` |
| Class X Polity Quiz — NCERT Democratic Politics II | [599fe569](https://claude.ai/code/artifact/599fe569-4614-4506-8377-5915f7fb038f) | `Polity/05_Quiz_MCQ/dist/class10.html` |
| Class XI Polity Quiz — Political Theory | [d05d284a](https://claude.ai/code/artifact/d05d284a-9b17-4644-85a6-e91eeae6b81d) | `Polity/05_Quiz_MCQ/dist/class11pt.html` |
| Class XI Polity Quiz — Indian Constitution at Work | [a0362033](https://claude.ai/code/artifact/a0362033-f785-478f-82dc-6e3706ed2e8c) | `Polity/05_Quiz_MCQ/dist/class11icw.html` |
| UPSC Prelims Practice — Class 6 Polity | [7892259e](https://claude.ai/code/artifact/7892259e-d2f8-4d0d-9cb1-de71cad03ece) | ⚠️ none — superseded by the Class VI quiz |

Quiz `dist/` files are **generated** — edit `Polity/05_Quiz_MCQ/data/<class>.js` and rebuild with `build.mjs`, then verify with `audit.mjs` + `simulate.mjs` before publishing.

## History

| Artifact | URL | Source |
|---|---|---|
| Class VI History Quiz — Our Pasts I | [29fc4e7a](https://claude.ai/code/artifact/29fc4e7a-d507-4d47-bdb2-cdafa7d160f8) | `History/05_Quiz_MCQ/dist/class06.html` |

## Planning & Targets

| Artifact | URL | Source |
|---|---|---|
| UPSC Self-Study Plan — you, CSE 2027 | [09843f75](https://claude.ai/code/artifact/09843f75-6060-4fbb-9bd3-c36b20207b6f) | ⚠️ none |

## Not yet populated

Geography + Environment · Ethics · Economy · Science & Technology · CSAT — folders exist in the hub, no artifacts yet.

---

## Naming

Titles are currently mixed. The intended scheme going forward is a subject prefix so the gallery self-sorts:

```
Polity · Quiz Class VI — Social and Political Life I
```

Only the Class VI Polity quiz has been converted so far. The rest keep their original titles — converting them means re-publishing each one, which is safe but not worth doing in bulk.

---

*When you publish anything new: add its row here, add it to `00_ARTIFACT_HUB.html`, and republish the hub from that same file path so the URL stays put. Companion to [00_MASTER_SCHEDULE.md](00_MASTER_SCHEDULE.md).*
