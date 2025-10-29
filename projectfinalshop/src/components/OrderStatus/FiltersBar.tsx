import type { OrderStatus } from "../types/order";

export default function FiltersBar({
  query, setQuery, statusFilter, setStatusFilter,
}: {
  query: string; setQuery: (v: string) => void;
  statusFilter: OrderStatus | "all"; setStatusFilter: (v: OrderStatus | "all") => void;
}) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">ตรวจสอบสถานะคำสั่งซื้อ</h1>
        <p className="text-gray-500">ค้นหาด้วยเลขคำสั่งซื้อ / เบอร์โทร / ชื่อลูกค้า</p>
      </div>
      <div className="sm:ml-auto flex w-full sm:w-auto gap-2">
        <div className="flex items-center rounded-2xl border bg-white shadow-sm w-full sm:w-96">
          <span className="pl-3 pr-2 opacity-60">🔎</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="เช่น OD-20251030-001 หรือ 0800000001"
            className="flex-1 px-2 py-2 rounded-2xl outline-none"
          />
        </div>
        <div className="relative">
          <select
            className="px-3 py-2 rounded-2xl border bg-white shadow-sm text-sm"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
          >
            <option value="all">ทุกสถานะ</option>
            <option value="pending_payment">รอชำระเงิน</option>
            <option value="paid">ชำระเงินแล้ว</option>
            <option value="processing">กำลังเตรียมสินค้า</option>
            <option value="shipped">ส่งออกจากคลัง</option>
            <option value="out_for_delivery">กำลังนำส่ง</option>
            <option value="delivered">จัดส่งสำเร็จ</option>
            <option value="cancelled">ยกเลิก</option>
            <option value="refunded">คืนเงินแล้ว</option>
          </select>
        </div>
      </div>
    </div>
  );
}
