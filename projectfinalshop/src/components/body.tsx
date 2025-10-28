import { useState, useEffect } from "react";
import axios from "axios";
import Slideimage from "./Slideimages.tsx";
import ShowCard from "./Products/ShowCard.tsx";
import ProductPage from "./Products/ProductPage.tsx";

interface InstrumentProps {
  _id: string;
  imageUrl: string; // ต้องเป็น imageUrl เพื่อให้ตรงกับ DB
  brand: string;
  model: string;
  price: number;
  stock: number; // เพิ่ม stock เข้าไปเพื่อให้ครบถ้วน
  description: string;
  isShown: boolean; // 💡 ใช้ isShown
  showBuy?: boolean; // Prop ที่ใช้ใน React ไม่ใช่ DB
}

function Body() {
  const [instruments, setInstruments] = useState<InstrumentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "http://localhost:3000/instruments";

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get<InstrumentProps[]>(API_URL);
        setInstruments(response.data);
      } catch (error) {
        console.error("Error fetching data from NestJS API:", error);
        setInstruments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchInstruments();
  }, []);

  const recommendedInstruments = instruments.filter(
    (item) => item.isShown === true
  );

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">Loading products...</div>
    );
  }

  return (
    <>
      <Slideimage />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">Recommended products :</h2>
        {/* 💡 ใช้ข้อมูลที่ถูกกรองแล้ว */}
        <ShowCard dataset={recommendedInstruments} />
      </div>
      <ProductPage />
    </>
  );
}

export default Body;
