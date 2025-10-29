// AddProductModal.tsx
import React, { useState, useEffect } from "react";

interface AddProductModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (data: any, file: File | null) => void;
}

export default function AddProductModal({ open, onClose, onConfirm }: AddProductModalProps) {
  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (!open) {
      setForm({ name: "", brand: "", price: "", stock: "", description: "" });
      setFile(null);
    }
  }, [open]);

  if (!open) return null;

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(form, file);
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
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
              <label className="block text-sm mb-1">แนบไฟล์ (รูป/เอกสาร)</label>
              <input
                id="fileAdd"
                type="file"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
              <label
                htmlFor="fileAdd"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer hover:bg-gray-50"
              >
                📎 แนบไฟล์
              </label>
              {file && (
                <div className="mt-2 text-sm text-gray-600">
                  เลือกไฟล์: <span className="font-medium">{file.name}</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-3 py-1.5 rounded-xl border">
              ยกเลิก
            </button>
            <button type="submit" className="px-3 py-1.5 rounded-xl bg-black text-white hover:bg-gray-800">
              ตกลง
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
