# Blog Markdown rendering notes

The blog articles on the site are rendered with `react-markdown` and a specific
stack of plugins and custom components. A generic Markdown previewer (such as
markdownlivepreview.com) usually does **not** apply the same pipeline, which is
why the preview can look different from what readers see on the site.

Key differences between the live preview and the site renderer:

- **GitHub-flavored Markdown features** (tables, task lists, strikethrough) are
  enabled on the site via `remark-gfm`. A plain previewer that only supports
  CommonMark can ignore or reformat those constructs.
- **Single line breaks** are converted into `<br>` tags on the site through
  `remark-breaks`. Standard Markdown requires a double space or blank line for a
  line break, so one-line paragraphs can collapse together in a basic preview.
- **Inline HTML** inside the Markdown is parsed because the renderer enables
  `rehype-raw`. Most previewers sanitize or drop inline HTML by default, so any
  embedded HTML blocks will disappear in the preview.
- **Automatic heading anchors** are generated via `rehype-slug` and
  `rehype-autolink-headings`, so the headings on the site gain IDs and `#`
  anchor links that are missing from a basic preview.
- **Custom component styling** (links, images, blockquotes, code blocks) is
  applied through the `components` map in `page.tsx` and Tailwind Typography
  classes. A previewer that uses its own default HTML and CSS will render a
  visibly different layout even when the Markdown itself is the same.

To get a preview closer to production, use a renderer configured with the same
plugins (`remark-gfm`, `remark-breaks`, `rehype-raw`, `rehype-slug`,
`rehype-autolink-headings`) and allow the custom components or CSS used in
`src/app/blog/[slug]/page.tsx`.
