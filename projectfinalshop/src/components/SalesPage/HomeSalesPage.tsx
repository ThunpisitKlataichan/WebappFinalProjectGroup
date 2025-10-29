import  { useMemo, useState , useEffect} from "react";
import TH from "./SalesTH";
import ProductRow from "./ProductRow";
import { Link } from "react-router-dom";
import type Home from "../Home";
import API_Url from "../types/APIUrl";
import type { InstrumentProps } from "../types/InstrumentTypes";
import axios from "axios";

function HomeSalesPage() {
  const [products, setProducts] = useState<InstrumentProps[]>([]);

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? products.filter((p) => p.model.toLowerCase().includes(q)) : products;
  }, [products, query]);

  const fetchProducts = async () => {
      try{
        const response = await fetch(API_Url()+"/instruments");
        const data = await response.json();
        setProducts(data);
      }
      catch(error){

      }
    }
    
    console.log("Products fetched")
    console.log(products)
    ;
  // ดึงข้อมูลสินค้าเมื่อ component โหลด
  useEffect(() => {
    fetchProducts();
  }, []);
  // เพิ่มสินค้า

  const handleAdd = () => {

  };

  // ดูสินค้า
  const handleView = (p: InstrumentProps) => {
    alert("Product Details:\n" + 
      "Product Name: " + p.model + "\n" +
      "Brand: " + p.brand + "\n" +
      "Price: " + p.price.toLocaleString() + " บาท\n" +
      "Stock: " + p.stock + "\n" +
      "Description: " + p.description
    );
  };

  // แก้ไข
  const handleEdit = (p: InstrumentProps) => {
    const name = prompt("Enter new product name:", p.model) || p.model;
    const brand = prompt("Enter new brand:", p.brand) || p.brand;
    const priceStr = prompt("Enter new price:", p.price.toString()) || p.price.toString();
    const stockStr = prompt("Enter new stock:", p.stock.toString()) || p.stock.toString();
    const description = prompt("Enter new description:", p.description) || p.description;

    axios.put(API_Url() + "/instruments/" + p._id, {
      ...p,
      model: name,
      brand: brand,
      price: parseFloat(priceStr),
      stock: parseInt(stockStr),
      description: description
    })
    fetch(API_Url() + "/instruments")
    fetchProducts();
  };
  // ลบสินค้า
  const handleDelete = (p: InstrumentProps) => {
    axios.delete(API_Url() + "/instruments/" + p._id)
    alert("ลบข้อมูลสำเร็จ")
    fetchProducts();
    };

  return (
    <main className="min-h-screen bg-gray-50 py-6">
  {/* Header */}
  <div className="max-w-6xl mx-auto px-4 flex justify-between items-center mb-4">
    <h1 className="text-2xl font-bold flex items-center gap-2">
      🏷️ Home Sales Page
    </h1>

    <div className="flex items-center gap-3">
      {/* ปุ่มไปหน้า Stock */}
      <Link  to="/stock" 
      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"  >
        📦 Stock
      </Link>

      {/* ปุ่มไปหน้า Login */}
      <Link to="/login"
        className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      >
        🔐 Logout
      </Link>

      {/* ปุ่มเพิ่มสินค้า (หลัก) */}
      <button  onClick={handleAdd}
        className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
      >
        + เพิ่มสินค้า
      </button>
    </div>
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
                <ProductRow product={p} onView={handleView} onEdit={handleEdit} onDelete={handleDelete}/>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default HomeSalesPage;
