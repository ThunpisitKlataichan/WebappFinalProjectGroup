import { useMemo, useState } from "react";
import Header from "../Header";
import FiltersBar from "../OrderStatus/FiltersBar";
import OrderCard from "../OrderStatus/OrderCard";
import type { Order, OrderStatus } from "../types/order";

// mock data (คงเดิมจากที่ใช้)
const MOCK: Order[] = [
  {
    id: "OD-20251030-001",
    phone: "0800000001",
    customer: "ธัญพิสิษฐ์ กระต่ายจันทร์",
    total: 120480,
    status: "out_for_delivery",
    carrier: "Kerry",
    trackingNo: "KEX123456789TH",
    timeline: [
      { time: "2025-10-28 09:41", text: "ชำระเงินสำเร็จ" },
      { time: "2025-10-28 13:05", text: "ร้านค้ากำลังเตรียมสินค้า" },
      { time: "2025-10-29 10:12", text: "พัสดุออกจากศูนย์คัดแยก (กรุงเทพฯ)" },
      { time: "2025-10-30 08:10", text: "อยู่ระหว่างนำส่ง" },
    ],
  },
  {
    id: "OD-20251029-112",
    phone: "0811111111",
    customer: "ภูมิภัทร มั่งศิลป์",
    total: 88990,
    status: "delivered",
    carrier: "Thailand Post",
    trackingNo: "TH1234567890",
    timeline: [
      { time: "2025-10-27 10:00", text: "ชำระเงินสำเร็จ" },
      { time: "2025-10-27 16:20", text: "ร้านค้ากำลังเตรียมสินค้า" },
      { time: "2025-10-28 08:30", text: "พัสดุออกจากศูนย์คัดแยก (นนทบุรี)" },
      { time: "2025-10-29 12:14", text: "จัดส่งสำเร็จ" },
    ],
  },
  {
    id: "OD-20251028-019",
    phone: "0822222222",
    customer: "รัฐฉัตร คงธนศุภบวร",
    total: 80680,
    status: "pending_payment",
    timeline: [{ time: "2025-10-28 09:00", text: "สร้างคำสั่งซื้อ" }],
  },
  {
    id: "OD-20251027-404",
    phone: "0833333333",
    customer: "สิรภพ มะโนเทพ",
    total: 190250,
    status: "cancelled",
    timeline: [
      { time: "2025-10-27 11:22", text: "สร้างคำสั่งซื้อ" },
      { time: "2025-10-27 18:05", text: "ผู้ใช้ยกเลิกคำสั่งซื้อ" },
    ],
  },
];

export default function OrderStatusPage() {
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MOCK.filter((o) => {
      const matchQ =
        !q || o.id.toLowerCase().includes(q) || o.phone.includes(q) || o.customer.toLowerCase().includes(q);
      const matchS = statusFilter === "all" ? true : o.status === statusFilter;
      return matchQ && matchS;
    });
  }, [query, statusFilter]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/90 border-b">
          <FiltersBar
            query={query}
            setQuery={setQuery}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 py-6 space-y-4">
          {results.length === 0 ? (
            <div className="rounded-2xl border bg-white/70 shadow-sm p-12 text-center">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-2xl">🔍</div>
              <div className="mt-3 font-semibold">ไม่พบบันทึกคำสั่งซื้อ</div>
              <div className="text-sm text-gray-500">ลองเปลี่ยนคำค้นหรือเลือกสถานะ “ทุกสถานะ”</div>
            </div>
          ) : (
            results.map((o) => (
              <OrderCard
                key={o.id}
                o={o}
                onCopyTracking={(t) => navigator.clipboard?.writeText(t)}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
}
