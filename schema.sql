CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT,
  service TEXT,
  frequency TEXT -- weekly | biweekly | monthly | one-time
);
CREATE TABLE IF NOT EXISTS income (
  id INTEGER PRIMARY KEY, client_id INTEGER REFERENCES clients(id),
  date TEXT NOT NULL, amount_cents INTEGER NOT NULL, description TEXT,
  status TEXT NOT NULL DEFAULT 'unpaid' -- unpaid | paid
);
CREATE TABLE IF NOT EXISTS expenses (
  id INTEGER PRIMARY KEY, date TEXT NOT NULL, amount_cents INTEGER NOT NULL,
  category TEXT, vendor TEXT, description TEXT, receipt_path TEXT
);
