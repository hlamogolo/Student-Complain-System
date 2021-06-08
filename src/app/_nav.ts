import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Complaints',
    url: '/theme/colors',
    icon: 'cil-bug'
  },
  {
    name: 'Admin',
    url: '/theme/typography',
    icon: 'cil-shield-alt'
  },
  {
    name: 'Reports',
    url: '/buttons',
    icon: 'cil-folder-open'
  },
  {
    name: 'Charts',
    url: '/charts',
    icon: 'cil-chart-line'
  },
  { // Icons
    name: 'Icons',
    url: '/icons',
    icon: 'icon-star',
    children: [
      {
        name: 'CoreUI Icons',
        url: '/icons/coreui-icons',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/icons/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/icons/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/icons/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Log Out',
    url: '/login',
    icon: 'cil-account-logout',
    class: 'mt-auto',
    variant: 'danger',
    attributes: { target: '', rel: 'noopener' }
  },
  {
    name: 'Residence Admin',
    url: '.',
    icon: 'cil-user',
    class: '',
    // attributes: { disabled: true }
  },
];
