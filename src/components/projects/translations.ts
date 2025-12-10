import type { Translations } from '@shared/interfaces.ts';

export const PROJECTS_INTRO_TRANSLATIONS: Translations = {
  en: {
    'intro.title.highlight1': 'Open Source, Architecture',
    'intro.title.and': ', and',
    'intro.title.highlight2': 'Full-Stack Implementation',
    'intro.description':
      'While my professional experience is detailed in the <span class="text-blue-600 dark:text-blue-400">Career Timeline</span>, this section provides an in-depth view of my technical ownership and architectural decisions across my personal and open-source projects.',
  },
  uk: {
    'intro.title.highlight1': 'Відкритий код, архітектура',
    'intro.title.and': ' і',
    'intro.title.highlight2': 'Full-Stack реалізація',
    'intro.description':
      'Хоча мій професійний досвід детально описаний на сторінці <span class="text-blue-600 dark:text-blue-400">Досвід</span>, цей розділ надає детальний огляд моїх технічних рішень та архітектурних рішень у моїх особистих та відкритих проектах.',
  },
};

export const PORTFOLIO_PROJECT_TRANSLATIONS: Translations = {
  en: {
    'portfolio.title': 'Portfolio',
    'portfolio.description':
      'A highly accessible, professional portfolio showcasing commitment to Core Web Vitals and superior web performance.',
    'portfolio.section.0.title': 'The Goal',
    'portfolio.section.0.details.0':
      'A portfolio that practices what I preach: optimal performance, accessibility, and modern development practices. The site needed to load instantly, work perfectly for all users, and demonstrate expertise in contemporary front-end tooling.',
    'portfolio.section.1.title': 'Technical Approach',
    'portfolio.section.1.details.0':
      'Built with Astro for low-count client-side JavaScript. Utilized Vercel for hosting and Continuous Delivery with automatic deployments. Styled with Tailwind CSS and Flowbite components for rapid, consistent UI development.',
    'portfolio.section.2.title': 'Key Features',
    'portfolio.section.2.details.0': 'Dark/light mode switch with system preference detection',
    'portfolio.section.2.details.1': 'Component-driven architecture with reusable blocks',
    'portfolio.section.2.details.2': 'Internationalization with 2 languages support',
    'portfolio.section.2.details.3': 'Fully responsive design',
    'portfolio.section.3.title': 'Why It Matters to Enterprise',
    'portfolio.section.3.details.0':
      'Demonstrates up-to-date knowledge of modern front-end performance optimization, familiarity with contemporary deployment practices, and commitment to UI/UX best practices.',
    'portfolio.performance.title': 'Lighthouse Performance Proof',
    'portfolio.performance.note': 'Perfect Lighthouse scores across all categories (Desktop & Mobile)',
    'portfolio.performance.metrics.0': 'Performance',
    'portfolio.performance.metrics.1': 'Accessibility',
    'portfolio.performance.metrics.2': 'Best Practices',
    'portfolio.performance.metrics.3': 'SEO',
  },
  uk: {
    'portfolio.title': 'Портфоліо',
    'portfolio.description':
      'Високо доступне, професійне портфоліо, що демонструє прихильність Core Web Vitals та чудову продуктивність.',
    'portfolio.section.0.title': 'Мета',
    'portfolio.section.0.details.0':
      'Портфоліо, яке втілює те, про що я говорю: оптимальна продуктивність, доступність та сучасні практики розробки. Сайт мав миттєво завантажуватися, бездоганно працювати для всіх користувачів та демонструвати досвід у використанні сучасних інструментів фронтенд-розробки.',
    'portfolio.section.1.title': 'Технічний підхід',
    'portfolio.section.1.details.0':
      'Створено за допомогою Astro для JavaScript з малою кількістю клієнтських операцій. Використано Vercel для хостингу та безперервної доставки з автоматичним розгортанням. Стилізовано за допомогою Tailwind CSS та компонентів Flowbite для швидкої та послідовної розробки інтерфейсу користувача.',
    'portfolio.section.2.title': 'Ключові функції',
    'portfolio.section.2.details.0': 'Перемикач темної/світлої теми з визначенням системних налаштувань',
    'portfolio.section.2.details.1': 'Компонентна архітектура з повторно використовуваними блоками',
    'portfolio.section.2.details.2': 'Інтернаціоналізація з підтримкою 2-х мов',
    'portfolio.section.2.details.3': 'Повністю адаптивний дизайн',
    'portfolio.section.3.title': 'Чому це важливо для підприємства',
    'portfolio.section.3.details.0':
      'Демонструє актуальні знання в області оптимізації продуктивності сучасних інтерфейсів, обізнаність із сучасними практиками розгортання та відданість найкращим практикам UI/UX.',
    'portfolio.performance.title': 'Доказ продуктивності Lighthouse',
    'portfolio.performance.note':
      'Ідеальні показники Lighthouse за всіма категоріями (настільні компʼютери й мобільні пристрої)',
    'portfolio.performance.metrics.0': 'Продуктивність',
    'portfolio.performance.metrics.1': 'Доступність',
    'portfolio.performance.metrics.2': 'Найкращі практики',
    'portfolio.performance.metrics.3': 'SEO',
  },
};

