function CustomerForm() {
  return (
    <section className="mt-10 bg-white rounded-2xl shadow-sm border">
      <div className="px-5 py-4 border-b">
        <h2 className="font-semibold">ข้อมูลผู้รับสินค้า</h2>
      </div>
      <form className="p-5 grid md:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label className="text-sm">ชื่อ-นามสกุล</label>
          <input
            required
            type="text"
            className="border rounded-lg px-3 py-2"
            placeholder="ชื่อ-นามสกุล"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">เบอร์ติดต่อ</label>
          <input
            required
            type="tel"
            className="border rounded-lg px-3 py-2"
            placeholder="080-000-0000"
          />
        </div>
        <div className="md:col-span-2 grid gap-2">
          <label className="text-sm">ที่อยู่จัดส่ง</label>
          <textarea
            rows={3}
            className="border rounded-lg px-3 py-2"
            placeholder="บ้านเลขที่ ถนน แขวง/ตำบล เขต/อำเภอ จังหวัด รหัสไปรษณีย์"
          ></textarea>
        </div>
        <div className="md:col-span-2 pt-2">
          <button
            type="submit"
            className="w-full md:w-auto bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold"
          >
            ยืนยันสั่งซื้อ
          </button>
        </div>
      </form>
    </section>
  );
}

export default CustomerForm