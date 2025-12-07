const LANGUAGES = {
  EN: 'en',
  UK: 'uk',
};

const DEFAULT_LANGUAGE = LANGUAGES.EN;
const LANGUAGE_KEY = 'preferred-language';

// Only redirect if we're on the root path without a language prefix
const currentPath = window.location.pathname;
const isRootPath = currentPath === '/' || currentPath === '';

if (isRootPath) {
  const preferredLang = localStorage.getItem(LANGUAGE_KEY);

  if (preferredLang && (preferredLang === LANGUAGES.EN || preferredLang === LANGUAGES.UK)) {
    window.location.href = `/${preferredLang}/`;
  } else {
    const browserLang = navigator.language || navigator.userLanguage;

    if (browserLang.startsWith(LANGUAGES.UK)) {
      window.location.href = `/${LANGUAGES.UK}/`;
    } else {
      window.location.href = `/${DEFAULT_LANGUAGE}/`;
    }
  }
}

function setupLanguageSelector() {
  const languageLinks = document.querySelectorAll('[data-language]');

  languageLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const lang = link.getAttribute('data-language');
      if (lang) {
        localStorage.setItem(LANGUAGE_KEY, lang);
      }
    });
  });
}

setupLanguageSelector();

document.addEventListener('astro:page-load', () => {
  if (typeof globalThis !== 'undefined') {
    setupLanguageSelector();
  }
});
