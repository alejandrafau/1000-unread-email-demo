# 1000 unread emails — Design System

Identity for the "1000 unread emails" workshop: facilitator's guide (letter), slide deck, outputs website.

## Core idea
Layouts read like an email: ruled rows, bold field labels ("From:", "Subject:", "Poem by:") with regular values, inside one ink frame.

## Logo
- `assets/mw-logo.png` — hand drawing. Use as is: never redraw, recolor, crop or place on color.
- Always on white paper.
- Large: its own grid cell left of the title (doc header, title slide).
- Small: footer or nav bar, 28–56px tall, beside the wordmark "1000 unread emails".

## Type
JetBrains Mono only. 800 titles (tracking -0.03em, leading 1), 700 labels, 400 body. Sizes in `tokens/typography.css`.

## Color
Ink #1A2332 (text, rules) · Slate #4A5F7A (secondary) · Steel #5D7186 (links) · Oxide #B8785A (hover, rare accent) · Paper #FFFFFF. Tokens in `tokens/colors.css`.

## Bilingual
English is primary. Every text carries a Spanish translation in italic 400, Slate #4A5F7A: inline after " / " for labels and headings, as a following line for titles and paragraphs.

## Rules
- Frame 1.5px ink (2px on slides); rows split by 1px ink.
- No radius, shadows, gradients or icons.
- Every content slide/page has the logo footer bar.

## Files
- `styles.css` — imports all tokens
- `guidelines/`, `components/`, `slides/` — specimen cards
- `Workshop Slides.dc.html` — slide templates (title, section divider, content)
- `Workshop Identity.dc.html` — doc header, web header, slide examples
