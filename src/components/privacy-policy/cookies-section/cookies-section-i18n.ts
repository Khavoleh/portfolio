import type { I18N } from '@shared/interfaces';

export const COOKIES_SECTION_I18N: I18N = {
  en: {
    'privacy.cookies.title': '4. Cookies and Tracking',
    'privacy.cookies.text':
      'This website uses <strong>Local Storage for functionality</strong> and <strong>Vercel Web Analytics</strong> for usage monitoring.',
    'privacy.cookies.local':
      "<strong>Local Storage:</strong> We use your browser's Local Storage to save your site theme and language preference. This is a non-tracking, functional storage mechanism, and the data is never sent to our servers.",
    'privacy.cookies.cookies':
      "<strong>Cookie Storage:</strong> We use your browser's Cookie Storage to save your language preference. This is a non-tracking, functional storage mechanism.",
    'privacy.cookies.no_cookies':
      '<strong>No Tracking Cookies:</strong> The Vercel Analytics tool we use <strong>does not place cookies</strong> on your device for tracking purposes.',
    'privacy.cookies.no_ip':
      '<strong>No Persistent IP Storage:</strong> Your IP address is not stored. It is used temporarily to determine a unique visitor hash (for counting visitors) and is discarded shortly after.',
    'privacy.cookies.no_cross':
      '<strong>No Cross-Site Tracking:</strong> We do not track your browsing habits across other websites.',
  },
  uk: {
    'privacy.cookies.title': '4. Файли Cookie та відстеження',
    'privacy.cookies.text':
      'Цей веб-сайт використовує <strong>локальне сховище для забезпечення функціональності</strong> та <strong>Vercel Web Analytics</strong> для моніторингу використання.',
    'privacy.cookies.local':
      '<strong>Локальне сховище:</strong> ми використовуємо локальне сховище вашого браузера для збереження налаштувань теми та мови. Це функціональний механізм зберігання, що не відстежує, і дані ніколи не надсилаються на наші сервери.',
    'privacy.cookies.cookies':
      '<strong>Файли cookie:</strong> ми використовуємо файли cookie вашого браузера для збереження налаштувань мови. Це функціональний механізм зберігання, що не відстежується.',
    'privacy.cookies.no_cookies':
      '<strong>Відсутність файлів cookie для відстеження:</strong>  інструмент Vercel Analytics, який ми використовуємо, <strong>не розміщує файли cookie</strong> на вашому пристрої з метою відстеження',
    'privacy.cookies.no_ip':
      '<strong>Відсутність постійного зберігання IP-адреси:</strong> ваша IP-адреса не зберігається. Вона використовується тимчасово для визначення унікального хешу відвідувача (для підрахунку відвідувачів) і незабаром після цього видаляється.',
    'privacy.cookies.no_cross':
      '<strong>Відсутність міжсайтового відстеження:</strong> ми не відстежуємо вашу історію перегляду інших веб-сайтів.',
  },
};
