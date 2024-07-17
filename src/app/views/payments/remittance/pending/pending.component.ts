import { Payments } from './../../interface/payments.interface';
import { PaymentsService } from '../../payments.service';
import { Component, OnInit } from '@angular/core';
import { TableModule, Table } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    DropdownModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  providers: [PaymentsService],
})
export class PendingComponent implements OnInit {
  payments!: Payments[];

  representatives!: Representative[];

  order_statuses: string[] = ['Pending', 'Completed', 'Rejected', 'Cancelled'];
  withdrawal_statuses: string[] = [
    'Pending',
    'Completed',
    'Rejected',
    'Cancelled',
  ];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(private paymentsService: PaymentsService) {}

  ngOnInit() {
    this.paymentsService.getData().then((payments) => {
      this.payments = payments;
      this.loading = false;

      // this.payments.forEach(
      //   (payment) => (payment.date_created = new Date(<Date>customer.date))
      // );
    });
  }

  clear(table: Table) {
    table.clear();
  }

  getSeverity(status: string) {
    switch (status) {
      case 'Pending':
        return 'warning';
      case 'Completed':
        return 'success';
      case 'Rejected':
        return 'danger';
      case 'Cancelled':
        return 'danger';
      default:
        return 'success';
    }
  }
}
