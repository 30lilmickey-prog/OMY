import Link from 'next/link';
import { notFound } from 'next/navigation';
import db from '@/lib/db';
import { updateClient } from '../actions';
import ClientFields from '../ClientFields';

export const dynamic = 'force-dynamic';

export default async function EditClient({ params }) {
  const { id } = await params;
  const client = db.prepare('SELECT * FROM clients WHERE id=?').get(Number(id));
  if (!client) notFound();
  return (
    <main>
      <p><Link href="/clients">← Clients</Link></p>
      <h1>Edit client</h1>
      <form action={updateClient.bind(null, client.id)}>
        <ClientFields client={client} />
        <button type="submit" style={{ padding: '8px 16px' }}>Save</button>
      </form>
    </main>
  );
}
