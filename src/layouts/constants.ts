interface NavLink {
  href: string;
  label: string;
  isActive: boolean;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { href: '/', label: 'Home', isActive: true },
  { href: '#experience', label: 'Experience', isActive: false },
  { href: '#projects', label: 'Projects', isActive: false },
  { href: '#contact', label: 'Contact', isActive: false },
];
