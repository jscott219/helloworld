# Newsletters (Outlook-friendly HTML)

HTML email for Outlook and other clients. Favor **tables**, **inline CSS**, and **hosted images** (not local file paths in sent mail).

## Folders

| Folder | Purpose |
|--------|---------|
| `templates/` | Full email layouts — copy to `drafts/` or duplicate for a new campaign |
| `partials/` | Reusable blocks (header, footer, hero, CTA) — paste into a template |
| `styles/` | Reference CSS only — **inline** into HTML before send (Outlook ignores `<style>` in many cases) |
| `assets/` | Images for **preview**; production images should live on a CDN or public URL |
| `drafts/` | Work in progress |
| `output/` | Final `.html` ready to paste into Outlook, an ESP, or a send tool |

## Workflow

1. Copy `templates/blank-newsletter.html` into `drafts/my-campaign.html`.
2. Edit content; pull blocks from `partials/` as needed.
3. Inline styles from `styles/base.css` (or use your ESP’s inliner).
4. Replace image `src` with absolute HTTPS URLs.
5. Save the finished file to `output/`.

## Outlook checklist

- Max width ~600px for the main container
- Layout with `<table role="presentation">`, not flex/grid for structure
- `font-family` stacks with Arial, Helvetica, sans-serif
- Buttons as table cells with `bgcolor`, not only CSS `background`
- Test in Outlook desktop (Word rendering engine) and Outlook on the web
