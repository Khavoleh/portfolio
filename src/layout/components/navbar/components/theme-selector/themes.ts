import ComputerIcon from './icons/computer.svg';
import MoonIcon from './icons/moon.svg';
import SunIcon from './icons/sun.svg';
import type { Theme } from './theme';

const THEME_OPTIONS = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

export const THEMES: Theme[] = [
  { id: THEME_OPTIONS.LIGHT, icon: SunIcon },
  { id: THEME_OPTIONS.DARK, icon: MoonIcon },
  { id: THEME_OPTIONS.SYSTEM, icon: ComputerIcon },
];
