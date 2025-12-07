import type { Translations } from '@shared/interfaces.ts';

export const EXPERIENCE_INTRO_TRANSLATIONS: Translations = {
  en: {
    'intro.title.years': '3+ Years',
    'intro.title.subtitle': 'of End-to-End Development:',
    'intro.title.highlight': 'Architecture, Optimization, and Leadership',
    'intro.description':
      'I convert <span class="font-semibold text-blue-600 dark:text-blue-400">complex business requirements</span> into robust, high-performance .NET systems. Each role detailed below outlines the challenges, the <span class="font-semibold text-blue-600 dark:text-blue-400">architectural patterns chosen</span>, and the <span class="font-semibold text-blue-600 dark:text-blue-400">measurable results</span> of my work.',
  },
  uk: {
    'intro.title.years': '3+ роки',
    'intro.title.subtitle': 'комплексної розробки:',
    'intro.title.highlight': 'Архітектура, оптимізація та лідерство',
    'intro.description':
      'Я перетворюю <span class="font-semibold text-blue-600 dark:text-blue-400">складні бізнес-вимоги</span> в надійні, високопродуктивні .NET системи. У кожній з наведених нижче ролей описано завдання, <span class="font-semibold text-blue-600 dark:text-blue-400">обрані архітектурні шаблони</span> та <span class="font-semibold text-blue-600 dark:text-blue-400">вимірювані результати</span> моєї роботи.',
  },
};

export const EXPERIENCE_DATA_TRANSLATIONS: Translations = {
  en: {
    'experience.0.role': 'Full-Stack .NET/React Developer',
    'experience.0.company': 'Bliscore Software',
    'experience.0.sector': 'Telecommunications Analytics Project',
    'experience.0.section.0.title': 'Call Analysis Platform Architecture',
    'experience.0.section.0.details':
      "I actively participated in the design and implementation of a new, scalable microservice architecture for the call analysis platform. This strategic decision significantly improved the platform's ability to handle large data volumes and simplified the integration of new analytical features.",
    'experience.0.section.1.title': '5x+ Dashboard Optimization',
    'experience.0.section.1.details':
      'I performed a complete migration of visualizations from Power BI to native charting components while simultaneously optimizing the database structure. This involved redesigning data retrieval using optimized, native SQL queries, which drastically improved query execution speed and reduced server load. Through front-end rendering optimizations, we achieved an overall 5x+ increase in dashboard responsiveness and efficiency.',
    'experience.0.section.2.title': 'Leadership & Workflow Organization',
    'experience.0.section.2.details':
      'I successfully led a team of up to 6 developers, ensuring clear organization of the workflow and strict adherence to project timelines. My responsibilities included writing detailed technical documentation and business requirements, which guaranteed the timely and high-quality delivery of the final product features.',

    'experience.1.role': 'Full-Stack .NET/Angular Developer',
    'experience.1.company': 'Lviv Polytechnic National University',
    'experience.1.sector': 'Internal Workflow Automation System',
    'experience.1.section.0.title': 'Ground-Up Scalable System Architecture',
    'experience.1.section.0.details':
      'I designed the entire architecture for a new information system from scratch, prioritizing scalability and long-term maintainability. This ensures the system can efficiently handle growing user load and simplifies the future integration of new functional modules.',
    'experience.1.section.1.title': 'Scrum Framework Implementation',
    'experience.1.section.1.details':
      'I initiated the adoption of the Scrum framework and actively facilitated its use within the development team. This led to a significant improvement in feature delivery efficiency and enhanced internal team communication.',
    'experience.1.section.2.title': 'Full CI/CD Setup',
    'experience.1.section.2.details':
      'Established the complete Continuous Integration/Continuous Delivery (CI/CD) infrastructure, leveraging Docker for containerization and Azure Pipelines for process automation. This enabled fast, reliable, and seamless code deployment across all environments.',
  },
  uk: {
    'experience.0.role': 'Full-Stack .NET/React розробник',
    'experience.0.company': 'Bliscore Software',
    'experience.0.sector': 'Проєкт з аналізу телекомунікацій',
    'experience.0.section.0.title': 'Архітектура платформи аналізу викликів',
    'experience.0.section.0.details':
      'Я брав активну участь у розробці та впровадженні нової, масштабованої архітектури мікросервісів для платформи аналізу дзвінків. Це стратегічне рішення значно покращило здатність платформи обробляти великі обсяги даних та спростило інтеграцію нових аналітичних функцій.',
    'experience.0.section.1.title': 'Оптимізація інформаційної панелі у 5+ разів',
    'experience.0.section.1.details':
      'Я виконав повну міграцію графіків з Power BI на власні компоненти діаграм, одночасно оптимізуючи структуру бази даних. Це передбачало перепроектування вилучення даних за допомогою оптимізованих власних SQL-запитів, що значно покращило швидкість виконання запитів і зменшило навантаження на сервер. Завдяки оптимізації рендерингу інтерфейсу ми досягли загального збільшення швидкості реагування та ефективності інформаційної панелі в 5+ разів.',
    'experience.0.section.2.title': 'Лідерство та організація робочого процесу',
    'experience.0.section.2.details':
      "Я успішно керував командою з 6 розробників, забезпечуючи чітку організацію робочого процесу та суворе дотримання термінів реалізації проектів. У мій обов'язок входило складання детальної технічної документації та бізнес-вимог, що гарантувало своєчасну та якісну реалізацію функціональних можливостей кінцевого продукту.",

    'experience.1.role': 'Full-Stack .NET/Angular розробник',
    'experience.1.company': 'Національний університет "Львівська політехніка"',
    'experience.1.sector': 'Система автоматизації внутрішніх робочих процесів',
    'experience.1.section.0.title': 'Масштабована архітектура системи з нуля',
    'experience.1.section.0.details':
      'Я розробив всю архітектуру нової інформаційної системи з нуля, надавши пріоритет масштабованості та довгостроковій підтримці. Це гарантує, що система зможе ефективно обробляти зростаюче навантаження користувачів та спрощує майбутню інтеграцію нових функціональних модулів.',
    'experience.1.section.1.title': 'Впровадження Scrum фреймворку',
    'experience.1.section.1.details':
      'Я ініціював впровадження методології Scrum і активно сприяв її використанню в команді розробників. Це призвело до значного підвищення ефективності реалізації функціональних можливостей і поліпшення внутрішньої комунікації в команді.',
    'experience.1.section.2.title': 'Повне налаштування CI/CD',
    'experience.1.section.2.details':
      'Створив повну інфраструктуру безперервної інтеграції/безперервної доставки (CI/CD), використовуючи Docker для контейнеризації та Azure Pipelines для автоматизації процесів. Це забезпечило швидке, надійне та безперебійне розгортання коду в усіх середовищах.',
  },
};

export const CALL_TO_ACTION_TRANSLATIONS: Translations = {
  en: {
    'cta.title': 'Ready to see these principles in action in open source code?',
    'cta.button.projects': 'View Projects',
  },
  uk: {
    'cta.title': 'Готові побачити ці принципи в дії у відкритому коді?',
    'cta.button.projects': 'Переглянути проєкти',
  },
};
