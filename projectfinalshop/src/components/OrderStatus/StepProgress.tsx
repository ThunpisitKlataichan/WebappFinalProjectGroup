import type { OrderStatus } from "../types/order";

const STEPS: { key: OrderStatus; label: string; icon: string }[] = [
  { key: "pending_payment", label: "รอชำระ",        icon: "⏳" },
  { key: "paid",            label: "ชำระแล้ว",      icon: "✅" },
  { key: "processing",      label: "เตรียมสินค้า",  icon: "🧰" },
  { key: "shipped",         label: "ออกจากคลัง",    icon: "🚚" },
  { key: "out_for_delivery",label: "นำส่ง",         icon: "📦" },
  { key: "delivered",       label: "สำเร็จ",        icon: "🎉" },
];

export default function StepProgress({ status }: { status: OrderStatus }) {
  const idx = STEPS.findIndex((s) => s.key === status);
  if (idx === -1) return null;
  return (
    <div className="mt-4">
      <div className="relative">
        <div className="h-1 w-full rounded bg-gray-200" />
        <div
          className="absolute left-0 top-0 h-1 rounded bg-black transition-all"
          style={{ width: `${(idx / (STEPS.length - 1)) * 100}%` }}
        />
      </div>
      <div className="mt-3 grid grid-cols-6 gap-2">
        {STEPS.map((s, i) => {
          const active = i <= idx;
          return (
            <div key={s.key} className="text-center">
              <div
                className={`mx-auto w-9 h-9 rounded-full flex items-center justify-center border text-sm shadow-sm
                 ${active ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-200"}`}
                title={s.label}
              >
                {s.icon}
              </div>
              <div className={`mt-1 text-[11px] ${active ? "text-gray-900" : "text-gray-500"}`}>{s.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
