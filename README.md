# Dutch A2 Inburgering Lessons

Static GitHub Pages publish folder for the Dutch A2 inburgering lesson HTML packages.

Live site: https://inburgering.learn-dutch-with-ai.com/

GitHub Pages fallback: https://meanceo.github.io/inburgering-lessons/

GitHub repository: https://github.com/meanceo/inburgering-lessons

## Included

- inburgering-a2-html-lessons-v001 through v013
- inburgering-a2-grammar-theory-practice-v001

## Excluded

- inburgering-a2-html-lessons-v003/2026-05-14_daily_exam_prep_a2_v003.html
- .DS_Store and local working files

## Publish

This folder is intended to be pushed to a public GitHub repository named inburgering-lessons and served with GitHub Pages from main / root.

The `CNAME` file keeps the custom subdomain connected:

```text
inburgering.learn-dutch-with-ai.com
```

## Daily Automation

The `daily-dutch-a2-lesson` automation creates the next Markdown and HTML lesson package, validates it locally, then publishes only the validated HTML package to this GitHub Pages folder.

The automation should stop before committing or pushing if required files are missing, media references fail, answers are exposed by default, the publish repo is dirty, or GitHub sync fails.

Only static public lesson assets belong here: HTML, CSS, JavaScript, MP3 audio, PNG/JPEG images, `CNAME`, `.nojekyll`, and this README. Markdown prep folders, local TODO files, automation files, drafts, and credentials should stay out of this repo.

## Public Page Rules

- Public page titles and footers use `by Violetta Bonenkamp`, not learner-targeted phrasing.
- Every published HTML page needs one `<title>`, one meta description, one canonical URL, and one visible `<h1>`.
- Lesson and grammar pages must include a header link and footer link back to the main lesson index.
- The mobile answer button should stay compact as an icon button while keeping the accessible label `Toon antwoorden` / `Verberg antwoorden`.
