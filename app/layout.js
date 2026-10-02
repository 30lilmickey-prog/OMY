export const metadata = { title: 'OMY Books' };
export default function Layout({ children }) {
  return <html lang="en"><body style={{ fontFamily: 'system-ui', maxWidth: 720, margin: '2rem auto' }}>{children}</body></html>;
}
