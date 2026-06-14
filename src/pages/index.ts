export const prerender = false;

function getCookie(request: Request, name: string): string | null {
  const cookie = request.headers.get('cookie');

  if (!cookie) return null;

  const parts = cookie.split(';').map((c) => c.trim());

  for (const p of parts) {
    if (p.startsWith(`${name}=`)) return decodeURIComponent(p.substring(name.length + 1));
  }

  return null;
}

export async function GET({ request }: { request: Request }) {
  const preferred = getCookie(request, 'preferred-language');
  const accept = request.headers.get('accept-language') || '';

  const prefersUkrainian = accept.split(',').some((part) => part.trim().toLowerCase().startsWith('uk'));
  const lang = preferred && ['en', 'uk'].includes(preferred) ? preferred : prefersUkrainian ? 'uk' : 'en';

  return new Response(null, {
    // 302 (not 301): the target depends on a cookie/header that can change,
    // so the redirect must not be cached permanently by the browser.
    status: 302,
    headers: {
      Location: `/${lang}/`,
      'Cache-Control': 'no-store',
    },
  });
}
