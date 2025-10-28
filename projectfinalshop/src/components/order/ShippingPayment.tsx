function ShippingPayment() {
  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="px-5 py-4 border-b">
        <h3 className="font-semibold">การจัดส่ง & การชำระเงิน</h3>
      </div>
      <div className="p-5 space-y-5">
        <div className="space-y-2">
          <p className="text-sm font-medium">วิธีจัดส่ง</p>
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="ship" value="standard" className="accent-black" defaultChecked />
            <span>มาตรฐาน (2–4 วัน) — ฿500</span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="ship" value="express" className="accent-black" />
            <span>ด่วน (1–2 วัน) — ฿900</span>
          </label>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">วิธีชำระเงิน</p>
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="pay" value="transfer" className="accent-black" defaultChecked />
            <span>โอนผ่านธนาคาร</span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="pay" value="card" className="accent-black" />
            <span>บัตรเครดิต/เดบิต</span>
          </label>
          <label className="flex items-center gap-3 text-sm">
            <input type="radio" name="pay" value="cod" className="accent-black" />
            <span>ชำระปลายทาง (COD)</span>
          </label>
        </div>
      </div>
    </section>
  );
}

export default ShippingPayment