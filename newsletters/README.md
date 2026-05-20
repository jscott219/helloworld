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

## AURA newsletters

| File | Purpose |
|------|---------|
| `templates/aura-newsletter.html` | Reusable shell with placeholder sections |
| `drafts/aura-issue-01-welcome.html` | Issue 1 draft (local logo path for preview) |
| `output/aura-issue-01-welcome.html` | Send-ready copy with HTTPS logo URL |
| `partials/aura-header.html`, `section-heading.html`, `current-capabilities-grid.html`, `whats-updated-section.html`, `future-releases-grid.html`, `tip-box.html`, `faq-block.html`, `contacts-section.html` | Reusable blocks |

Logo assets in `assets/` and `shared/assets/`:

| File | Use |
|------|-----|
| `aura-logo-dark.png` | **Newsletter default** — white tiles, blue letters (dark backgrounds) |
| `aura-logo-light.png` | Blue tiles, white letters (light backgrounds) |
| `aura-logo-mono.png` | Black & white variant |
| `aura-logo.png` | Copy of `aura-logo-dark.png` for generic reference |

Brand palette is Max (2023+)–inspired — see `shared/brand/colors.css`. **AURA app URL:** [https://backstage.prd.o11y.discomax.com/aura](https://backstage.prd.o11y.discomax.com/aura) — requires **Google Chrome** and the **corporate VPN**.

**Local preview:** Open `drafts/aura-issue-01-welcome.html` in Chrome (logo is `drafts/aura-logo-dark.png` in the same folder). If the image still fails, run `python3 -m http.server 8080` from the `newsletters/` folder and open `http://localhost:8080/drafts/aura-issue-01-welcome.html`.

Host logo PNGs at a reachable HTTPS URL before send (update `src` in `output/` if your CDN path differs).

## Workflow

1. Copy `templates/blank-newsletter.html` or `templates/aura-newsletter.html` into `drafts/my-campaign.html`.
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
