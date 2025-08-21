# Supabase Style Web App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It features a Supabase-inspired dark theme and includes Auth, Services, and Blog pages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Auth Configuration

Create a `supabase.local.json` file in the project root with your Supabase project credentials, OAuth provider keys, and SMTP settings used by the contact form:

```
{
  "SUPABASE_URL": "https://your-project.supabase.co",
  "SUPABASE_ANON_KEY": "your-supabase-anon-key",
  "GITHUB_APP_NAME": "AnalytixCG (Dev)",
  "GITHUB_CLIENT_ID": "your-client-id",
  "GITHUB_CLIENT_SECRET": "your-client-secret",
  "GOOGLE_APP_NAME": "AnalytixCG (Dev)",
  "GOOGLE_CLIENT_ID": "your-client-id",
  "GOOGLE_CLIENT_SECRET": "your-client-secret",
  "SUPABASE_CALLBACK_URL": "https://your-project.supabase.co/auth/v1/callback",
  "SMTP_HOST": "smtp.office365.com",
  "SMTP_PORT": 587,
  "SMTP_SECURE": false,
  "SMTP_USER": "your-smtp-username",
  "SMTP_PASS": "your-smtp-password",
  "SMTP_FROM": "Analytix Code Groove <info@example.com>",
  "EMAIL_TO_SUPPORT": "support@example.com",
  "EMAIL_TO_INFO": "info@example.com"
}
```

The file is ignored by Git and any values it defines are used only when corresponding environment variables are absent.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Publishing blog posts

Posts can be created from the `/blog/new` page which provides fields for the title, excerpt, tags, Markdown body and an optional image upload. Each post now stores language-specific fields in a separate `post_translations` table, so the page also sends the current interface language. The image is stored in the Supabase `posts` storage bucket under a folder for the current user's UUID and automatically linked to the post.

You can also manage posts through the `/api/posts` endpoints. To publish a new article programmatically, send a `POST` request with the post data including a `lang` code (`en` or `es`):

```bash
curl -X POST http://localhost:3000/api/posts \
  -H 'Content-Type: application/json' \
  -d '{
    "slug": "my-first-post",
    "lang": "en",
    "title": "My First Post",
    "excerpt": "Short summary shown on the blog list",
    "tags": ["nextjs", "supabase"],
    "body_md": "# Hello world\nThis is my first post!",
    "cover_url": "https://your-project.supabase.co/storage/v1/object/public/posts/<user-id>/hello.png"
  }'
```

### Markdown formatting

Posts support [Markdown](https://www.markdownguide.org/basic-syntax/) with GitHub Flavored Markdown extensions. Common patterns:

- `# Heading` creates a large title, while `##` and `###` produce progressively smaller subtitles.
- Use `**bold**` or `*italic*` for emphasis.
- Start lines with `-` or `1.` to create lists.
- Embed images anywhere using `![alt text](https://url/to/image.png)`—place the Markdown where you want the image to appear in the article.

### Uploading images

Images uploaded from the `/blog/new` page are stored automatically. To upload images manually use the `posts` bucket and place files inside a folder matching the author's UUID, e.g. `posts/013d5128-6a52-4e6e-bd9f-b8e2c4477339/image.png`.

Example using the Supabase JavaScript client:

```ts
const file = /* File or Blob */
const { data, error } = await supabase.storage
  .from('posts')
  .upload(`${user.id}/hello.png`, file, { upsert: true })
const {
  data: { publicUrl }
} = supabase.storage.from('posts').getPublicUrl(`${user.id}/hello.png`)
```

Use the `publicUrl` as the `cover_url` field when creating the post via the API. The image will appear above the article content on its dedicated page.
To show images inside the article itself, include their URLs in the Markdown body using the `![alt](url)` syntax at the desired location.
