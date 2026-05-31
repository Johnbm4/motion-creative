export type NavView =
  | 'home'
  | 'about'
  | 'work'
  | 'contact'
  | 'case-study'
  | 'production'
  | 'events'
  | 'marketing';

export interface NavItemConfig {
  id: NavView;
  label: string;
  subtitle: string;
}

export const navItems: NavItemConfig[] = [
  { id: 'home', label: 'World', subtitle: 'The experience' },
  { id: 'about', label: 'Studio', subtitle: 'Who we are' },
  { id: 'work', label: 'Work', subtitle: 'Selected projects' },
  { id: 'contact', label: 'Contact', subtitle: 'Start a conversation' },
];