export const FORGE_MOCK_PROJECT_TRANSLATIONS: Translations = {
  en: {
    'forgeMock.title': 'Forge Mock: Mock Data Platform (Architectural POC)',
    'forgeMock.description':
      'A foundational project designed to serve as a comprehensive platform for decoupling front-end and back-end development teams while supporting integration testing in distributed environments. The initial development and architectural setup were completed, establishing a robust framework for future feature implementation.',
    'forgeMock.section.0.title': 'Goal',
    'forgeMock.section.0.details.0':
      'This project addressed the need for modern development teams to work independently without waiting for API implementations. The architecture was specifically planned to support realistic data scenarios for integration tests and to provide a reliable mocking infrastructure for local development and CI/CD pipelines in distributed systems.',
    'forgeMock.section.1.title': 'Technical Solution & Architecture',
    'forgeMock.section.1.details.0':
      'A multi-repository architecture was defined and initially implemented, leveraging Next.js for the UI, ASP.NET Web API for the core mocking service logic, and a dedicated monitoring stack with Grafana and Prometheus was set up for future observability. Containerized deployment with Docker ensures consistency across environments.',
    'forgeMock.section.2.title': 'Key Architectural Objectives',
    'forgeMock.section.2.details.0': 'Schema-driven design for customizable data structures.',
    'forgeMock.section.2.details.1': 'Plan for static and dynamic API endpoint mocking with response templating.',
    'forgeMock.section.2.details.2':
      'Initial setup for real-time monitoring and observability with metrics collection.',
    'forgeMock.section.2.details.3': 'Integration of Redis-based caching for high-performance data generation.',
    'forgeMock.section.3.title': 'Value & Demonstrated Skill',
    'forgeMock.section.3.details.0':
      'This project demonstrates expertise in Distributed Systems Design, selecting a modern, scalable tech stack, and implementing DevOps best practices for monitoring and containerization. It showcases the ability to architect a solution for common microservices pain points: parallel development and integration testing complexity.',
  },
  uk: {
    'forgeMock.title': 'Forge Mock: Платформа макетних даних (архітектурний POC)',
    'forgeMock.description':
      'Фундаментальний проект, розроблений як комплексна платформа для розмежування команд розробників фронтенду та бекенду, що підтримує інтеграційне тестування в розподілених середовищах. Початкова розробка та архітектурна конфігурація були завершені, що дозволило створити надійну основу для впровадження майбутніх функцій.',
    'forgeMock.section.0.title': 'Мета',
    'forgeMock.section.0.details.0':
      'Цей проект був спрямований на задоволення потреби сучасних команд розробників у незалежній роботі без очікування на впровадження API. Архітектура була спеціально розроблена для підтримки реалістичних сценаріїв даних для інтеграційних тестів та забезпечення надійної інфраструктури для локальної розробки та CI/CD-процесів у розподілених системах.',
    'forgeMock.section.1.title': 'Технічне рішення та архітектура',
    'forgeMock.section.1.details.0':
      'Була визначена та спочатку реалізована архітектура з декількома репозиторіями, в якій для інтерфейсу користувача використовувався Next.js, для основної логіки служби моделювання - ASP.NET Web API, а для майбутньої спостережності було налаштовано спеціальний стек моніторингу з Grafana та Prometheus. Контейнеризоване розгортання за допомогою Docker забезпечує узгодженість між середовищами.',
    'forgeMock.section.2.title': 'Ключові архітектурні цілі',
    'forgeMock.section.2.details.0': 'Дизайн на основі схем для налаштовуваних структур даних.',
    'forgeMock.section.2.details.1':
      'План для статичної та динамічної імітації кінцевих точок API з шаблонами відповідей.',
    'forgeMock.section.2.details.2':
      'Початкове налаштування для моніторингу в реальному часі та спостережуваності зі збором метрик.',
    'forgeMock.section.2.details.3': 'Інтеграція кешування на основі Redis для високопродуктивної генерації даних.',
    'forgeMock.section.3.title': 'Цінність та продемонстровані навички',
    'forgeMock.section.3.details.0':
      'Цей проект демонструє досвід у проектуванні розподілених систем, виборі сучасного, масштабованого технологічного стеку та впровадженні найкращих практик DevOps для моніторингу та контейнеризації. Він демонструє здатність розробляти рішення для типових проблем мікросервісів: паралельної розробки та складності інтеграційного тестування.',
  },
};

export const PROJECT_COMPONENTS_TRANSLATIONS: Translations = {
  en: {
    'components.techStack.title': 'Technical Stack',
    'components.github.button': 'Source Code',
  },
  uk: {
    'components.techStack.title': 'Використані технології',
    'components.github.button': 'Вихідний код',
  },
};
