# Presentations (HTML)

Browser-based slide decks. Open a file from `output/` or `drafts/` in Chrome, Edge, or Safari. For email, link to a hosted copy rather than attaching large HTML.

## Folders

| Folder | Purpose |
|--------|---------|
| `templates/` | Full deck shells — copy to start a new presentation |
| `slides/` | Optional one-file-per-slide snippets to assemble into a deck |
| `styles/` | Shared deck CSS (linked from templates) |
| `assets/` | Images, logos, backgrounds |
| `drafts/` | Work in progress |
| `output/` | Finished decks for sharing or hosting |

## Workflow

1. Copy `templates/blank-deck.html` into `drafts/my-talk.html`.
2. Duplicate slide `<section>` blocks; edit title and body.
3. Add images under `assets/` and reference with relative paths while developing.
4. Copy the finished file to `output/` (or host `output/` on static hosting).

## Tips

- Use **16:9** (`aspect-ratio` in the template) for projectors and Teams screen share.
- Prefer system fonts or web fonts with a fallback stack.
- Export to PDF from the browser (Print → Save as PDF) if you need a non-HTML handoff.
