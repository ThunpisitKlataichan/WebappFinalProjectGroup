type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
};

export default function ProductRow({
  product,
  onView,
  onEdit,
  onDelete,
}: {
  product: Product;
  onView: (p: Product) => void;
  onEdit: (p: Product) => void;
  onDelete: (p: Product) => void;
}) {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="p-3 font-medium">{product.name}</td>
      <td className="p-3 text-gray-600">{product.sku}</td>
      <td className="p-3">{product.price.toLocaleString()} บาท</td>
      <td className="p-3 text-right">{product.stock}</td>
      <td className="p-3 text-right space-x-2">
        <button onClick={() => onView(product)}  className="px-3 py-1 border rounded-lg hover:bg-gray-100" >    ดู  </button>
        <button
          onClick={() => onEdit(product)}
          className="px-3 py-1 border rounded-lg hover:bg-gray-100"
        >
          แก้ไข
        </button>
        <button
          onClick={() => onDelete(product)}
          className="px-3 py-1 border rounded-lg text-red-600 hover:bg-red-50"
        >
          ลบ
        </button>
      </td>
    </tr>
  );
}
