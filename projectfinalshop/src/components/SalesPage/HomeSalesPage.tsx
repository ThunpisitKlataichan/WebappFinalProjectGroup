import { useMemo, useState, useEffect } from "react";
// import TH from "./SalesTH"; // สมมติว่าไฟล์นี้มีอยู่
// import ProductRow from "./ProductRow"; // สมมติว่าไฟล์นี้มีอยู่
import { Link } from "react-router-dom";
import API_Url from "../types/APIUrl";
import type { InstrumentProps } from "../types/InstrumentTypes";
import axios from "axios";
import AddProductModal from "./AddProductModal";
import { Eye, Edit, Trash2, CheckSquare, XSquare } from "lucide-react"; // เพิ่มไอคอน

// ===================================================================
// == MOCK COMPONENTS (เพื่อ C-ompile) ==
// ===================================================================
// (สมมติว่าคุณมี Component เหล่านี้อยู่แล้ว)

const TH = ({ children, ...props }: any) => (
  <th
    className="px-6 py-3 text-xs font-semibold tracking-wider text-gray-500 uppercase bg-gray-100 border-b border-gray-200 text-left"
    {...props}
  >
    {children}
  </th>
);

const ProductRow = ({
  product,
  onView,
  onEdit,
  onDelete,
  onToggleShowOnHome,
}: any) => (
  <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <div className="flex items-center gap-3">
        <img
          src={product.imageUrl || "https://placehold.co/40x40/eee/aaa?text=?"}
          alt={product.model}
          className="w-10 h-10 rounded-md object-cover"
        />
        {product.model}
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
      {product.type}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
      {product.price.toLocaleString()}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right">
      {product.stock}
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right">
      <button
        onClick={() => onToggleShowOnHome(product)}
        className={`p-2 rounded-lg ${
          product.isShown
            ? "text-green-600 hover:text-green-900"
            : "text-gray-400 hover:text-gray-600"
        }`}
        title={product.isShown ? "ซ่อน" : "แสดง"}
      >
        {product.isShown ? <CheckSquare size={18} /> : <XSquare size={18} />}
      </button>
      <button
        onClick={() => onView(product)}
        className="text-indigo-600 hover:text-indigo-900 p-2"
        title="ดู"
      >
        <Eye size={18} />
      </button>
      <button
        onClick={() => onEdit(product)}
        className="text-yellow-600 hover:text-yellow-900 p-2"
        title="แก้ไข"
      >
        <Edit size={18} />
      </button>
      <button
        onClick={() => onDelete(product)}
        className="text-red-600 hover:text-red-900 p-2"
        title="ลบ"
      >
        <Trash2 size={18} />
      </button>
    </td>
  </tr>
);

// ===================================================================
// == PAGE COMPONENT (Fixed) ==
// ===================================================================

