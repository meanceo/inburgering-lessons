# Inburgering A2 HTML Lessons - Version 3

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

## Azure TTS Skill Rule

Automation media generation must use the narrow project wrapper:

```text
node /Users/violettashishkina/Documents/Dutch/scripts/generate_missing_inburgering_media.mjs --html-dir /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN
```

Run this wrapper through the persistent Codex allow rule for `node /Users/violettashishkina/Documents/Dutch/scripts/generate_missing_inburgering_media.mjs`; it should run outside the default sandbox without asking the user for approval. It only reads the target HTML app, generates missing MP3/PNG files referenced by that app, skips successful existing media, unsets generic Azure variables, uses the installed `azure-tts` and `azure-image-15` skills, and then runs the media checker.

If Azure TTS fails with DNS `ENOTFOUND` or `TypeError: fetch failed`, first check that the endpoint host in the bridge config is correct. If the host is correct, retry only missing `.mp3` files from their existing `.txt` transcripts. Do not overwrite successful MP3 files unless explicitly requested.

## Automation Output Rule

Version 3 is an existing package folder after this run. Future new-package automation runs must not overwrite this folder or append new lesson material into it.

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

Answer UI rule: HTML lessons must open with answers hidden. Keep the global answer button at the top, and also make every individual exercise answer clickable so the learner can show or hide just that one answer. On mobile, keep the global button compact as an icon: green X when answers are hidden, green checkmark when answers are visible.

Public page rule: HTML titles, meta descriptions, footers, and public copy must use `by Violetta Bonenkamp`, not learner-targeted phrasing. Each published page must include one `<title>`, one meta description, one canonical URL, one visible `<h1>`, and header/footer navigation back to the main lesson index.

Mobile layout rule: on phone widths, the main `.shell` must use the full viewport with small gutters, for example `width: calc(100% - 24px); max-width: 100%; margin-inline: auto;`. Do not use narrow fixed caps such as `366px` or `320px` for the whole lesson shell, and do not pin mobile shell margins in a way that leaves empty room on the right.

Slash-order exercise rule: for every slash-separated grammar task that asks the learner to build a sentence or question, including `Zet in goede volgorde`, `Maak een zin`, and `Maak een vraag`, the slash-separated parts must be genuinely shuffled and must not already read as the correct answer from left to right. Do not use a heading or label that reveals the solution, such as `Vrijdag eerst`, `Tijd vooraan`, or naming the first word that should come first. Before finishing, compare each shuffled word list with its model answer and rewrite any task where the exercise is already solved.

No-reuse rule: do not reuse speaking images from older versions or earlier runs. Create fresh version-specific image assets for the new package, store them in the matching new version folder, and use filenames that start with the new version, for example `vNNN-speaking-...`.

Azure Image 1.5 rule: speaking images must be raster files generated with the installed `azure-image-15` skill and Azure `gpt-image-1.5`. Do not create or reference SVG speaking images, do not reuse or copy older speaking images, and do not use the old `azure-image` / `gpt-image-2` workflow.

Do not call Azure image helpers directly from automation; the wrapper handles the correct helper and environment.

Image acceptance rule: a speaking image is successful only after Azure Image 1.5 writes the expected output file. Once that file exists, it is final. Do not inspect, reject, or regenerate successful images because of faces, facial details, anonymization, or appearance. Do not run face checks or face-specific visual QA.

If Azure image generation fails before the output file exists, retry or resume only that missing/failed image with the same version-specific filename. Leave successful images untouched. Do not substitute SVGs or copied older images.

```text
node /Users/violettashishkina/Documents/Dutch/scripts/check_inburgering_duplicates.mjs /Users/violettashishkina/Documents/Dutch/inburgering-a2-prep-vNNN
node /Users/violettashishkina/Documents/Dutch/scripts/check_inburgering_media.mjs /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN
```
