(function () {
  const THEME_OPTIONS = {
    LIGHT: 'light',
    DARK: 'dark',
    SYSTEM: 'system',
  };

  const LOCAL_STORAGE_KEY = 'theme';

  const getTheme = () => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(LOCAL_STORAGE_KEY) || THEME_OPTIONS.SYSTEM;
    }
    return THEME_OPTIONS.SYSTEM;
  };

  const applyTheme = (theme) => {
    if (theme === THEME_OPTIONS.SYSTEM) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add(THEME_OPTIONS.DARK);
      } else {
        document.documentElement.classList.remove(THEME_OPTIONS.DARK);
      }
    } else if (theme === THEME_OPTIONS.DARK) {
      document.documentElement.classList.add(THEME_OPTIONS.DARK);
    } else {
      document.documentElement.classList.remove(THEME_OPTIONS.DARK);
    }
  };

  const setTheme = (theme) => {
    applyTheme(theme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }
  };

  window.__themeManager = {
    THEME_OPTIONS,
    LOCAL_STORAGE_KEY,
    getTheme,
    setTheme,
    applyTheme,
  };

  const currentTheme = getTheme();
  applyTheme(currentTheme);

  document.addEventListener('astro:page-load', () => {
    const savedTheme = getTheme();
    applyTheme(savedTheme);
  });
})();
