# Project overview

This is a Jekyll résumé site for GitHub Pages. Main content and settings are in
`_config.yml`; the entry page is `index.md`. The remote theme is
`sproogen/resume-theme`.

## Git

- Use Conventional Commits, such as `feat:`, `fix:`, or `docs:`.
- When a commit message needs additional details, use a bullet list in the body.

## Environment

- Use mise to install dependencies when possible; use the OS package manager as a fallback.

## Blog SEO

- When adding a blog article, review the `description` in the front matter of
  `blog/index.html` against the topics covered by the published posts.
- Update the description when an article expands the blog's topic coverage.
  Keep it a concise summary of the blog as a whole, rather than a list of titles.
  Leave it unchanged if it already covers the new article.
- Keep the visible blog introduction consistent with the description when topic
  coverage changes.
- Build the site and verify the generated meta description, Open Graph
  description, and structured-data description on `/blog/`.
