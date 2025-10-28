type ProductCardProps = {
    imageUrl: string; 
    brand: string;
    model: string;
    price: string;
    description: string; 
    showBuy?: boolean; 
};
export default function ProductCard({
    imageUrl,
    brand,
    model,
    price,
    description, 
    showBuy = false,
}: ProductCardProps) {
    
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="h-44 flex items-center justify-center bg-gray-50">
                <img src={imageUrl} alt={`${brand} ${model}`} className="h-full object-contain" />
            </div>

            <div className="p-4">
                <p className="text-xs leading-4 mb-1">
                    <span className="font-semibold">Brand :</span> {brand} <br />
                    <span className="font-semibold">Model :</span> {model}
                </p>

                <p className="font-extrabold text-lg mt-2">THB {price}</p> 

                {/* 💡 แสดง Description แทน Specs List */}
                <p className="text-xs text-gray-600 mt-2 line-clamp-3">
                    {description}
                </p>
                
                {/* ถ้าอยากแสดงเป็นรายการ <ul> ก็ใช้โค้ดเดิมแต่ใช้ specsList แทน */}
                {/* <ul className="text-xs text-gray-600 mt-2 space-y-1">
                    {specsList.map((s, i) => <li key={i}>{s}</li>)}
                </ul> */}
            </div>

            <div className="flex justify-center gap-2 p-3">
                <button className="px-4 py-1 text-xs font-semibold rounded bg-blue-500 hover:bg-blue-400 text-white">
                    รายละเอียด
                </button>

                {showBuy && (
                    <button className="px-4 py-1 text-xs font-semibold text-white rounded bg-black hover:bg-red-700">
                        สั่งซื้อ
                    </button>
                )}
            </div>
        </div>
    );
}