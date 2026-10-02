import Link from 'next/link';
import { db } from '@/lib/db';
import { addClient, deleteClient } from './actions';
import ClientFields from './ClientFields';

export const dynamic = 'force-dynamic';

export default async function Clients() {
  const sql = await db();
  const clients = await sql`SELECT * FROM clients ORDER BY name`;
  return (
    <main>
      <p><Link href="/">← Home</Link></p>
      <h1>Clients</h1>
      <form action={addClient} style={{ marginBottom: 24 }}>
        <ClientFields />
        <button type="submit" style={{ padding: '8px 16px' }}>Add client</button>
      </form>
      {clients.length === 0 ? <p>No clients yet.</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ textAlign: 'left' }}>
            <th>Name</th><th>Phone</th><th>Service</th><th>Frequency</th><th></th>
          </tr></thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id} style={{ borderTop: '1px solid #ddd' }}>
                <td>{c.name}</td><td>{c.phone}</td><td>{c.service}</td><td>{c.frequency}</td>
                <td>
                  <Link href={`/clients/${c.id}`}>Edit</Link>{' '}
                  <form action={deleteClient.bind(null, c.id)} style={{ display: 'inline' }}>
                    <button type="submit">Delete</button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
