const updateThemeIcon = (theme: string): void => {
  const lightIcon: HTMLElement | null = document.getElementById('theme-icon-light');
  const darkIcon: HTMLElement | null = document.getElementById('theme-icon-dark');
  const systemIcon: HTMLElement | null = document.getElementById('theme-icon-system');

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
    return;
  }

  const currentTheme = themeManager.getTheme();
  updateThemeIcon(currentTheme);

  const themeButtons: NodeListOf<Element> = document.querySelectorAll('[data-theme]');

  themeButtons.forEach((button: Element): void => {
    const newButton = button.cloneNode(true) as HTMLElement;
    button.parentNode?.replaceChild(newButton, button);

    newButton.addEventListener('click', (): void => {
      const theme: string | undefined = newButton.dataset.theme;
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
