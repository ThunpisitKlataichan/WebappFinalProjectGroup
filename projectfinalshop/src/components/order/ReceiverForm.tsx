import React from "react";

export default function ReceiverForm({
  fullName, setFullName, phone, setPhone, address, setAddress, errors, onSubmit,
}: {
  fullName: string; setFullName: (v: string) => void;
  phone: string;    setPhone: (v: string) => void;
  address: string;  setAddress: (v: string) => void;
  errors: { [k: string]: string };
  onSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <section className="bg-white rounded-2xl border shadow-sm">
      <div className="p-4 border-b font-semibold">ข้อมูลผู้รับสินค้า</div>
      <form className="p-4 space-y-3" onSubmit={onSubmit}>
        <div className="grid sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">ชื่อ-นามสกุล</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={`w-full px-3 py-2 rounded-xl border ${errors.fullName ? "border-red-400" : ""}`}
              placeholder="ชื่อ-นามสกุล"
            />
            {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-sm mb-1">เบอร์ติดต่อ</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="080-000-0000"
              className={`w-full px-3 py-2 rounded-xl border ${errors.phone ? "border-red-400" : ""}`}
            />
            {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">ที่อยู่จัดส่ง</label>
          <textarea
            rows={3}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full px-3 py-2 rounded-xl border ${errors.address ? "border-red-400" : ""}`}
            placeholder="บ้านเลขที่ ถนน แขวง/ตำบล เขต/อำเภอ จังหวัด รหัสไปรษณีย์"
          />
          {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
        </div>

        <div className="pt-2">
          <button type="submit" className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800">
            ยืนยันสั่งซื้อ
          </button>
        </div>
      </form>
    </section>
  );
}
