import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Payments',
    url: '/payments',
    iconComponent: { name: 'cil-layers' },
    children: [
      {
        name: 'Remittance',
        url: '/payments/remittance',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Manual Adjustments',
        url: '/payments/manual-adjustments',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Manual Deductions',
        url: '/payments/manual-deductions',
        icon: 'nav-icon-bullet',
      },
      {
        name: 'Daily Withdrawal',
        url: '/payments/daily-withdrawal',
        icon: 'nav-icon-bullet',
      },
    ],
  },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   iconComponent: { name: 'cil-cursor' },
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Button groups',
  //       url: '/buttons/button-groups',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'nav-icon-bullet',
  //     },
  //   ],
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   iconComponent: { name: 'cil-notes' },
  //   children: [
  //     {
  //       name: 'Form Control',
  //       url: '/forms/form-control',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Select',
  //       url: '/forms/select',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Checks & Radios',
  //       url: '/forms/checks-radios',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Range',
  //       url: '/forms/range',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Input Group',
  //       url: '/forms/input-group',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Floating Labels',
  //       url: '/forms/floating-labels',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Layout',
  //       url: '/forms/layout',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation',
  //       icon: 'nav-icon-bullet',
  //     },
  //   ],
  // },
  // {
  //   name: 'Charts',
  //   iconComponent: { name: 'cil-chart-pie' },
  //   url: '/charts',
  // },
  // {
  //   name: 'Icons',
  //   iconComponent: { name: 'cil-star' },
  //   url: '/icons',
  //   children: [
  //     {
  //       name: 'CoreUI Free',
  //       url: '/icons/coreui-icons',
  //       icon: 'nav-icon-bullet',
  //       badge: {
  //         color: 'success',
  //         text: 'FREE',
  //       },
  //     },
  //     {
  //       name: 'CoreUI Flags',
  //       url: '/icons/flags',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'CoreUI Brands',
  //       url: '/icons/brands',
  //       icon: 'nav-icon-bullet',
  //     },
  //   ],
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   iconComponent: { name: 'cil-bell' },
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Modal',
  //       url: '/notifications/modal',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Toast',
  //       url: '/notifications/toasts',
  //       icon: 'nav-icon-bullet',
  //     },
  //   ],
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   iconComponent: { name: 'cil-calculator' },
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/login',
  //   iconComponent: { name: 'cil-star' },
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'nav-icon-bullet',
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'nav-icon-bullet',
  //     },
  //   ],
  // },
  // {
  //   title: true,
  //   name: 'Links',
  //   class: 'mt-auto',
  // },
  // {
  //   name: 'Docs',
  //   url: 'https://coreui.io/angular/docs/5.x/',
  //   iconComponent: { name: 'cil-description' },
  //   attributes: { target: '_blank' },
  // },
];
