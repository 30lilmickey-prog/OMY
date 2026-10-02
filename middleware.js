import { NextResponse } from 'next/server';

// Password-protects the whole app with HTTP Basic auth. Set APP_PASSWORD in Vercel.
export function middleware(req) {
  const password = process.env.APP_PASSWORD;
  if (!password) return new NextResponse('APP_PASSWORD is not set', { status: 500 });
  const header = req.headers.get('authorization') || '';
  if (header.startsWith('Basic ')) {
    const [, pass = ''] = atob(header.slice(6)).split(/:(.*)/s);
    if (pass === password) return NextResponse.next();
  }
  return new NextResponse('Login required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="OMY Books"' },
  });
}
