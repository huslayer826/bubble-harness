# Bubble Harness website

A static landing page with no build step: `index.html`, `styles.css` and `main.js`, plus `assets/`. It is about 1 MB in total.

## Preview locally

```sh
python3 -m http.server 4173
# open http://localhost:4173
```

## Host it

Any static host works. Point it at this folder (`site/`), with no build command:

- **Vercel / Netlify / Cloudflare Pages:** set the root (or publish) directory to `site`.
- **GitHub Pages:** branch deploys only serve the repo root or `/docs`, so use a GitHub Actions Pages workflow that uploads `site/` with `actions/upload-pages-artifact`.

Once you have a domain, change `og:image` in `index.html` to an absolute URL (for example `https://bubbleharness.dev/assets/og.png`). Most social sites ignore relative share images.

## What updates itself

`main.js` reads the latest GitHub release when the page loads. It then updates:

- the version (`v0.1.5`)
- the .dmg size
- the download links

If the GitHub API is unreachable, the page keeps the static values in the HTML. The GitHub star count only appears once the repo has 50 or more stars.

## Brand

| File | Use |
| --- | --- |
| `assets/brand/app-icon.svg`, `app-icon-1024.png` | App / dock icon |
| `assets/brand/mark.svg` | Gradient mark, for dark backgrounds |
| `assets/brand/mark-mono.svg` | One-colour mark (`currentColor`) |
| `assets/brand/wordmark.svg` | Mark + "Bubble Harness" |
| `assets/brand/favicon.svg`, `app-icon-32.png`, `app-icon-180.png` | Favicon / Apple touch icon |

The mark is a glossy ring with a smaller bubble rising out of it. It reads as the harness, with an agent being spawned. It reuses the app's own tokens:

- **Accent:** periwinkle `#8b9bff`, with gradient `#d6dcff → #6f81ff`
- **Surfaces:** near-black, `#0b0c0e` / `#0f1012`

## Screenshots

Everything in `assets/screens/` is a real capture of Bubble Harness 0.1.5, running against a throwaway demo project ("tidepool"). The agents produced real output: the dark-mode change came from Claude Code and the code review from Sonnet 5.5.

Two edits were made to the images:

- The local folder path in the Changes panel was replaced with `~/Projects/tidepool`.
- One model label in the Race dialog was simplified to "Default".

## Third-party marks

The agent logos in `assets/agents/` identify the integrations, and the marks belong to their owners. The OpenAI and OpenCode paths come from Simple Icons (CC0 1.0). Claude, Cursor, Grok and Antigravity come from LobeHub Icons (MIT, Copyright (c) 2023 LobeHub), the same sources the desktop app uses.
