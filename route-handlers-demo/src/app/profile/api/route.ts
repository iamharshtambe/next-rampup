import { cookies, headers } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get('Authorization'));

  const requestHeaders = await headers();
  console.log(requestHeaders.get('Authorization'));

  const theme = request.cookies.get('theme');
  console.log(theme);

  const cookieStore = await cookies();
  cookieStore.set('hero', 'zero');
  console.log(cookieStore.get('hero'));

  return new Response('<h1>Prodile API</h1>', {
    headers: { 'content-type': 'text/html', 'Set-Cookie': 'theme=dark' },
  });
}
