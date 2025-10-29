// pages/OrderPage.tsx
import React, { useMemo, useState } from "react";
import Header from "../Header";
import Modal from "./Modal";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";
import ShippingPayment from "./ShippingPayment";
import ReceiverForm from "./ReceiverForm";
import type { CartItem, Shipping, Payment } from "./OrderTypes";

const currency = (n: number) =>
  new Intl.NumberFormat("th-TH", { style: "currency", currency: "THB", maximumFractionDigits: 0 }).format(n);

export default function OrderPage() {
  const [cart] = useState<CartItem[]>([
    {
      id: "1",
      name: "Fender Stratocaster",
      variant: "Electric Guitar • Black",
      price: 21600,
      qty: 1,
      image:
        "https://www.musicarms.net/wp-content/uploads/2018/06/Fender-Standard-Stratocaster-HSS-%E0%B8%81%E0%B8%B5%E0%B8%95%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2-red.jpg",
    },
  ]);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone]       = useState("");
  const [address, setAddress]   = useState("");

  const [shipping, setShipping] = useState<Shipping>("standard");
  const [payment, setPayment]   = useState<Payment>("bank");

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  const shippingFee = useMemo(() => (shipping === "standard" ? 850 : 890), [shipping]);
  const subTotal    = useMemo(() => cart.reduce((s, it) => s + it.price * it.qty, 0), [cart]);
  const grandTotal  = subTotal + shippingFee;

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!fullName.trim()) e.fullName = "กรุณากรอกชื่อ-นามสกุล";
    if (!phone.trim()) e.phone = "กรุณากรอกเบอร์ติดต่อ";
    if (!/^\d{9,10}$/.test(phone.trim())) e.phone = "กรุณากรอกเบอร์ให้ถูกต้อง (9–10 หลัก)";
    if (!address.trim()) e.address = "กรุณากรอกที่อยู่จัดส่ง";
    if (!shipping) e.shipping = "กรุณาเลือกวิธีจัดส่ง";
    if (!payment)  e.payment  = "กรุณาเลือกวิธีชำระเงิน";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleOpenConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setConfirmOpen(true);
  };

  const handleConfirmOrder = () => {
    // TODO: POST /orders ไปหลังบ้าน
    setConfirmOpen(false);
    setSuccessOpen(true);
    // reset
    setFullName(""); setPhone(""); setAddress("");
    setShipping("standard"); setPayment("bank");
    setErrors({});
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold">สั่งซื้อสินค้า (Order)</h1>
          <p className="text-gray-500 mt-1">ตรวจสอบตะกร้า กรอกข้อมูลการจัดส่ง และชำระเงิน</p>

          <div className="grid lg:grid-cols-3 gap-4 mt-6">
            <div className="lg:col-span-2 space-y-4">
              <CartList cart={cart} currency={currency} />
              <ReceiverForm
                fullName={fullName} setFullName={setFullName}
                phone={phone}       setPhone={setPhone}
                address={address}   setAddress={setAddress}
                errors={errors}
                onSubmit={handleOpenConfirm}
              />
            </div>

            <div className="space-y-4">
              <OrderSummary
                subTotal={subTotal}
                shippingFee={shippingFee}
                grandTotal={grandTotal}
                currency={currency}
              />
              <ShippingPayment
                shipping={shipping} setShipping={setShipping}
                payment={payment}   setPayment={setPayment}
                errors={errors}
              />
            </div>
          </div>
        </div>

        {/* Confirm */}
        <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} title="ยืนยันการสั่งซื้อ">
          <div className="text-sm space-y-2">
            <div className="rounded-xl border bg-gray-50 p-3">
              <div className="font-medium mb-1">รายการสินค้า</div>
              {cart.map((it) => (
                <div key={it.id} className="flex items-center gap-2 text-gray-700">
                  <span>• {it.name}</span>
                  <span className="text-gray-500">x{it.qty}</span>
                  <span className="ml-auto">{currency(it.price * it.qty)}</span>
                </div>
              ))}
              <div className="h-px bg-gray-200 my-2" />
              <div className="flex justify-between">
                <span className="text-gray-600">ค่าจัดส่ง ({shipping === "standard" ? "มาตรฐาน" : "ด่วน"})</span>
                <span>{currency(shippingFee)}</span>
              </div>
              <div className="flex justify-between font-semibold mt-1">
                <span>ยอดชำระทั้งหมด</span>
                <span>{currency(grandTotal)}</span>
              </div>
            </div>

            <div className="rounded-xl border p-3">
              <div className="font-medium mb-1">ที่อยู่จัดส่ง</div>
              <div>👤 {fullName}</div>
              <div>📞 {phone}</div>
              <div className="whitespace-pre-wrap">📍 {address}</div>
              <div className="mt-2">
                วิธีชำระเงิน: <b>{payment === "bank" ? "โอนผ่านธนาคาร" : payment === "card" ? "บัตรเครดิต/เดบิต" : "ชำระปลายทาง (COD)"}</b>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <button onClick={() => setConfirmOpen(false)} className="px-3 py-1.5 rounded-xl border">ยกเลิก</button>
            <button onClick={handleConfirmOrder} className="px-3 py-1.5 rounded-xl bg-black text-white hover:bg-gray-800">ยืนยัน</button>
          </div>
        </Modal>

        {/* Success */}
        <Modal open={successOpen} onClose={() => setSuccessOpen(false)} title="สั่งซื้อสำเร็จ 🎉">
          <p className="text-sm text-gray-700">ขอบคุณสำหรับการสั่งซื้อ ระบบได้บันทึกคำสั่งซื้อของคุณแล้ว</p>
          <div className="mt-4 flex justify-end">
            <button onClick={() => setSuccessOpen(false)} className="px-3 py-1.5 rounded-xl bg-black text-white">
              ปิด
            </button>
          </div>
        </Modal>
      </main>
    </>
  );
}
