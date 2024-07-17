import { PendingComponent } from './pending/pending.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemittanceComponent } from './remittance.component';

const routes: Routes = [
  {
    path: '',
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
      // {
      //   path: 'for-payout',
      //   loadComponent: () =>
      //     import('./for-payout/for-payout.component').then(
      //       (m) => m.ForPayoutComponent
      //     ),
      // },
      // {
      //   path: 'paid-out',
      //   loadComponent: () =>
      //     import('./paid-out/paid-out.component').then((m) => m.PaidOutComponent),
      // },
      // {
      //   path: 'all',
      //   loadComponent: () =>
      //     import('./all/all.component').then((m) => m.AllComponent),
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemittanceRoutingModule {}
