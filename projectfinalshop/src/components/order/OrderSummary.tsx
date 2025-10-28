function OrderSummary() {
  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="px-5 py-4 border-b">
        <h2 className="font-semibold">สรุปคำสั่งซื้อ</h2>
      </div>
      <div className="p-5 space-y-3">
        <div className="flex justify-between text-sm">
          <span>ยอดรวมสินค้า</span>
          <span className="font-medium">฿25,000</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>ค่าจัดส่ง</span>
          <span className="font-medium">฿500</span>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-semibold">
          <span>ยอดชำระทั้งหมด</span>
          <span>฿25,500</span>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary