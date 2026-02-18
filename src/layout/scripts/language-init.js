const LANG = {
  EN: 'en',
  UK: 'uk',
  STORAGE_KEY: 'preferred-language',
};

const DEFAULT_LANG = LANG.EN;
const SUPPORTED_LANGS = [LANG.EN, LANG.UK];

const isValidLang = (lang) => SUPPORTED_LANGS.includes(lang);

const getBrowserLang = () => {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith(LANG.UK) ? LANG.UK : DEFAULT_LANG;
};

const getPreferredLang = () => {
  const stored = localStorage.getItem(LANG.STORAGE_KEY);
  return stored && isValidLang(stored) ? stored : getBrowserLang();
};

const redirectToLang = (lang) => {
  window.location.href = `/${lang}/`;
};

const handleRootRedirect = () => {
  const { pathname } = window.location;
  const isRoot = pathname === '/' || pathname === '';

  if (isRoot) {
    redirectToLang(getPreferredLang());
  }
};

handleRootRedirect();
document.addEventListener('astro:page-load', handleRootRedirect);
