import { Payments } from './../../interface/payments.interface';
import { PaymentsService } from '../../payments.service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { Calendar, CalendarModule } from 'primeng/calendar';
import { FilterService } from 'primeng/api';
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
  styleUrl: './pending.component.scss',
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
    CalendarModule,
  ],
  providers: [PaymentsService],
})
export class PendingComponent implements OnInit {
  payments!: Payments[];
  dateRange: Date[] = [];
  representatives!: Representative[];
  @ViewChild('dt2') dt2!: Table;
  order_statuses: string[] = ['Pending', 'Completed', 'Rejected', 'Cancelled'];
  withdrawal_statuses: string[] = [
    'Pending',
    'Completed',
    'Rejected',
    'Cancelled',
  ];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(
    private paymentsService: PaymentsService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.paymentsService.getData().then((payments) => {
      this.payments = payments.map((payment) => {
        return {
          ...payment,
          date_created_1: payment.date_created,
        };
      });
      this.loading = false;
      console.log('MARKER', this.payments);
    });
    this.filterService.register(
      'custom',
      (value: any, filter: any): boolean => {
        if (filter === undefined || filter === null || filter === '') {
          return true;
        }
        if (value === undefined || value === null) {
          return false;
        }
        console.log('MARKER', value, filter);
        return value === filter;
      }
    );
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
  // onDateRangeSelect(event: any) {
  //   if (this.dateRange && this.dateRange.length === 2) {
  //     const startDate = this.dateRange[0];
  //     const endDate = this.dateRange[1];
  //     console.log('MARKER', startDate, endDate);
  //     this.dt2.filterGlobal(event.target.value, 'dateRange');
  //   } else {
  //     // Clear filter if date range is not selected
  //     this.dt2.filterGlobal(null, 'dateRange');
  //   }
  // }

  // customDateRangeFilter(startDate: Date, endDate: Date, value: any): boolean {
  //   if (!value) {
  //     return true; // Show all rows if value is null (no filter)
  //   }
  //   console.log('CALLED', value);
  //   const date = new Date(value.date_created); // Adjust 'date_created' to your actual date field
  //   return date >= startDate && date <= endDate;
  // }

  getDateRangeFilter() {
    if (this.dateRange && this.dateRange.length === 2) {
      const startDate = this.dateRange[0];
      const endDate = this.dateRange[1];
      return (value: any) => {
        if (!value) {
          return true; // Show all rows if value is null (no filter)
        }
        const date = new Date(value.date_created); // Adjust 'date_created' to your actual date field
        return date >= startDate && date <= endDate;
      };
    } else {
      return null;
    }
  }
}
