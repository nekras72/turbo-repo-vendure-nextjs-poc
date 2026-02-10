# apps/api — NestJS serverless (Vercel)

NestJS backend running as a **single serverless function** on Vercel. No `app.listen()` — the handler is exported from `api/index.ts` and all routes are rewritten to it via `vercel.json`.

- **Local dev:** `pnpm dev` runs `src/server.ts` with `listen()` (port 3001).
- **Vercel:** `api/index.ts` bootstraps Nest once per instance and forwards requests (cached handler).
- **Env (optional):** `CORS_ORIGIN` for your web app URL.
- **Deploy:** Root Directory `apps/api`, build: `cd ../.. && pnpm install && turbo run build --filter=api`.
