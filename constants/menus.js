// Menus
const MENUS = [
  {
    name: 'profile',
    as: 'a',
    href: '/page/profile',
    label: 'Getting Started',
    icon: 'fas fa-chart-pie',
  },
  {
    name: 'employees',
    as: 'a',
    href: '/card/employees',
    label: 'Templates',
    icon: 'fas fa-clone',
  },

  {
    name: 'buttons',
    as: 'a',
    href: '/form/buttons',
    label: 'Bring Your data',
    icon: 'fas fa-database',
  },
  {
    name: 'dashboard',
    as: 'a',
    href: '/dashboard/dashboard',
    label: 'Metrics',
    icon: 'fas fa-chart-pie',
  },
  {
    name: 'interactivechat',
    as: 'a',
    href: '/chat/interactivechat',
    label: 'Coming Soon',
    icon: 'fas fa-comments',
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
