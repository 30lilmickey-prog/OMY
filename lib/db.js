import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'data');
fs.mkdirSync(dir, { recursive: true });
const db = new Database(path.join(dir, 'omy.db'));
db.exec(fs.readFileSync(path.join(process.cwd(), 'schema.sql'), 'utf8'));

export default db;
