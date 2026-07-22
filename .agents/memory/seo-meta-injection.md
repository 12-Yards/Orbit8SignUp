---
name: SEO meta injection
description: How per-route SEO tags are served to crawlers on this SPA marketing site
---
- Client-side useSEO (client/src/lib/seo.ts) is only an enhancement; crawlers get tags from the server.
- In production, server/static.ts catch-all injects per-route meta via server/seo.ts string replacement on index.html.
**Why:** Social scrapers don't run JS; architect review failed a client-only approach.
**How to apply:** When adding a new public page, add its meta to BOTH client/src/lib/seo.ts usage and the routeMeta map in server/seo.ts, plus sitemap.xml. Note: inside an Express 5 `app.use("/{*path}")` handler, req.path is stripped — use req.originalUrl. The injection regexes assume the exact ` />` tag formatting in client/index.html.
