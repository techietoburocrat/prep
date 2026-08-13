# Setting up Mission on another PC

This repo is the single source of truth for the UPSC prep. It syncs between machines
through GitHub — clone it, and you have every note, PDF, quiz and PYQ set.

## One-time setup

**1. Install Git for Windows** — <https://git-scm.com/download/win>
Accept the defaults; it bundles Git Credential Manager, which handles the GitHub login.

**2. Install Claude Code** — <https://claude.com/claude-code>

**3. Clone this repo.** It is roughly 400 MB, so use decent wifi:

```powershell
git clone https://github.com/techietoburocrat/prep.git "$env:USERPROFILE\Desktop\Mission"
```

The folder can live anywhere and be named anything — nothing in this repo depends on
its absolute path.

**4. Restore Claude's memory** of the prep (private repo, separate from this one —
see its README for why):

```powershell
git clone <private-memory-repo-url> "$env:USERPROFILE\.claude\mission-memory"
~\.claude\mission-memory\sync-memory.ps1 pull -ProjectPath "$env:USERPROFILE\Desktop\Mission"
```

Then restart Claude Code so it re-reads the memory files.

## Daily rhythm

Do this on **whichever PC you sit down at**. It is the whole discipline:

```powershell
# Before you start
git pull
~\.claude\mission-memory\sync-memory.ps1 pull

# After you finish
git add -A
git commit -m "what you did"
git push
~\.claude\mission-memory\sync-memory.ps1 push
```

Skipping `git pull` at the start is what causes conflicts. The notes are markdown and
merge cleanly, but the textbook PDFs are binary — if the same PDF changes on two PCs,
git cannot merge it and you have to pick one by hand.

## What does not sync

- **Chat transcripts** (`.claude-archive/transcripts/`, ~82 MB and growing every
  session) are gitignored — too large for git, and they grow without bound. Each PC
  keeps its own transcript history. Claude's *memory* files do sync, and those are
  what carry the plan and preferences forward.

## Notes

- This repo is **public**. Everything committed here is world-readable, so keep
  personal details, credentials and account information out of it.
- The `OneDrive\` in the original folder path on the first PC is a leftover name only.
  OneDrive is not running on that machine and nothing there is cloud-synced. GitHub is
  the only off-machine copy.
