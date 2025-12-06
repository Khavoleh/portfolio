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

  const updateThemeIcon = (theme) => {
    const lightIcon = document.getElementById('theme-icon-light');
    const darkIcon = document.getElementById('theme-icon-dark');
    const systemIcon = document.getElementById('theme-icon-system');

    if (lightIcon && darkIcon && systemIcon) {
      lightIcon.classList.add('hidden');
      darkIcon.classList.add('hidden');
      systemIcon.classList.add('hidden');

      if (theme === THEME_OPTIONS.LIGHT) {
        lightIcon.classList.remove('hidden');
      } else if (theme === THEME_OPTIONS.DARK) {
        darkIcon.classList.remove('hidden');
      } else {
        systemIcon.classList.remove('hidden');
      }
    }
  };

  const initThemeSelector = () => {
    const currentTheme = getTheme();
    updateThemeIcon(currentTheme);

    const themeButtons = document.querySelectorAll('[data-theme]');

    themeButtons.forEach((button) => {
      const newButton = button.cloneNode(true);
      button.parentNode?.replaceChild(newButton, button);

      newButton.addEventListener('click', () => {
        const theme = newButton.dataset.theme;
        if (theme) {
          setTheme(theme);
          updateThemeIcon(theme);
        }
      });
    });
  };

  const currentTheme = getTheme();
  applyTheme(currentTheme);

  document.addEventListener('astro:page-load', () => {
    if (typeof globalThis !== 'undefined') {
      initThemeSelector();
    }
  });
})();
