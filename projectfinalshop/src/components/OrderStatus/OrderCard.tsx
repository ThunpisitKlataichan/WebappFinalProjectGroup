import type { Order } from "../types/order";
import StepProgress from "./StepProgress";
import Timeline from "./Timeline";
import StatusBadge from "./StatusBadge";

const currency = (n: number) =>
  new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(n);

export default function OrderCard({ o, onCopyTracking }: { o: Order; onCopyTracking: (t: string) => void }) {
  return (
    <section className="rounded-3xl border bg-white/80 shadow-[0_6px_30px_-12px_rgba(0,0,0,0.25)] backdrop-blur p-5">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div className="space-y-0.5">
          <div className="text-sm text-gray-500">คำสั่งซื้อ</div>
          <div className="text-lg font-semibold tracking-tight">{o.id}</div>
          <div className="text-sm text-gray-600">
            ลูกค้า: <span className="font-medium">{o.customer}</span> • ยอดชำระ{" "}
            <span className="font-semibold">{currency(o.total)}</span>
          </div>
        </div>
        <StatusBadge status={o.status} />
      </div>

      <StepProgress status={o.status} />

      <div className="mt-5 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border bg-white p-4">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-lg">🗓️</span> ไทม์ไลน์
          </div>
          <Timeline items={o.timeline} />
        </div>

        <div className="rounded-2xl border bg-white p-4">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-lg">🚚</span> ข้อมูลการขนส่ง
          </div>
          <div className="mt-2 text-sm text-gray-700">
            ผู้ขนส่ง: <b>{o.carrier ?? "-"}</b>
          </div>
          <div className="mt-1 text-sm text-gray-700">
            เลขพัสดุ: <b>{o.trackingNo ?? "-"}</b>
            {o.trackingNo && (
              <button
                onClick={() => onCopyTracking(o.trackingNo!)}
                className="ml-2 px-2 py-0.5 rounded-lg border hover:bg-gray-50 text-xs"
                title="คัดลอกเลขพัสดุ"
              >
                คัดลอก
              </button>
            )}
          </div>

          {o.trackingNo && (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-xl bg-black text-white text-sm hover:bg-gray-800"
              title="ไปหน้าติดตาม (ตัวอย่าง)"
            >
              ติดตามพัสดุ <span>↗</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
