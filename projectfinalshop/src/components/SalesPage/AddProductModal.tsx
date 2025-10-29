import React, { useState, useEffect } from "react";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data: any, fileUrl: string | null) => void;
}

export default function AddProductModal({ open, onClose, onConfirm }: AddProductModalProps) {
  const [form, setForm] = useState({
    model: "",
    brand: "",
    type: "",
    price: "",
    stock: "",
    description: "",
    imageUrl: "",
    isShow: true,
  });
  const [file, setFile] = useState<string | null>(null);


  useEffect(() => {
    if (!open) {
      setForm({ model: "", brand: "", type: "", price: "", stock: "", description: "", imageUrl: "", isShow: true, });
      setFile(null);
    }
  }, [open]);

  if (!open) return null;

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(form, file);
    console.log(form)
    console.log(file)

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-[min(680px,96vw)] rounded-2xl bg-white shadow-xl border p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">เพิ่มสินค้า</h3>
          <button onClick={onClose} className="px-2 py-1 rounded-lg hover:bg-gray-100">
            ✕
          </button>
        </div>

        <form className="space-y-3" onSubmit={submitForm}>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm mb-1">ชื่อสินค้า</label>
              <input
                value={form.model}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-1">ยี่ห้อ / แบรนด์</label>
              <input
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">หมวดหมู่</label>
              <input
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">ราคา (บาท)</label>
              <input
                type="number"
                min={0}
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">คงเหลือ (Qty)</label>
              <input
                type="number"
                min={0}
                value={form.stock}
                onChange={(e) => setForm({ ...form, stock: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">รายละเอียด</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 rounded-xl border"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm mb-1">แนบลิงก์รูปภาพ</label>
              <input
                type="url"
                placeholder="วางลิงก์รูปภาพ (เช่น Copy image address จาก Google)"
                className="w-full px-3 py-2 rounded-xl border"
                value={file ?? ""}
                onChange={(e) => setFile(e.target.value || null)}
              />

              {/* ถ้ามีลิงก์แล้วให้แสดงรูปตัวอย่าง */}
              {file && (
                <div className="mt-3">
                  <div className="mt-3">
                    <img  src={file} alt="Preview"
                      className="max-h-60 rounded-lg border shadow-sm object-contain mx-auto"
                        onError={(e) => {   e.currentTarget.style.display = "none"; 
                      }}
                    />
                  </div>
                </div>
              )}    
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-3 py-1.5 rounded-xl border">
                ยกเลิก
              </button>
              <button type="submit" className="px-3 py-1.5 rounded-xl bg-black text-white hover:bg-gray-800">
                ตกลง
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
