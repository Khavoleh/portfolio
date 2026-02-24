export const prerender = false;

function getCookie(request: Request, name: string): string | null {
  const cookie = request.headers.get('cookie');

  if (!cookie) return null;

  const parts = cookie.split(';').map((c) => c.trim());

  for (const p of parts) {
    if (p.startsWith(name + '=')) return decodeURIComponent(p.substring(name.length + 1));
  }

  return null;
}

export async function GET({ request }: { request: Request }) {
  const preferred = getCookie(request, 'preferred-language');
  const accept = request.headers.get('accept-language') || '';

  const lang = preferred && ['en', 'uk'].includes(preferred) ? preferred : accept.startsWith('uk') ? 'uk' : 'en';

  return new Response(null, {
    status: 301,
    headers: {
      Location: `/${lang}/`,
    },
  });
}
