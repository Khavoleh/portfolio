const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
  STORAGE_KEY: 'theme',
  ATTRIBUTE_NAME: 'data-theme',
  TRANSITION_CLASS: 'switch-theme-transition',
  TRANSITION_DURATION: 1000,
};

const THEME_VALUES = {
  [THEME.LIGHT]: 'portfolio-light',
  [THEME.DARK]: 'portfolio-dark',
};

const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME.DARK : THEME.LIGHT);

const resolveTheme = (theme) => (theme === THEME.SYSTEM ? getSystemTheme() : theme);

const applyTheme = (theme) => {
  const resolved = resolveTheme(theme);
  document.documentElement.setAttribute(THEME.ATTRIBUTE_NAME, THEME_VALUES[resolved]);
};

const setTheme = (theme) => {
  const root = document.documentElement;

  root.classList.add(THEME.TRANSITION_CLASS);
  applyTheme(theme);
  localStorage?.setItem(THEME.STORAGE_KEY, theme);

  setTimeout(() => root.classList.remove(THEME.TRANSITION_CLASS), THEME.TRANSITION_DURATION);
};

const updateThemeIcon = (theme) => {
  const icons = {
    light: document.getElementById('theme-icon-light'),
    dark: document.getElementById('theme-icon-dark'),
    system: document.getElementById('theme-icon-system'),
  };

  Object.values(icons).forEach((icon) => {
    icon?.classList.add('hidden');
  });
  icons[theme]?.classList.remove('hidden');
};

const attachThemeListeners = () => {
  document.querySelectorAll('[data-set-theme]').forEach((button) => {
    if (button.dataset.themeBound === 'true') return;
    button.dataset.themeBound = 'true';

    button.addEventListener('click', () => {
      const theme = button.dataset.setTheme;
      if (theme) {
        setTheme(theme);
        updateThemeIcon(theme);
      }
    });
  });
};

const initThemeSelector = () => {
  const currentTheme = localStorage?.getItem(THEME.STORAGE_KEY) || THEME.SYSTEM;
  applyTheme(currentTheme);
  updateThemeIcon(currentTheme);
  attachThemeListeners();
};

initThemeSelector();
document.addEventListener('astro:page-load', initThemeSelector);
