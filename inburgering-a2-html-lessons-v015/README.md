# Inburgering A2 HTML Lessons - Version 15

This is a full static HTML exam prep package by Violetta Bonenkamp.

Open:

```text
index.html
```

The interface follows the latest approved compact responsive design pattern:

- clear 10-part lesson route
- exam and grammar sections
- exam-style task copy in Dutch
- 18 reading tasks
- 18 writing tasks with autosaving text boxes
- 28 speaking tasks with local speaking images
- 17 listening tasks, including 16 MP3 audio tasks
- 28 KNM questions
- 90 grammar drills
- answer hide/show mode
- answers hidden by default, with both global answer control and individual per-exercise answer toggles; the mobile global button uses a green X for hidden answers and a green checkmark for visible answers
- print-friendly layout
- compact responsive hero that avoids overlapping long Dutch text
- mobile layout uses the full phone width with small side gutters, without a narrow fixed shell that leaves empty room on the right

Audio files are in:

```text
audio/
```

Speaking images are in:

```text
images/speaking/
```

## Azure TTS and Image Rule

Automation media generation must use the narrow project wrapper:

```text
node /Users/violettashishkina/Documents/Dutch/scripts/generate_missing_inburgering_media.mjs --html-dir /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN
```

The wrapper reads `assets/app.js`, generates only missing MP3/PNG files, skips successful existing media, uses the installed `azure-tts` and `azure-image-15` skills, and then runs the media checker.

## Automation Output Rule

Version 15 is an existing package folder after this run. Future new-package automation runs must not overwrite this folder or append new lesson material into it.

If the user explicitly asks to finish or resume this incomplete version, create only the missing files inside this folder. Do not regenerate successful MP3s or speaking images, and do not create the next version for that explicit resume request.

Every automation run must detect the highest existing `inburgering-a2-html-lessons-vNNN/` folder and create the next unused version folder.

```text
/Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN/index.html
/Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN/assets/
/Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN/audio/
/Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN/images/speaking/
```

Use the next unused numeric suffix at run time. Keep all HTML, audio, image, and asset references inside that same new version folder.

Multiple-choice rule: do not make the correct answer always `A`. For KNM and any other A/B/C tasks, distribute correct answers across `A`, `B`, and `C` and keep the HTML answer key aligned with the Markdown files.

Answer UI rule: HTML lessons must open with answers hidden. Keep the global answer button at the top, and also make every individual exercise answer clickable so the learner can show or hide just that one answer. On mobile, keep the global button compact as an icon: green X when answers are hidden and green checkmark when answers are visible.

GitHub Pages publishing rule: run Git commands from `/Users/violettashishkina/Documents/Dutch/inburgering-lessons` as the working directory and use plain commands (`git fetch origin main`, `git merge --ff-only origin/main`, `git push origin main`). Do not use `git -C /Users/violettashishkina/Documents/Dutch/inburgering-lessons ...` from automation because it can bypass the persistent Git/network approval and fail with DNS errors.

Mobile layout rule: on phone widths, the main `.shell` must use the full viewport with small gutters, for example `width: calc(100% - 24px); max-width: 100%; margin-inline: auto;`. Do not use narrow fixed caps such as `366px` or `320px` for the whole lesson shell.

No-reuse rule: do not reuse speaking images from older versions or earlier runs. Create fresh version-specific image assets for the new package, store them in the matching new version folder, and use filenames that start with the new version.

```text
node /Users/violettashishkina/Documents/Dutch/scripts/check_inburgering_duplicates.mjs /Users/violettashishkina/Documents/Dutch/inburgering-a2-prep-vNNN
node /Users/violettashishkina/Documents/Dutch/scripts/check_inburgering_media.mjs /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN
```
