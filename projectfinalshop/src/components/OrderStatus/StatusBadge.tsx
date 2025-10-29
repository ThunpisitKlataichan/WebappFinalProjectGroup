import type { OrderStatus } from "../types/order";

const BADGE_STYLE: Record<OrderStatus, string> = {
  pending_payment: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  paid:            "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
  processing:      "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200",
  shipped:         "bg-cyan-50 text-cyan-700 ring-1 ring-cyan-200",
  out_for_delivery:"bg-amber-50 text-amber-800 ring-1 ring-amber-200",
  delivered:       "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  cancelled:       "bg-gray-100 text-gray-600 ring-1 ring-gray-200",
  refunded:        "bg-rose-50 text-rose-700 ring-1 ring-rose-200",
};

const STATUS_LABEL = (s: OrderStatus) =>
  s === "cancelled" ? "ยกเลิก" : s === "refunded" ? "คืนเงินแล้ว" : null;

export default function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${BADGE_STYLE[status]}`}>
      {STATUS_LABEL(status) ?? ({
        pending_payment: "รอชำระ",
        paid: "ชำระแล้ว",
        processing: "เตรียมสินค้า",
        shipped: "ออกจากคลัง",
        out_for_delivery: "นำส่ง",
        delivered: "สำเร็จ",
      } as Record<OrderStatus, string>)[status]}
    </span>
  );
}
