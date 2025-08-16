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

Create a `supabase.local.json` file under `src/lib` with your Supabase project credentials and OAuth provider keys:

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
  "SUPABASE_CALLBACK_URL": "https://your-project.supabase.co/auth/v1/callback"
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Publishing blog posts

Blog posts can be managed through the `/api/posts` endpoints. To publish a new article, send a `POST` request with the post data:

```bash
curl -X POST http://localhost:3000/api/posts \
  -H 'Content-Type: application/json' \
  -d '{
    "slug": "my-first-post",
    "title": "My First Post",
    "excerpt": "Short summary shown on the blog list",
    "body_md": "# Hello world\nThis is my first post!",
    "image_url": "https://your-project.supabase.co/storage/v1/object/public/blog-images/hello.png"
  }'
```

### Uploading images

1. Create a `blog-images` bucket in the Supabase Storage dashboard.
2. Upload your image to the bucket, e.g. using the Supabase JavaScript client:

```ts
const file = /* File or Blob */
const { data, error } = await supabase.storage
  .from('blog-images')
  .upload('hello.png', file)
const {
  data: { publicUrl }
} = supabase.storage.from('blog-images').getPublicUrl('hello.png')
```

3. Use the `publicUrl` as the `image_url` field when creating the post. The image will appear above the article content on its dedicated page.
