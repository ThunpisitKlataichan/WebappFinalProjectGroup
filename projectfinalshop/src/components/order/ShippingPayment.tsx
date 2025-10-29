import type { Shipping, Payment } from "./OrderTypes";

export default function ShippingPayment({
  shipping, setShipping, payment, setPayment, errors,
}: {
  shipping: Shipping; setShipping: (s: Shipping) => void;
  payment: Payment;  setPayment: (p: Payment) => void;
  errors: { [k: string]: string };
}) {
  return (
    <section className="bg-white rounded-2xl border shadow-sm">
      <div className="p-4 border-b font-semibold">การจัดส่ง & การชำระเงิน</div>
      <div className="p-4 space-y-4 text-sm">
        <div>
          <div className="font-medium mb-2">วิธีจัดส่ง</div>
          <label className="flex items-center gap-2">
            <input type="radio" name="ship" checked={shipping === "standard"} onChange={() => setShipping("standard")} />
            มาตรฐาน (2–4 วัน) — 850
          </label>
          <label className="flex items-center gap-2 mt-1">
            <input type="radio" name="ship" checked={shipping === "express"} onChange={() => setShipping("express")} />
            ด่วน (1–2 วัน) — 890
          </label>
          {errors.shipping && <p className="text-xs text-red-600 mt-1">{errors.shipping}</p>}
        </div>

        <div>
          <div className="font-medium mb-2">วิธีชำระเงิน</div>
          <label className="flex items-center gap-2">
            <input type="radio" name="pay" checked={payment === "bank"} onChange={() => setPayment("bank")} />
            โอนผ่านธนาคาร
          </label>
          <label className="flex items-center gap-2 mt-1">
            <input type="radio" name="pay" checked={payment === "card"} onChange={() => setPayment("card")} />
            บัตรเครดิต/เดบิต
          </label>
          <label className="flex items-center gap-2 mt-1">
            <input type="radio" name="pay" checked={payment === "cod"} onChange={() => setPayment("cod")} />
            ชำระปลายทาง (COD)
          </label>
          {errors.payment && <p className="text-xs text-red-600 mt-1">{errors.payment}</p>}
        </div>
      </div>
    </section>
  );
}
