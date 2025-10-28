import CartList from "./CartList";
import OrderSummary from "./OrderSummary";
import ShippingPayment from "./ShippingPayment";
import CustomerForm from "./CustomerForm";
import Header from "../header";

function OrderPage() {
  
  return (
    <>
    <Header/>
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-10">
      <div className="border-b pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">สั่งซื้อสินค้า (Order)</h1>
        <p className="text-gray-600 mt-1">
          ตรวจสอบตะกร้า กรอกข้อมูลการจัดส่ง และชำระเงิน
        </p>
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-8">
        <CartList />
        <aside className="space-y-6">
          <OrderSummary />
          <ShippingPayment />
        </aside>
      </div>

      <CustomerForm />
    </section></>
  );
}

export default OrderPage