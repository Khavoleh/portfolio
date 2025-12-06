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
    document.documentElement.classList.add('disable-hover-transitions');

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

    setTimeout(() => {
      document.documentElement.classList.remove('disable-hover-transitions');
    }, 100);
  };

  const setTheme = (theme) => {
    applyTheme(theme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }
  };

  const updateThemeIcon = (theme) => {
    const suffixes = ['-mobile', '-desktop'];

    suffixes.forEach((suffix) => {
      const lightIcon = document.getElementById(`theme-icon-light${suffix}`);
      const darkIcon = document.getElementById(`theme-icon-dark${suffix}`);
      const systemIcon = document.getElementById(`theme-icon-system${suffix}`);

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
    });
  };

  const initThemeSelector = () => {
    const currentTheme = getTheme();
    applyTheme(currentTheme);
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

  initThemeSelector();

  document.addEventListener('astro:page-load', () => {
    if (typeof globalThis !== 'undefined') {
      initThemeSelector();
    }
  });
})();
