# Turborepo + Next.js + NestJS (Vercel Free POC)

Monorepo with a **Next.js** frontend and a **NestJS** backend, both deployable on **Vercel** (Free tier) as two separate projects.

## Structure

| App    | Path         | Description                          |
|--------|--------------|--------------------------------------|
| **web**| `apps/web`   | Next.js frontend (Vercel)            |
| **api**| `apps/api`   | NestJS backend, serverless (Vercel)  |
| Shared | `packages/*` | TypeScript config, etc.              |

## Requirements

- **Node.js** ≥ 18
- **pnpm** (see `packageManager` in root `package.json`)

## Setup

```bash
pnpm install
```

## Scripts (from repo root)

### Run everything

- **`pnpm dev`** – web + api (in parallel)

### Run apps separately

- **`pnpm dev:web`** – Next.js only (port 3000)
- **`pnpm dev:api`** – NestJS only (port 3001)

### Build

- **`pnpm build`** – Build all apps
- **`pnpm build:web`** – Build frontend
- **`pnpm build:api`** – Build API

### Start (production-style, after build)

- **`pnpm start`** – Start all apps
- **`pnpm start:web`** – Start Next.js
- **`pnpm start:api`** – Start NestJS (local server; not used on Vercel)

### Lint

- **`pnpm lint`** – Lint all apps

## Ports (local)

| Port  | App  | URLs                    |
|-------|------|-------------------------|
| **3000** | web | Next.js app             |
| **3001** | api | NestJS (e.g. `/`, `/health`) |

## API (NestJS serverless)

- **No `app.listen()`** — serverless handler in `apps/api/api/index.ts` only.
- **Express adapter** — Nest uses `@nestjs/platform-express`.
- **Cached handler** — Nest app is created once per function instance, then requests are forwarded to it.
- **Local dev** — `pnpm dev:api` runs `src/server.ts`, which does call `listen()` for local testing only.

Set **`CORS_ORIGIN`** (optional) to your web app URL in production (e.g. `https://your-web.vercel.app`).

## Web (Next.js)

Set **`NEXT_PUBLIC_API_URL`** to your API base URL (e.g. `https://your-api.vercel.app` or `http://localhost:3001` for local).

## Deployment (two Vercel projects)

Create **two** Vercel projects from the same repository.

### 1. Web project (Next.js)

- **Root Directory:** `apps/web`
- **Framework Preset:** Next.js
- **Build Command:** `cd ../.. && pnpm install && turbo run build --filter=web`
- **Install Command:** `cd ../.. && pnpm install`
- **Environment variables:** `NEXT_PUBLIC_API_URL` = your API project URL (e.g. `https://your-api.vercel.app`)

### 2. API project (NestJS serverless)

- **Root Directory:** `apps/api`
- **Build Command:** `cd ../.. && pnpm install && turbo run build --filter=api`
- **Install Command:** `cd ../.. && pnpm install`
- **Environment variables (optional):** `CORS_ORIGIN` = your web project URL
- **`vercel.json`** in `apps/api` routes all requests to the serverless handler (`/api`).

Vercel Free plan: short-lived functions, no WebSockets, no long-running background jobs. For persistence use a serverless-friendly DB (e.g. **Neon**, **Supabase**) and add the connection URL in the API project env vars when you need it.
