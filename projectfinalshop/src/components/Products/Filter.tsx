function Filter() {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full overflow-hidden">
      <h3 className="font-semibold mb-3">Brand</h3>

      <div className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Yamaha ✕</span>
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Blackstar ✕</span>
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Fender ✕</span>
        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">Sonicake ✕</span>
      </div>

      <h4 className="text-sm font-medium mb-2">Category</h4>
      <ul className="space-y-2 text-sm mb-6">
        <li><label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded" /> Guitar</label></li>
        <li><label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded" /> Electric Guitar</label></li>
        <li><label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded" /> Bass guitar</label></li>
        <li><label className="inline-flex items-center gap-2"><input type="checkbox" className="rounded" /> multi Effect</label></li>
      </ul>

      <h4 className="text-sm font-medium mb-2">Price</h4>
      <input type="range" min="0" max="20000" className="w-full accent-gray-800" />
      <div className="flex justify-between text-xs text-gray-500 mt-1"><span>0</span><span>฿20,000</span></div>

      <h4 className="text-sm font-medium mt-6 mb-2">ราคา</h4>
      <ul className="space-y-1 text-sm">
        <li><label className="inline-flex items-center gap-2"><input type="checkbox" /> ฿5,000–฿10,000</label></li>
        <li><label className="inline-flex items-center gap-2"><input type="checkbox" /> ฿10,000–฿15,000</label></li>
        <li><label className="inline-flex items-center gap-2"><input type="checkbox" /> ฿15,000–฿20,000</label></li>
      </ul>
    </div>
  );
}
export default Filter;