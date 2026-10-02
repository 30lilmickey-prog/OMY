import Link from 'next/link';
export default function Home() {
  return (
    <main>
      <h1>OMY Books</h1>
      <ul>
        <li>Expenses &amp; receipts (coming soon)</li>
        <li>Income/expense reports (coming soon)</li>
        <li><Link href="/clients">Clients</Link></li>
      </ul>
    </main>
  );
}
