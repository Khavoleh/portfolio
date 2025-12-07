import type { Translations } from '@shared/interfaces.ts';

export const PRIVACY_POLICY_TRANSLATIONS: Translations = {
  en: {
    'privacy.title': 'Privacy Policy',
    'privacy.updated': '<strong>Last updated: December 6, 2025</strong>',

    'privacy.intro.title': '1. Introduction',
    'privacy.intro.text':
      'Welcome to my portfolio. I respect your privacy and am committed to protecting your personal data. This privacy policy explains how this website handles your data.',

    'privacy.collect.title': '2. Information We Collect',
    'privacy.collect.text1':
      'This website <strong>does not</strong> collect personal details such as your name, email address, or phone number. There are no account creation features or contact forms that store data.',
    'privacy.collect.text2':
      'However, we store certain preferences on your device for functional purposes and collect automated <strong>Usage Data</strong> via Vercel Web Analytics. This includes:',
    'privacy.collect.technical':
      '<strong>Technical Data:</strong> Information such as browser type, operating system, device type, and approximate geographic location at country level.',
    'privacy.collect.usage': '<strong>Usage Data:</strong> Pages visited, time spent on pages, and referring websites.',
    'privacy.collect.local':
      "<strong>Local Preferences Data:</strong> We store your preferred site theme (e.g., 'dark' or 'light' mode) in your browser's Local Storage. This data is non-personal and is used solely to enhance your user experience.",

    'privacy.use.title': '3. How We Use Your Information',
    'privacy.use.text': 'We collect this non-personal data solely for the following purposes:',
    'privacy.use.monitor': 'To monitor the usage of the portfolio (analytics).',
    'privacy.use.detect': 'To detect, prevent, and address technical issues.',
    'privacy.use.improve': 'To improve the content and layout based on visitor interests.',

    'privacy.cookies.title': '4. Cookies and Tracking',
    'privacy.cookies.text':
      'This website uses <strong>Local Storage for functionality</strong> and <strong>Vercel Web Analytics</strong> for usage monitoring.',
    'privacy.cookies.local':
      "<strong>Local Storage:</strong> We use your browser's Local Storage to save your site theme preference. This is a non-tracking, functional storage mechanism, and the data is never sent to our servers.",
    'privacy.cookies.no_cookies':
      '<strong>No Tracking Cookies:</strong> The Vercel Analytics tool we use <strong>does not place cookies</strong> on your device for tracking purposes.',
    'privacy.cookies.no_ip':
      '<strong>No Persistent IP Storage:</strong> Your IP address is not stored. It is used temporarily to determine a unique visitor hash (for counting visitors) and is discarded shortly after.',
    'privacy.cookies.no_cross':
      '<strong>No Cross-Site Tracking:</strong> We do not track your browsing habits across other websites.',

    'privacy.links.title': '5. Third-Party Links',
    'privacy.links.text':
      'This website may include links to third-party websites (such as GitHub, LinkedIn, or project demos). Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.',

    'privacy.contact.title': '6. Contact and Your Rights',
    'privacy.contact.text1':
      'Although we do not collect personal data, if you believe that any personal information or image belonging to you has been inadvertently included on this website, or if you have any questions about this Privacy Policy, you have the right to request its removal.',
    'privacy.contact.text2': 'Please contact me directly via email at:',
  },
  uk: {
    'privacy.title': 'Політика конфіденційності',
    'privacy.updated': '<strong>Останнє оновлення: 6 грудня 2025 р.</strong>',

    'privacy.intro.title': '1. Вступ',
    'privacy.intro.text':
      'Ласкаво просимо до мого портфоліо. Я поважаю вашу конфіденційність і зобов’язуюсь захищати ваші особисті дані. Ця політика конфіденційності пояснює, як цей веб-сайт обробляє ваші дані.',

    'privacy.collect.title': '2. Інформація, яку ми збираємо',
    'privacy.collect.text1':
      'Цей веб-сайт <strong>не збирає</strong> особисті дані, такі як ваше ім’я, адреса електронної пошти або номер телефону. На сайті немає функцій створення облікового запису або контактних форм, які зберігають дані.',
    'privacy.collect.text2':
      'Однак ми зберігаємо певні налаштування на вашому пристрої для функціональних цілей і збираємо автоматизовані <strong>дані про використання</strong> через Vercel Web Analytics. Це включає:',
    'privacy.collect.technical':
      '<strong>Технічні дані:</strong> інформація, така як тип браузера, операційна система, тип пристрою та приблизне географічне розташування на рівні країни.',
    'privacy.collect.usage':
      '<strong>Дані про використання:</strong> відвідані сторінки, час, проведений на сторінках, та веб-сайти, з яких перейшли на наш сайт.',
    'privacy.collect.local':
      '<strong>Дані локальних налаштувань:</strong> ми зберігаємо ваші улюблені теми сайту (наприклад, «темний» або «світлий» режим) у місцевому сховищі вашого браузера. Ці дані не є особистими і використовуються виключно для покращення вашого користувацького досвіду.',

    'privacy.use.title': '3. Як ми використовуємо вашу інформацію',
    'privacy.use.text': 'Ми збираємо ці неперсональні дані виключно для таких цілей:',
    'privacy.use.monitor': 'Для моніторингу використання портфоліо (аналітика).',
    'privacy.use.detect': 'Для виявлення, запобігання та усунення технічних проблем.',
    'privacy.use.improve': 'Для поліпшення вмісту та макету на основі інтересів відвідувачів.',

    'privacy.cookies.title': '4. Файли Cookie та відстеження',
    'privacy.cookies.text':
      'Цей веб-сайт використовує <strong>локальне сховище для забезпечення функціональності</strong> та <strong>Vercel Web Analytics</strong> для моніторингу використання.',
    'privacy.cookies.local':
      '<strong>Локальне сховище:</strong> ми використовуємо локальне сховище вашого браузера для збереження налаштувань теми. Це функціональний механізм зберігання, що не відстежує, і дані ніколи не надсилаються на наші сервери.',
    'privacy.cookies.no_cookies':
      '<strong>Відсутність файлів cookie для відстеження:</strong>  інструмент Vercel Analytics, який ми використовуємо, <strong>не розміщує файли cookie</strong> на вашому пристрої з метою відстеження',
    'privacy.cookies.no_ip':
      '<strong>Відсутність постійного зберігання IP-адреси:</strong> ваша IP-адреса не зберігається. Вона використовується тимчасово для визначення унікального хешу відвідувача (для підрахунку відвідувачів) і незабаром після цього видаляється.',
    'privacy.cookies.no_cross':
      '<strong>Відсутність міжсайтового відстеження:</strong> ми не відстежуємо вашу історію перегляду інших веб-сайтів.',

    'privacy.links.title': '5. Посилання на сторонні сайти',
    'privacy.links.text':
      'Цей веб-сайт може містити посилання на сторонні веб-сайти (такі як GitHub, LinkedIn або демо-версії проектів). Натискання на ці посилання може дозволити третім сторонам збирати або передавати дані про вас. Ми не контролюємо ці сторонні веб-сайти і не несемо відповідальності за їхні заяви про конфіденційність.',

    'privacy.contact.title': '6. Контакти та ваші права',
    'privacy.contact.text1':
      'Хоча ми не збираємо особисті дані, якщо ви вважаєте, що будь-яка особиста інформація або зображення, що належать вам, були випадково включені на цей веб-сайт, або якщо у вас є будь-які питання щодо цієї Політики конфіденційності, ви маєте право вимагати їх видалення.',
    'privacy.contact.text2': 'Будь ласка, зв’яжіться зі мною безпосередньо через електронну пошту:',
  },
};
