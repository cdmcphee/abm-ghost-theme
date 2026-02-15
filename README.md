# A Broad Margin — Ghost Theme

Custom theme for [abroadmargin.com](https://abroadmargin.com). Single-author publication by Chris McPhee.

## Design

Crimson Pro body, DM Sans Light headlines, DM Mono dates. Warm cream palette. Signature left-margin column with ☞ manicule and date on every post. Five post types differentiated by internal Ghost tags (`#essay`, `#observation`, `#link`, `#photo`, `#embed`).

## Structure

```
default.hbs                  Master template (header, footer, fonts)
index.hbs                    Homepage stream
post.hbs                     Single post (same stream layout + prev/next)
page.hbs                     Static pages (About)
tag.hbs / author.hbs         Archive pages
partials/
  post-card.hbs              Dispatcher — routes to type partial
  post-types/                essay, observation, link, photo, embed
assets/
  css/                       PostCSS source (vars, global, stream, content, page, etc.)
  js/                        endmark.js (◆ permalink injection)
  built/                     Compiled output
```

## Development

```bash
npm install --legacy-peer-deps
npm run dev          # Watch + livereload
npm run build        # Production build
npm run test         # GScan validation
npm run zip          # Build + create upload zip
```

Upload `a-broad-margin.zip` to Ghost Admin > Settings > Design > Upload theme.

## Post types

| Tag | Behaviour |
|---|---|
| (none / `#essay`) | Title + body. Default. |
| `#observation` | No title rendered. Larger body text. |
| `#link` | "via" line from `custom_excerpt` + body + bookmark card. |
| `#photo` | `feature_image` rendered inside body. Add `#wide` for bleed. |
| `#embed` | Same as link. Embed cards render natively from content. |

## Built on

[Ghost Starter Theme](https://github.com/TryGhost/Starter) (build pipeline, file structure). All CSS and templates replaced.
