# Turbo Repo + Vendure + Next.js POC

Monorepo with a **Vendure** backend (shop API) and a **Next.js** storefront, managed with Turborepo.

## Structure

| App           | Path               | Description                    |
|---------------|--------------------|--------------------------------|
| **Vendure**   | `apps/shop-api`    | GraphQL Shop API & Admin API   |
| **Storefront**| `apps/storefront`  | Next.js storefront             |
| **Shared**    | `packages/*`       | TypeScript config, etc.       |

## Requirements

- **Node.js** ≥ 18 (Vendure recommends 20+)
- **pnpm** (see `packageManager` in root `package.json`)

## Setup

```bash
pnpm install
```

## Scripts (from repo root)

### Run everything

- **`pnpm dev`** – Vendure (server + worker + dashboard) + Next.js storefront

### Run apps separately

- **`pnpm dev:vendure`** – Vendure only (port 3000)
- **`pnpm dev:storefront`** – Next.js storefront only (port 3001)

### Build

- **`pnpm build`** – Build all apps
- **`pnpm build:vendure`** – Build Vendure (server + dashboard)
- **`pnpm build:storefront`** – Build storefront

### Start (production-style, after build)

- **`pnpm start`** – Start all apps
- **`pnpm start:vendure`** – Start Vendure
- **`pnpm start:storefront`** – Start storefront

### Lint

- **`pnpm lint`** – Lint all apps

## Ports

| Port  | App        | URLs |
|-------|------------|------|
| **3000** | Vendure   | Shop API: `/shop-api`, Admin API: `/admin-api`, GraphiQL: `/graphiql`, Dashboard: `/dashboard` |
| **3001** | Storefront | Next.js app |

## Vendure

- **Superadmin**: `superadmin` / `superadmin` (override in `apps/shop-api/.env`)
- **Database**: SQLite (`apps/shop-api/vendure.sqlite`) for POC
- See `apps/shop-api/README.md` for shop-api details.

## Storefront

- Set **`NEXT_PUBLIC_SHOP_API_URL`** to your Vendure Shop API (e.g. `http://localhost:3000/shop-api`) when connecting the frontend to the API.
- See `apps/storefront/` for the Next.js app.

## Deployment

- **Storefront** → e.g. **Vercel** (set root to `apps/storefront`, add `NEXT_PUBLIC_SHOP_API_URL`).
- **Vendure** → **Railway**, **Render**, **Fly.io**, or Docker (long-running Node server; not suitable for Vercel serverless).
