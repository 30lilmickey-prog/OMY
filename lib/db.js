import { neon } from '@neondatabase/serverless';
import fs from 'fs';
import path from 'path';

const sql = neon(process.env.DATABASE_URL);

let ready;
// Creates the tables on first use (all statements are IF NOT EXISTS).
export function db() {
  ready ??= (async () => {
    const schema = fs.readFileSync(path.join(process.cwd(), 'schema.sql'), 'utf8');
    for (const stmt of schema.split(';').map((s) => s.trim()).filter(Boolean)) {
      await sql.query(stmt);
    }
  })();
  return ready.then(() => sql);
}
