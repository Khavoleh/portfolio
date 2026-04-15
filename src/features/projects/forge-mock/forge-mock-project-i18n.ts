import type { I18N } from '@shared/interfaces';

export const FORGE_MOCK_PROJECT_I18N: I18N = {
  en: {
    forgeMock_title: 'Forge Mock: Mock Data Platform (Architectural POC)',
    forgeMock_description:
      'A foundational project designed to serve as a comprehensive platform for decoupling front-end and back-end development teams while supporting integration testing in distributed environments. The initial development and architectural setup were completed, establishing a robust framework for future feature implementation.',
    forgeMock_section_0_title: 'Goal',
    forgeMock_section_0_details_0:
      'This project addressed the need for modern development teams to work independently without waiting for API implementations. The architecture was specifically planned to support realistic data scenarios for integration tests and to provide a reliable mocking infrastructure for local development and CI/CD pipelines in distributed systems.',
    forgeMock_section_1_title: 'Technical Solution & Architecture',
    forgeMock_section_1_details_0:
      'A multi-repository architecture was defined and initially implemented, leveraging Next.js for the UI, ASP.NET Web API for the core mocking service logic, and a dedicated monitoring stack with Grafana and Prometheus was set up for future observability. Containerized deployment with Docker ensures consistency across environments.',
    forgeMock_section_2_title: 'Key Architectural Objectives',
    forgeMock_section_2_details_0: 'Schema-driven design for customizable data structures.',
    forgeMock_section_2_details_1: 'Plan for static and dynamic API endpoint mocking with response templating.',
    forgeMock_section_2_details_2: 'Initial setup for real-time monitoring and observability with metrics collection.',
    forgeMock_section_2_details_3: 'Integration of Redis-based caching for high-performance data generation.',
    forgeMock_section_3_title: 'Value & Demonstrated Skill',
    forgeMock_section_3_details_0:
      'This project demonstrates expertise in Distributed Systems Design, selecting a modern, scalable tech stack, and implementing DevOps best practices for monitoring and containerization. It showcases the ability to architect a solution for common microservices pain points: parallel development and integration testing complexity.',
  },
  uk: {
    forgeMock_title: 'Forge Mock: Платформа макетних даних (архітектурний POC)',
    forgeMock_description:
      'Фундаментальний проект, розроблений як комплексна платформа для розмежування команд розробників фронтенду та бекенду, що підтримує інтеграційне тестування в розподілених середовищах. Початкова розробка та архітектурна конфігурація були завершені, що дозволило створити надійну основу для впровадження майбутніх функцій.',
    forgeMock_section_0_title: 'Мета',
    forgeMock_section_0_details_0:
      'Цей проект був спрямований на задоволення потреби сучасних команд розробників у незалежній роботі без очікування на впровадження API. Архітектура була спеціально розроблена для підтримки реалістичних сценаріїв даних для інтеграційних тестів та забезпечення надійної інфраструктури для локальної розробки та CI/CD-процесів у розподілених системах.',
    forgeMock_section_1_title: 'Технічне рішення та архітектура',
    forgeMock_section_1_details_0:
      'Була визначена та спочатку реалізована архітектура з декількома репозиторіями, в якій для інтерфейсу користувача використовувався Next.js, для основної логіки служби моделювання - ASP.NET Web API, а для майбутньої спостережності було налаштовано спеціальний стек моніторингу з Grafana та Prometheus. Контейнеризоване розгортання за допомогою Docker забезпечує узгодженість між середовищами.',
    forgeMock_section_2_title: 'Ключові архітектурні цілі',
    forgeMock_section_2_details_0: 'Дизайн на основі схем для налаштовуваних структур даних.',
    forgeMock_section_2_details_1:
      'План для статичної та динамічної імітації кінцевих точок API з шаблонами відповідей.',
    forgeMock_section_2_details_2:
      'Початкове налаштування для моніторингу в реальному часі та спостережуваності зі збором метрик.',
    forgeMock_section_2_details_3: 'Інтеграція кешування на основі Redis для високопродуктивної генерації даних.',
    forgeMock_section_3_title: 'Цінність та продемонстровані навички',
    forgeMock_section_3_details_0:
      'Цей проект демонструє досвід у проектуванні розподілених систем, виборі сучасного, масштабованого технологічного стеку та впровадженні найкращих практик DevOps для моніторингу та контейнеризації. Він демонструє здатність розробляти рішення для типових проблем мікросервісів: паралельної розробки та складності інтеграційного тестування.',
  },
};
