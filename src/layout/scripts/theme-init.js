(() => {
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
    const root = document.documentElement;

    if (theme === THEME_OPTIONS.SYSTEM) {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        root.setAttribute('data-theme', 'portfolio-dark');
      } else {
        root.setAttribute('data-theme', 'portfolio-light');
      }
    } else if (theme === THEME_OPTIONS.DARK) {
      root.setAttribute('data-theme', 'portfolio-dark');
    } else {
      root.setAttribute('data-theme', 'portfolio-light');
    }
  };

  const setTheme = (theme) => {
    const root = document.documentElement;
    root.classList.add('switch-theme-transition');

    applyTheme(theme);

    setTimeout(() => root.classList.remove('switch-theme-transition'), 1000);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }
  };

  const updateThemeIcon = (theme) => {
    const lightIcon = document.getElementById(`theme-icon-light`);
    const darkIcon = document.getElementById(`theme-icon-dark`);
    const systemIcon = document.getElementById(`theme-icon-system`);

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
    applyTheme(currentTheme);
    updateThemeIcon(currentTheme);

    const themeButtons = document.querySelectorAll('[data-set-theme]');

    themeButtons.forEach((button) => {
      const newButton = button.cloneNode(true);
      button.parentNode?.replaceChild(newButton, button);

      newButton.addEventListener('click', () => {
        const theme = newButton.dataset.setTheme;
        if (theme) {
          setTheme(theme);
          updateThemeIcon(theme);
        }
      });
    });
  };

  initThemeSelector();

  document.addEventListener('astro:page-load', () => {
    if (typeof globalThis !== 'undefined') {
      initThemeSelector();
    }
  });
})();
