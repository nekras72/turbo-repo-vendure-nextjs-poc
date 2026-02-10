# apps/web — Next.js frontend

Next.js app for the Turborepo POC. Deploy to **Vercel** with Root Directory `apps/web` and build command `cd ../.. && pnpm install && turbo run build --filter=web`.

- **Env:** `NEXT_PUBLIC_API_URL` — base URL of the API project (e.g. `https://your-api.vercel.app`).
- **Local:** `pnpm dev` (port 3000).
