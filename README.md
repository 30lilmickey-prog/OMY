# OMY

Private web accounting app: expenses & receipts, income/expense reports, clients & payments.

## Run
    npm install
    npm run dev

Stack: Next.js + SQLite (schema in `schema.sql`). Real data lives in `data/` and `uploads/`, which are git-ignored — never commit financial data.

## Roadmap
1. Clients CRUD
2. Expenses + receipt upload
3. Income/payment tracking
4. Monthly P&L report
