
import type { CartItem } from "./OrderTypes";

export default function CartList({
  cart, currency,
}: { cart: CartItem[]; currency: (n: number) => string }) {
  return (
    <section className="bg-white rounded-2xl border shadow-sm">
      <div className="p-4 border-b font-semibold">ตะกร้าสินค้า</div>
      <div className="p-4">
        {cart.map((it) => (
          <div key={it.id} className="flex items-center gap-3 py-3">
            <img src={it.image} alt={it.name} className="w-14 h-14 rounded-lg object-cover border" />
            <div className="flex-1">
              <div className="font-medium">{it.name}</div>
              <div className="text-sm text-gray-500">{it.variant}</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">ราคา/ชิ้น</div>
              <div className="font-semibold">{currency(it.price)}</div>
            </div>
            <div className="w-16 text-center">
              <span className="inline-block px-2 py-1 rounded-lg border text-sm bg-gray-50">{it.qty}</span>
            </div>
            <div className="text-right w-28">
              <div className="text-sm text-gray-500">คำสั่งซื้อ</div>
              <div className="font-semibold">{currency(it.price * it.qty)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
