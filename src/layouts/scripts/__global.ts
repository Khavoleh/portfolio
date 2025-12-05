import type { THEME_OPTIONS, getTheme, setTheme, applyTheme } from './theme-manager';

declare global {
  interface Window {
    __themeManager: {
      THEME_OPTIONS: typeof THEME_OPTIONS;
      LOCAL_STORAGE_KEY: string;
      getTheme: typeof getTheme;
      setTheme: typeof setTheme;
      applyTheme: typeof applyTheme;
    };
  }

  function initFlowbite(): void;
}
