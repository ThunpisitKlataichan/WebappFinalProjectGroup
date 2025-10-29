
export default function OrderSummary({
  subTotal, shippingFee, grandTotal, currency,
}: { subTotal: number; shippingFee: number; grandTotal: number; currency: (n: number) => string }) {
  return (
    <section className="bg-white rounded-2xl border shadow-sm">
      <div className="p-4 border-b font-semibold">สรุปคำสั่งซื้อ</div>
      <div className="p-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">ยอดรวมสินค้า</span>
          <span className="font-medium">{currency(subTotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">ค่าจัดส่ง</span>
          <span className="font-medium">{currency(shippingFee)}</span>
        </div>
        <div className="h-px bg-gray-200 my-2" />
        <div className="flex justify-between text-base">
          <span className="font-semibold">ยอดชำระทั้งหมด</span>
          <span className="font-bold">{currency(grandTotal)}</span>
        </div>
      </div>
    </section>
  );
}
