// types/order.ts
export type OrderStatus =
  | "pending_payment"
  | "paid"
  | "processing"
  | "shipped"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "refunded";

export type TimelineEvent = { time: string; text: string };

export type Order = {
  id: string;
  phone: string;
  customer: string;
  total: number;
  status: OrderStatus;
  carrier?: string;
  trackingNo?: string;
  timeline: TimelineEvent[];
};
