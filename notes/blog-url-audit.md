# Blog URL audit

- [x] Inspect repo data sources and confirm the blog links live in `data/blog.json`
- [x] Audit current blog post URLs for redirects and failures
- [x] Replace broken Block Goose blog links with their current `goose-docs.ai` URLs
- [x] Run validation and repo checks
- [x] Commit audited URL updates on a dedicated branch (`fix/blog-url-refresh`, `a9267eb`)

## Findings

- 8 Block Goose blog links returned `404` from `block.github.io/goose/blog/...`
- Those posts now resolve at `https://goose-docs.ai/blog/...`
- Medium links were inconsistent under automated checks because of bot protection, so only the Block migrations were patched
