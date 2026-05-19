# Inburgering A2 HTML Lessons - Version 2

This is a static HTML daily exam prep package for Violetta Bonenkamp.

Open:

```text
index.html
```

The interface is adapted for adult A2 inburgering preparation:

- clear lesson path
- exam and grammar sections
- exam sections written in Dutch for realistic exam practice
- expanded practice volume: 18 reading cards, 18 writing tasks, 28 speaking cards, 17 listening tasks, 28 KNM questions, and 86 grammar drills
- question cards
- immediate answer blocks
- optional hide/show answers
- writing answer text boxes with model answers and a checklist
- AI practice prompts for speaking and listening
- Dutch KNM questions
- MP3 audio players for listening practice
- local image assets for speaking practice
- compact responsive hero that prevents long Dutch headings from overlapping the preview card

Audio files are in:

```text
audio/
```

Speaking images are in:

```text
images/speaking/
```

## Current Automation Image Rule

For future generated speaking images, use the `azure-image-15` / Azure `gpt-image-1.5` workflow only. Do not create SVG speaking images and do not use `gpt-image-2`.

Generate each speaking image once. The first successful Azure Image 1.5 output is final. Do not inspect, reject, or regenerate images because of faces, facial details, anonymization, or appearance. Do not run face checks or face-specific visual QA.
