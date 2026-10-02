'use server';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const FREQUENCIES = ['weekly', 'biweekly', 'monthly', 'one-time'];

function read(form) {
  const name = String(form.get('name') || '').trim();
  if (!name) throw new Error('Name is required');
  const frequency = String(form.get('frequency') || '');
  return {
    name,
    phone: String(form.get('phone') || '').trim(),
    service: String(form.get('service') || '').trim(),
    frequency: FREQUENCIES.includes(frequency) ? frequency : null,
  };
}

export async function addClient(form) {
  const c = read(form);
  const sql = await db();
  await sql`INSERT INTO clients (name, phone, service, frequency)
            VALUES (${c.name}, ${c.phone}, ${c.service}, ${c.frequency})`;
  revalidatePath('/clients');
}

export async function updateClient(id, form) {
  const c = read(form);
  const sql = await db();
  await sql`UPDATE clients SET name=${c.name}, phone=${c.phone}, service=${c.service},
            frequency=${c.frequency} WHERE id=${id}`;
  revalidatePath('/clients');
  redirect('/clients');
}

export async function deleteClient(id) {
  const sql = await db();
  await sql`DELETE FROM clients WHERE id=${id}`;
  revalidatePath('/clients');
}
