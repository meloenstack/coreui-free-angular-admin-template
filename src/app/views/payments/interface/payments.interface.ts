export interface Payments {
  date_created: string;
  user_id: number;
  order_id: number;
  payment_channel: string;
  order_status: string;
  withdrawal_status: string;
  order_amount: number;
  payout_type: string;
  total_withdrawal: number;
}
