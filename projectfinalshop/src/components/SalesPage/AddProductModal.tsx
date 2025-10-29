function AddProductModal({
  open,
  onClose,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (p: Product) => void;
}) {
  const [form, setForm] = useState({ name: "", sku: "", price: "", stock: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.sku) return alert("กรุณากรอกข้อมูลให้ครบ");
    onSave({
      id: Date.now().toString(),
      name: form.name,
      sku: form.sku,
      price: Number(form.price),
      stock: Number(form.stock),
    });
    setForm({ name: "", sku: "", price: "", stock: "" });
    onClose();
  };

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md"
      >
        <h2 className="text-lg font-bold mb-4 text-center">เพิ่มสินค้าใหม่</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            placeholder="ชื่อสินค้า"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-xl px-3 py-2"
          />
          <input
            placeholder="รหัสสินค้า (SKU)"
            value={form.sku}
            onChange={(e) => setForm({ ...form, sku: e.target.value })}
            className="w-full border rounded-xl px-3 py-2"
          />
          <input
            placeholder="ราคา (บาท)"
            type="number"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border rounded-xl px-3 py-2"
          />
          <input
            placeholder="จำนวนในคลัง"
            type="number"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
            className="w-full border rounded-xl px-3 py-2"
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border hover:bg-gray-100"
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductModal