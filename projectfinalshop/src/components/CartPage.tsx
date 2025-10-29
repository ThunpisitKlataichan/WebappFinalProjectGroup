import { useMemo, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

type CartItem = {
    id: string;
    name: string;
    variant: string;
    price: number;
    qty: number;
    image: string;
    note?: string;
};

const currency = (n: number) =>
    new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(n);

export default function CartPage() {
    // ตัวอย่างสินค้า
    const [items, setItems] = useState<CartItem[]>([
        {
            id: "P-1001",
            name: "Fender Stratocaster",
            variant: "Electric • Black",
            price: 21600,
            qty: 1,
            image:
                "https://www.musicarms.net/wp-content/uploads/2018/06/Fender-Standard-Stratocaster-HSS-%E0%B8%81%E0%B8%B5%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2-red.jpg",
        },
        {
            id: "P-2002",
            name: "Kemper Profiler Stage มัลติเอฟเฟค",
            variant: "Standard • Black",
            price: 45900,
            qty: 2,
            image: "https://www.musicarms.net/wp-content/uploads/2020/03/Kemper-Profiler-Stage-5-300x300.jpg",
        },
    ]);

    // เก็บว่า item ไหนเปิด dropdown อยู่ (accordion แบบหลายอันเปิดพร้อมกันได้)
    const [openSet, setOpenSet] = useState<Set<string>>(new Set());

    const subTotal = useMemo(() => items.reduce((s, it) => s + it.price * it.qty, 0), [items]);
    const shipping = useMemo(() => (subTotal > 20000 ? 0 : 120), [subTotal]);
    const grandTotal = subTotal + shipping;

    const toggleOpen = (id: string) => {
        setOpenSet((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });
    };

    const updateQty = (id: string, delta: number) => {
        setItems((prev) =>
            prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it))
        );
    };

    const updateVariant = (id: string, variant: string) => {
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, variant } : it)));
    };

    const updateNote = (id: string, note: string) => {
        setItems((prev) => prev.map((it) => (it.id === id ? { ...it, note } : it)));
    };

    const removeItem = (id: string) => {
        setItems((prev) => prev.filter((it) => it.id !== id));
        setOpenSet((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
        });
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-2xl sm:text-3xl font-bold">ตะกร้าสินค้า</h1>
                    <p className="text-gray-500 mt-1">ตรวจสอบรายการ ปรับจำนวน และกรอกรายละเอียดเพิ่มเติม</p>

                    {/* รายการสินค้า */}
                    <div className="mt-5 space-y-3">
                        {items.length === 0 ? (
                            <div className="rounded-2xl border bg-white p-10 text-center text-gray-500">
                                ตะกร้าของคุณยังว่างอยู่
                            </div>
                        ) : (
                            items.map((it) => {
                                const open = openSet.has(it.id);
                                return (
                                    <section
                                        key={it.id}
                                        className="rounded-2xl border bg-white shadow-sm overflow-hidden"
                                    >
                                        {/* แถวหัวสินค้า (กดเพื่อเปิด/ปิด dropdown) */}
                                        <button
                                            className="w-full text-left"
                                            onClick={() => toggleOpen(it.id)}
                                            aria-expanded={open}
                                            aria-controls={`row-${it.id}`}
                                        >
                                            <div className="flex items-center gap-3 p-4">
                                                <img
                                                    src={it.image}
                                                    alt={it.name}
                                                    className="w-14 h-14 rounded-lg object-cover border"
                                                />
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-semibold truncate">{it.name}</div>
                                                    <div className="text-sm text-gray-500 truncate">{it.variant}</div>
                                                </div>

                                                {/* ราคา/จำนวน/รวม */}
                                                <div className="hidden sm:block text-right w-32">
                                                    <div className="text-xs text-gray-500">ราคา/ชิ้น</div>
                                                    <div className="font-medium">{currency(it.price)}</div>
                                                </div>
                                                <div className="hidden sm:block w-28">
                                                    <div className="text-xs text-gray-500 text-center">จำนวน</div>
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            className="px-2 py-1 rounded-lg border"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                updateQty(it.id, -1);
                                                            }}
                                                            aria-label="ลดจำนวน"
                                                        >
                                                            −
                                                        </button>
                                                        <span className="min-w-6 text-center">{it.qty}</span>
                                                        <button
                                                            className="px-2 py-1 rounded-lg border"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                updateQty(it.id, +1);
                                                            }}
                                                            aria-label="เพิ่มจำนวน"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="text-right w-32">
                                                    <div className="text-xs text-gray-500">รวม</div>
                                                    <div className="font-semibold">{currency(it.price * it.qty)}</div>
                                                </div>

                                                <div
                                                    className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
                                                    aria-hidden
                                                >
                                                    ▾
                                                </div>
                                            </div>
                                        </button>

                                        {/* บรรทัด details (dropdown) */}
                                        <div
                                            id={`row-${it.id}`}
                                            className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-4 pb-4 pt-2 border-t bg-gray-50">
                                                    <div className="grid sm:grid-cols-2 gap-4">
                                                        {/* ตัวเลือก/จำนวน (ซ่อนบน mobile ในแถวบน เลยใส่ซ้ำที่นี่สำหรับ mobile) */}
                                                        <div className="sm:hidden">
                                                            <div className="text-xs text-gray-500 mb-1">จำนวน</div>
                                                            <div className="flex items-center gap-2">
                                                                <button
                                                                    className="px-2 py-1 rounded-lg border bg-white"
                                                                    onClick={() => updateQty(it.id, -1)}
                                                                    aria-label="ลดจำนวน"
                                                                >
                                                                    −
                                                                </button>
                                                                <span className="min-w-6 text-center">{it.qty}</span>
                                                                <button
                                                                    className="px-2 py-1 rounded-lg border bg-white"
                                                                    onClick={() => updateQty(it.id, +1)}
                                                                    aria-label="เพิ่มจำนวน"
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium mb-1">ตัวเลือกสินค้า</label>
                                                            <select
                                                                className="w-full px-3 py-2 rounded-xl border bg-white"
                                                                value={it.variant}
                                                                onChange={(e) => updateVariant(it.id, e.target.value)}
                                                            >
                                                                <option>Electric • Black</option>
                                                                <option>Electric • Sunburst</option>
                                                                <option>Acoustic • Natural</option>
                                                                <option>Standard • Black</option>
                                                            </select>
                                                        </div>

                                                        <div>
                                                            <label className="block text-sm font-medium mb-1">
                                                                หมายเหตุ (เช่น ต้องการเซ็ตสายพิเศษ)
                                                            </label>
                                                            <textarea
                                                                rows={2}
                                                                className="w-full px-3 py-2 rounded-xl border bg-white"
                                                                value={it.note ?? ""}
                                                                onChange={(e) => updateNote(it.id, e.target.value)}
                                                                placeholder="พิมพ์ข้อความถึงร้านค้า..."
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-4 flex items-center justify-between">
                                                        <button
                                                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border bg-white hover:bg-gray-100"
                                                            onClick={() => removeItem(it.id)}
                                                        >
                                                            🗑️ ลบรายการนี้
                                                        </button>
                                                        <div className="text-sm text-gray-600">
                                                            ราคารวมรายการนี้:{" "}
                                                            <span className="font-semibold">{currency(it.price * it.qty)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                );
                            })
                        )}
                    </div>

                    {/* โค้ด/สรุปยอด */}
                    <div className="mt-6 grid lg:grid-cols-3 gap-4">
                        <section className="lg:col-span-2 rounded-2xl border bg-white p-4">
                            <div className="font-semibold mb-3">โค้ดส่วนลด</div>
                            <div className="flex gap-2">
                                <input
                                    placeholder="กรอกโค้ดส่วนลด"
                                    className="flex-1 px-3 py-2 rounded-xl border"
                                />
                                <button className="px-4 py-2 rounded-xl border bg-white hover:bg-gray-100">
                                    ใช้โค้ด
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">* ฟีเจอร์ตัวอย่าง ยังไม่เชื่อมหลังบ้าน</p>
                        </section>

                        <section className="rounded-2xl border bg-white p-4">
                            <div className="font-semibold border-b pb-2 mb-2">สรุปคำสั่งซื้อ</div>
                            <div className="text-sm space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">ยอดรวมสินค้า</span>
                                    <span className="font-medium">{currency(subTotal)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">
                                        ค่าจัดส่ง{shipping === 0 ? " (โปรฯ ส่งฟรี)" : ""}
                                    </span>
                                    <span className="font-medium">{currency(shipping)}</span>
                                </div>
                                <div className="h-px bg-gray-200 my-2" />
                                <div className="flex justify-between text-base">
                                    <span className="font-semibold">ยอดชำระทั้งหมด</span>
                                    <span className="font-bold">{currency(grandTotal)}</span>
                                </div>
                            </div>

                            <div className="mt-4 space-y-2">
                                {/* ปุ่มชำระเงิน */}
                                <Link to="/order"
                                    className="block text-center w-full px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"  >
                                    ดำเนินการชำระเงิน
                                </Link>

                                {/* ปุ่มกลับไปหน้าหลัก */}
                                <Link to="/"
                                    className="block text-center w-full px-4 py-2 rounded-xl border bg-white hover:bg-gray-100" >
                                    เลือกซื้อสินค้าต่อ
                                </Link>
                            </div>

                        </section>
                    </div>
                </div>
            </main>
        </>
    );
}
