# Shop API (Vendure)

Vendure backend for the POC. Quick Start–equivalent setup with SQLite.

## Setup

From the monorepo root:

```bash
pnpm install
```

## Run

- **Dev** (server + worker + dashboard): from root `pnpm dev`, or from this app `pnpm dev`
- **Dev server only**: `pnpm dev:server` (API only, no worker/dashboard)

## Ports

- **3000** – Vendure API (admin-api, shop-api, GraphiQL, dashboard when built)
- **3001** – Next.js storefront (when running `pnpm dev` from root)

## URLs

- Shop API: http://localhost:3000/shop-api
- Admin API: http://localhost:3000/admin-api
- GraphiQL: http://localhost:3000/graphiql
- Dashboard: http://localhost:3000/dashboard (after running `pnpm dev:dashboard` or building)

## Credentials

- Superadmin: `superadmin` / `superadmin` (set in `.env`)

## Populate sample data

After first run, use the Vendure CLI or Admin API to create products, or run a populate script. For a quick storefront test, add a payment method "dummy-payment-method" in the Admin and create a product.
