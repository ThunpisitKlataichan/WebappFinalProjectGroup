import type { InstrumentProps } from "../types/InstrumentTypes";
function ProductRow({
  product,
  onView,
  onEdit,
  onDelete,
}: {
  product: InstrumentProps;
  onView: (p: InstrumentProps) => void;
  onEdit: (p: InstrumentProps) => void;
  onDelete: (p: InstrumentProps) => void;
}) {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      <td className="p-3 font-medium">{product.model}</td>
      <td className="p-3 text-gray-600">{product.brand}</td>
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
          className="px-3 py-1 border rounded-lg text-red-600 hover:bg-red-50">
          ลบ
        </button>
      </td>
    </tr>
  );
}
export default ProductRow;
