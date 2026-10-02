export default function ClientFields({ client = {} }) {
  const input = { display: 'block', width: '100%', padding: 8, marginBottom: 8, boxSizing: 'border-box' };
  return (
    <>
      <input name="name" placeholder="Client name" defaultValue={client.name} required style={input} />
      <input name="phone" type="tel" placeholder="Phone number" defaultValue={client.phone} style={input} />
      <input name="service" placeholder="Service (e.g. house cleaning)" defaultValue={client.service} style={input} />
      <select name="frequency" defaultValue={client.frequency || ''} style={input}>
        <option value="">Frequency…</option>
        <option value="weekly">Weekly</option>
        <option value="biweekly">Every 2 weeks</option>
        <option value="monthly">Monthly</option>
        <option value="one-time">One-time</option>
      </select>
    </>
  );
}
