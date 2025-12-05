const updateThemeIcon = (theme: string): void => {
  const lightIcon = document.getElementById('theme-icon-light');
  const darkIcon = document.getElementById('theme-icon-dark');
  const systemIcon = document.getElementById('theme-icon-system');

  if (lightIcon && darkIcon && systemIcon) {
    const themeManager = window.__themeManager;
    if (!themeManager) return;

    lightIcon.classList.add('hidden');
    darkIcon.classList.add('hidden');
    systemIcon.classList.add('hidden');

    if (theme === themeManager.THEME_OPTIONS.LIGHT) {
      lightIcon.classList.remove('hidden');
    } else if (theme === themeManager.THEME_OPTIONS.DARK) {
      darkIcon.classList.remove('hidden');
    } else {
      systemIcon.classList.remove('hidden');
    }
  }
};

const initThemeSelector = (): void => {
  const themeManager = window.__themeManager;
  if (!themeManager) {
    console.warn('Theme manager not found. Make sure Layout.astro is loaded.');
    return;
  }

  const currentTheme = themeManager.getTheme();
  updateThemeIcon(currentTheme);

  const themeButtons = document.querySelectorAll('[data-theme]');

  themeButtons.forEach((button) => {
    const newButton = button.cloneNode(true) as HTMLElement;
    button.parentNode?.replaceChild(newButton, button);

    newButton.addEventListener('click', () => {
      const theme = newButton.dataset.theme;
      if (theme) {
        themeManager.setTheme(theme);
        updateThemeIcon(theme);
      }
    });
  });
};

document.addEventListener('astro:page-load', () => {
  if (typeof globalThis !== 'undefined') {
    initThemeSelector();
  }
});
