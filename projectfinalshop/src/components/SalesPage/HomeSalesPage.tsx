"use client";
import React, { useMemo, useState } from "react";
import TH from "./SalesTH";
import ProductRow from "./ProductRow";
import AddProductModal from "./AddProductModal";

type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
};

export default function HomeSalesPage() {
  const [products, setProducts] = useState<Product[]>([
    { id: "1", name: "Yonex Astrox 100ZZ", sku: "YX-A100ZZ", price: 6290, stock: 12 },
    { id: "2", name: "Victor Thruster K", sku: "VC-TK", price: 4790, stock: 8 },
  ]);

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? products.filter((p) => p.name.toLowerCase().includes(q)) : products;
  }, [products, query]);

  // เพิ่มสินค้า
  const handleAdd = () => {
    const name = prompt("ชื่อสินค้าใหม่:");
    const sku = prompt("รหัสสินค้า (SKU):");
    const price = Number(prompt("ราคา:"));
    const stock = Number(prompt("จำนวนในคลัง:"));
    if (name && sku) {
      setProducts((prev) => [
        ...prev,
        { id: Date.now().toString(), name, sku, price, stock },
      ]);
    }
  };

  // ดูสินค้า
  const handleView = (p: Product) =>
    alert(`สินค้า: ${p.name}\nราคา: ${p.price.toLocaleString()} บาท\nคงเหลือ: ${p.stock} ชิ้น`);

  // แก้ไข
  const handleEdit = (p: Product) => {
    const price = Number(prompt(`ราคาใหม่ของ ${p.name}:`, String(p.price)));
    if (!isNaN(price)) {
      setProducts((prev) =>
        prev.map((x) => (x.id === p.id ? { ...x, price } : x))
      );
    }
  };

  // ลบสินค้า
  const handleDelete = (p: Product) => {
    if (confirm(`แน่ใจว่าจะลบ ${p.name}?`)) {
      setProducts((prev) => prev.filter((x) => x.id !== p.id));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">🏷️ Home Sales Page</h1>
        <button
          onClick={handleAdd}
          className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800"
        >
          + เพิ่มสินค้า
        </button>
      </div>

      {/* Search */}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <input
          type="text"
          placeholder="ค้นหาชื่อสินค้า..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-1/3 border rounded-xl px-3 py-2 shadow-sm"
        />
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto border rounded-xl bg-white shadow-sm overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <TH width="40%">ชื่อสินค้า</TH>
              <TH width="20%">SKU</TH>
              <TH width="20%">ราคา</TH>
              <TH width="10%" align="right">
                คงเหลือ
              </TH>
              <TH width="10%" align="right">
                การทำงาน
              </TH>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  ไม่พบสินค้าในคลัง
                </td>
              </tr>
            ) : (
              filtered.map((p) => (
                <ProductRow
                  key={p.id}
                  product={p}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
