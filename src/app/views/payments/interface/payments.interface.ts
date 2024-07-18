export interface Payments {
  date_created: Date;
  date_created_1?: Date;
  user_id: number;
  order_id: number;
  payment_channel: string;
  order_status: string;
  withdrawal_status: string;
  order_amount: number;
  payout_type: string;
  total_withdrawal: number;
}
