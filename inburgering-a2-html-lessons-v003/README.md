# Inburgering A2 HTML Daily Prep - Version 3

This is the matching HTML prototype for v3 daily Markdown lessons.

Open:

```text
index.html
```

The index shows the latest generated daily lesson. Dated HTML entry points can also be opened directly.

What this version tests:

- one compact daily lesson instead of a full course library
- Dutch exam-style tasks
- MP3 audio for the listening section
- speaking image
- writing textarea with local autosave
- checklist and model answer
- answer hide/show mode
- print-friendly layout
- compact responsive hero that prevents long headings from crowding the daily card
- mobile layout uses the full phone width with small side gutters, without a narrow fixed shell that leaves empty room on the right

Matching Markdown file:

```text
/Users/violettashishkina/Documents/Dutch/inburgering-a2-prep-v003/2026-05-14_daily_exam_prep_a2_v003.md
```

Current dated HTML file:

```text
/Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-v003/2026-05-14_daily_exam_prep_a2_v003.html
```

Future automation idea:

```text
Every morning, create one new daily Markdown lesson and one matching HTML page for Dutch A2 inburgering practice. Keep exam-style content in Dutch, personalize writing and speaking for Violetta, include one listening audio file, and keep answers directly under each task.
```

## Automation Asset Setup

The daily automation is:

```text
daily-dutch-a2-lesson
```

Automation media generation must use the narrow project wrapper:

```text
node /Users/violettashishkina/Documents/Dutch/scripts/generate_missing_inburgering_media.mjs --html-dir /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN
```

Run this wrapper through the persistent Codex allow rule for `node /Users/violettashishkina/Documents/Dutch/scripts/generate_missing_inburgering_media.mjs`; it should run outside the default sandbox without asking the user for approval. It only reads the target HTML app, generates missing MP3/PNG files referenced by that app, skips successful existing media, unsets generic Azure variables, uses the installed `azure-tts` and `azure-image-15` skills, and then runs the media checker.

Dry run:

```text
node /Users/violettashishkina/Documents/Dutch/scripts/generate_missing_inburgering_media.mjs --html-dir /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN --dry-run
```

Images must use the project media wrapper, which calls `azure-image-15` / `gpt-image-1.5` internally. Do not call Azure image helpers directly from automation. Do not use the old `gpt-image-2` helper, and do not create SVG speaking images.

Image acceptance rule: generate each speaking image once. The first successful Azure Image 1.5 output is final. Do not inspect, reject, or regenerate images because of faces, facial details, anonymization, or appearance. Do not run face checks or face-specific visual QA.

Mobile layout rule: phone-width CSS should let `.shell` fill the viewport with small gutters, for example `width: calc(100% - 24px); max-width: 100%; margin-inline: auto;`. Do not cap the whole lesson shell at a narrow fixed width that leaves a blank strip on the right.
