type Props = {
  img: string;
  brand: string;
  model: string;
  price: string;
  specs: string[];
};

function ProductCard({ img, brand, model, price, specs }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* รูปสินค้า */}
      <div className="h-44 bg-gray-100 flex items-center justify-center">
        <img
          src={img}
          alt={`${brand} ${model}`}
          className="h-full object-contain"
        />
      </div>

      {/* เนื้อหา */}
      <div className="p-4">
        <p className="text-xs leading-4 mb-1">
          <span className="font-semibold">Brand :</span> {brand} <br />
          <span className="font-semibold">Model :</span> {model}
        </p>

        <p className="font-extrabold text-lg mt-2 text-gray-900">{price}</p>

        <ul className="text-xs text-gray-600 mt-2 space-y-1">
          {specs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="mt-4 flex justify-end">
          <button className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 shadow-sm">
            ดูรายละเอียด
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard