import fenderImg from "./images/fender/FD-AM-PRO-II-STRAT-MSG-RW-01.png";

function Card() {
  return (
    <div className="w-auto h-36 bg-white grid place-items-center">
      {/* ✅ ใช้ตัวแปรที่ import มา */}
      <img src={fenderImg} alt="Fender Product"
        className="w-auto h-auto object-cover"
      />

      <div className="p-3">
        <p className="text-xs leading-4">
          <span className="font-semibold">Brand :</span> Fender <br />
          <span className="font-semibold">Model :</span> American Professional II Stratocaster
        </p>
        <p className="font-extrabold mt-2">$1299</p>
        <p className="text-xs text-gray-600 mt-1">
          Body: Alder <br />
          Neck: Maple, Maple Or Rosewood <br />
          Pickups: 3x V-Mod II Single-Coil Strat® <br />
          Controls: Master Volume, 2 Tone, 5-Way Switch
        </p>
      </div>

      <div className="mt-3 flex justify-end">
        <a
          href="#"
          className="px-3 py-1 m-3 text-xs font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          ดูรายละเอียด
        </a>
      </div>
    </div>
  );
}

export default Card;