function HomeSalesPage() {
  const [products, setProducts] = useState<InstrumentProps[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [statusMessage, setStatusMessage] = useState(""); // สำหรับแจ้งเตือน

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q
      ? products.filter((p) => p.model.toLowerCase().includes(q))
      : products;
  }, [products, query]);

  const fetchProducts = async () => {
    setStatusMessage("กำลังโหลดข้อมูล...");
    try {
      const response = await fetch(API_Url() + "/instruments");
      const data = await response.json();
      setProducts(data);
      setStatusMessage(""); // เคลียร์เมื่อโหลดเสร็จ
    } catch (error) {
      setStatusMessage("Error: โหลดข้อมูลล้มเหลว");
    }
  };
  // ดึงข้อมูลสินค้าเมื่อ component โหลด
  useEffect(() => {
    fetchProducts();
  }, []);

  // 1. เพิ่มสินค้า
  const handleAdd = () => setOpenModal(true);

  // 2. ยืนยันการเพิ่ม (⭐ แก้ไข: เพิ่ม async/await และ axios.post)
  const handleConfirm = async (form: any, file: string | null) => {
    console.log("เพิ่มสินค้าใหม่:", form, file);
    setStatusMessage("กำลังเพิ่มสินค้า...");

    try {
      // แปลงค่า price/stock จาก string เป็น number ก่อนส่ง
      const dataToSend = {
        ...form,
        price: parseFloat(form.price) || 0,
        stock: parseInt(form.stock, 10) || 0,
        imageUrl : file
      };

      await axios.post(API_Url() + "/instruments", dataToSend);
      setStatusMessage("เพิ่มสินค้าสำเร็จ!");
      await fetchProducts(); // รีเฟรชตาราง
    } catch (error) {
      console.error("Error adding product:", error);
      setStatusMessage("Error: เพิ่มสินค้าล้มเหลว");
    }
  };

  // 3. ดูสินค้า
  const handleView = (p: InstrumentProps) => {
    alert(
      "Product Details:\n" +
        "ID: " +
        p._id +
        "\n" +
        "Product Name: " +
        p.model +
        "\n" +
        "Brand: " +
        p.brand +
        "\n" +
        "Type: " +
        p.type +
        "\n" +
        "Price: " +
        p.price.toLocaleString() +
        " บาท\n" +
        "Stock: " +
        p.stock +
        "\n" +
        "Description: " +
        p.description +
        "\n" +
        "isShown: " +
        p.isShown +
        "\n" +
        "ImgUrl: " +
        p.imageUrl
    );
  };

  // 4. แก้ไข (⭐ แก้ไข: เปลี่ยนเป็น Modal หรือ async/await)
  // (หมายเหตุ: การใช้ prompt() ไม่ดีนัก ควรเปลี่ยนเป็น Modal แบบ Add)
  const handleEdit = async (p: InstrumentProps) => {
    const name = prompt("Enter new product name:", p.model) || p.model;
    const brand = prompt("Enter new brand:", p.brand) || p.brand;
    const priceStr =
      prompt("Enter new price:", p.price.toString()) || p.price.toString();
    const stockStr =
      prompt("Enter new stock:", p.stock.toString()) || p.stock.toString();
    const description =
      prompt("Enter new description:", p.description) || p.description;
    const type = prompt("Enter new product category:", p.type) || p.type;

    const imageUrl = prompt("Enter new product URL-Image:")||p.imageUrl;
    // (ควรถาม imageUrl และ isShown ด้วย)

    setStatusMessage("กำลังอัปเดต...");
    try {
      await axios.put(API_Url() + "/instruments/" + p._id, {
        ...p,
        model: name,
        brand: brand,
        type: type,
        price: parseFloat(priceStr),
        stock: parseInt(stockStr),
        description: description,
        imageUrl : imageUrl
        // isShown: ..., (ยังไม่ได้อัปเดต)
      });

      setStatusMessage("อัปเดตสำเร็จ!");
      await fetchProducts(); // รอให้ .put เสร็จก่อน
    } catch (error) {
      console.error("Error updating product:", error);
      setStatusMessage("Error: อัปเดตล้มเหลว");
    }
  }; // 5. ลบสินค้า (⭐ แก้ไข: เพิ่ม async/await และ confirm)

  const handleDelete = async (p: InstrumentProps) => {
    if (!window.confirm(`คุณแน่ใจหรือไม่ที่จะลบ: ${p.model}?`)) {
      return;
    }

    setStatusMessage("กำลังลบ...");
    try {
      await axios.delete(API_Url() + "/instruments/" + p._id);
      setStatusMessage("ลบข้อมูลสำเร็จ");
      await fetchProducts(); // รอให้ .delete เสร็จก่อน
    } catch (error) {
      console.error("Error deleting product:", error);
      setStatusMessage("Error: ลบข้อมูลล้มเหลว");
    }
  };

  // 6. ให้สินค้าโชว์บนหน้าร้าน (โค้ดเดิมถูกต้องแล้ว)
  const handleOnshow = (p: InstrumentProps) => {
    setStatusMessage("กำลังเปลี่ยนสถานะ...");
    axios
      .put(API_Url() + "/instruments/" + p._id, {
        ...p,
        isShown: !p.isShown,
      })
      .then(() => {
        setStatusMessage("อัปเดตสำเร็จ");
        fetchProducts(); // ✅ รีเฟรชตารางด้วย
      })
      .catch(() => {
        setStatusMessage("อัปเดตไม่สำเร็จ");
      });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-6">
      {/* Header */}{" "}
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">
          🏷️ Product Management
        </h1>{" "}
        <div className="flex items-center gap-3">
          {" "}
          <Link
            to="/stock"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            📦 Stock{" "}
          </Link>{" "}
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            🔐 Logout{" "}
          </Link>{" "}
          <button
            onClick={handleAdd}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            + เพิ่มสินค้า{" "}
          </button>{" "}
          <AddProductModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onConfirm={handleConfirm}
          />{" "}
        </div>{" "}
      </div>
      {/* Status Message (แทน alert) */}
      {statusMessage && (
        <div className="max-w-6xl mx-auto px-4 mb-4">
          <div
            className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-3 rounded-lg"
            role="alert"
          >
            <p>{statusMessage}</p>
          </div>
        </div>
      )}
      {/* Search */}{" "}
      <div className="max-w-6xl mx-auto px-4 mb-4">
        {" "}
        <input
          type="text"
          placeholder="ค้นหาชื่อสินค้า..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-1/3 border rounded-xl px-3 py-2 shadow-sm focus:ring-2 focus:ring-indigo-500"
        />{" "}
      </div>
      {/* Table */}{" "}
      <div className="max-w-6xl mx-auto border rounded-xl bg-white shadow-sm overflow-hidden">
        {" "}
        <table className="min-w-full">
          {" "}
          <thead>
            {" "}
            <tr>
              <TH width="40%">ชื่อสินค้า</TH> <TH width="15%">ประเภท</TH>{" "}
              <TH width="15%">ราคา</TH>{" "}
              <TH width="10%" align="right">
                คงเหลือ
              </TH>{" "}
              <TH width="20%" align="right">
                การทำงาน
              </TH>{" "}
            </tr>{" "}
          </thead>{" "}
          <tbody>
            {" "}
            {filtered.length === 0 && !statusMessage.includes("กำลังโหลด") ? (
              <tr>
                {" "}
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  {" "}
                  {query ? "ไม่พบสินค้าที่ค้นหา" : "ไม่พบสินค้าในคลัง"}{" "}
                </td>{" "}
              </tr>
            ) : (
              filtered.map((p) => (
                <ProductRow
                  key={p._id} // เพิ่ม Key
                  product={p}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onToggleShowOnHome={handleOnshow}
                />
              ))
            )}
            {/* แสดงสถานะกำลังโหลดในตาราง */}
            {statusMessage.includes("กำลังโหลด") && (
              <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  ... กำลังโหลดข้อมูลสินค้า ...
                </td>
              </tr>
            )}{" "}
          </tbody>{" "}
        </table>{" "}
      </div>{" "}
    </main>
  );
}
export default HomeSalesPage;
