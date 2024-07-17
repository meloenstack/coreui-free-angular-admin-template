import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./payments.component').then((m) => m.PaymentsComponent),
    children: [
      {
        path: '',
        redirectTo: 'remittance',
        pathMatch: 'full',
      },
      {
        path: 'remittance',
        loadComponent: () =>
          import('./remittance/remittance.component').then(
            (m) => m.RemittanceComponent
          ),
      },
    ],
  },
];
