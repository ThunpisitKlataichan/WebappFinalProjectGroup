function CartList() {
  return (
    <section className="bg-white rounded-2xl shadow-sm border">
      <div className="px-5 py-4 border-b">
        <h2 className="font-semibold">ตะกร้าสินค้า</h2>
      </div>

      <ul className="divide-y">
        <li className="p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <img
              src="/images/fender/FD-AM-PRO-II-STRAT-MSG-RW-01.png"
              alt="Fender"
              className="w-20 h-20 object-cover rounded-lg border"
            />
            <div className="min-w-0">
              <p className="font-semibold truncate">Fender Stratocaster</p>
              <p className="text-xs text-gray-500">Electric Guitar • Black</p>
              <button className="mt-2 text-xs text-red-600 hover:underline">
                ลบออก
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right">
              <p className="text-sm text-gray-500">ราคา/ชิ้น</p>
              <p className="font-semibold">฿25,000</p>
            </div>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded-lg px-2 py-1 text-center"
            />
            <div className="text-right">
              <p className="text-sm text-gray-500">ราคารวม</p>
              <p className="font-semibold">฿25,000</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
export default CartList