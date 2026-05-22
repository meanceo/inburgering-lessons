# Inburgering A2 HTML Lessons - Version 16

Open:

```text
index.html
```

This static package contains 10 lessons: reading, writing with autosave textareas and checklist, speaking with local Azure Image 1.5 PNG references, listening with 16 MP3 references, KNM, and 90 grammar drills.

Answers are hidden by default. The global answer button stays at the top, and every exercise has its own answer toggle. On mobile the global control is the compact green X/check icon with accessible labels.

Audio files are in `audio/`. Speaking images are in `images/speaking/`.

Use the media wrapper only:

```text
node /Users/violettashishkina/Documents/Dutch/scripts/generate_missing_inburgering_media.mjs --html-dir /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN
```

Validation:

```text
node /Users/violettashishkina/Documents/Dutch/scripts/check_inburgering_duplicates.mjs /Users/violettashishkina/Documents/Dutch/inburgering-a2-prep-vNNN
node /Users/violettashishkina/Documents/Dutch/scripts/check_inburgering_media.mjs /Users/violettashishkina/Documents/Dutch/inburgering-a2-html-lessons-vNNN
```
