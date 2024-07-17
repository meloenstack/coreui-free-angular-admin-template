import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentsService {
  // insert API service here
  fetchData() {
    return [
      {
        date_created: '2022-01-01',
        user_id: 1,
        order_id: 1001,
        payment_channel: 'PayPal',
        order_status: 'Completed',
        withdrawal_status: 'Pending',
        order_amount: 50.99,
        payout_type: 'Bank Transfer',
        total_withdrawal: 0,
      },
      {
        date_created: '2022-01-02',
        user_id: 2,
        order_id: 1002,
        payment_channel: 'Stripe',
        order_status: 'Pending',
        withdrawal_status: 'Pending',
        order_amount: 25.99,
        payout_type: 'PayPal',
        total_withdrawal: 0,
      },
      {
        date_created: '2022-01-03',
        user_id: 3,
        order_id: 1003,
        payment_channel: 'PayPal',
        order_status: 'Completed',
        withdrawal_status: 'Completed',
        order_amount: 10.99,
        payout_type: 'Bank Transfer',
        total_withdrawal: 10.99,
      },
      {
        date_created: '2022-01-04',
        user_id: 4,
        order_id: 1004,
        payment_channel: 'Stripe',
        order_status: 'Completed',
        withdrawal_status: 'Completed',
        order_amount: 15.99,
        payout_type: 'PayPal',
        total_withdrawal: 15.99,
      },
      {
        date_created: '2022-01-05',
        user_id: 5,
        order_id: 1005,
        payment_channel: 'PayPal',
        order_status: 'Pending',
        withdrawal_status: 'Pending',
        order_amount: 20.99,
        payout_type: 'Bank Transfer',
        total_withdrawal: 0,
      },
    ];
  }

  constructor(private http: HttpClient) {}
  getData() {
    return Promise.resolve(this.fetchData());
  }
  // getCustomersMini() {
  //   return Promise.resolve(this.getData().slice(0, 5));
  // }

  // getCustomersSmall() {
  //   return Promise.resolve(this.getData().slice(0, 10));
  // }

  // getCustomersMedium() {
  //   return Promise.resolve(this.getData().slice(0, 50));
  // }

  // getCustomersLarge() {
  //   return Promise.resolve(this.getData().slice(0, 200));
  // }

  // getCustomersXLarge() {
  //   return Promise.resolve(this.getData());
  // }
}
