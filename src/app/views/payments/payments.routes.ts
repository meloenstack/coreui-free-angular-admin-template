import { PendingComponent } from './remittance/pending/pending.component';
import { RemittanceComponent } from './remittance/remittance.component';
import { PaymentsComponent } from './payments.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: PaymentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'remittance',
        pathMatch: 'full',
      },
      {
        path: 'remittance',
        component: RemittanceComponent,
        children: [
          {
            path: '',
            redirectTo: 'pending',
            pathMatch: 'full',
          },
          {
            path: 'pending',
            component: PendingComponent,
          },
        ],
      },
    ],
  },
];
