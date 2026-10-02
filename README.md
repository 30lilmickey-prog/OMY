# OMY

Private web accounting app: expenses & receipts, income/expense reports, clients & payments.

## Run locally
    npm install
    DATABASE_URL=postgres://... APP_PASSWORD=choose-one npm run dev

## Deploy on Vercel
1. Import this repo at vercel.com/new.
2. In the project: Storage → add a **Neon Postgres** database (this sets `DATABASE_URL` for you).
3. Settings → Environment Variables → add `APP_PASSWORD` (the login password; username can be anything).
4. Deploy. Tables are created automatically on first use.

Stack: Next.js + Postgres (schema in `schema.sql`). Never commit real financial data or `.env` files.

## Roadmap
1. Clients CRUD
2. Expenses + receipt upload
3. Income/payment tracking
4. Monthly P&L report
