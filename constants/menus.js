// Menus
const MENUS = [
  {
    name: 'getstarted',
    as: 'a',
    href: '/page/getstart',
    label: 'Getting Started',
    icon: 'fas fa-chart-pie',
  },
  {
    name: 'templates',
    as: 'a',
    href: '/card/templates',
    label: 'Templates',
    icon: 'fas fa-clone',
  },

  {
    name: 'byod',
    as: 'a',
    href: '/form/byod',
    label: 'Bring Your data',
    icon: 'fas fa-database',
  },
  {
    name: 'metrics',
    as: 'a',
    href: '/dashboard/metrics',
    label: 'Metrics',
    icon: 'fas fa-chart-pie',
  },
  {
    name: 'comingSoon',
    as: 'a',
    href: '/card/comingSoon',
    label: 'Coming Soon',
    icon: 'fas fa-bolt',
  },
];
// Sub menus
const SUBMENUS = [
  {
    name: 'login',
    as: 'a',
    href: '/page/login',
    label: 'Login',
    icon: '',
  },
];

export { MENUS, SUBMENUS };
