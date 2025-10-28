// ShowCard.tsx
import React from 'react';
import ProductCard from './Productcard.tsx'; 
import type {ShowCardProps} from '../types/InstrumentTypes';


const ShowCard: React.FC<ShowCardProps> = ({ dataset }) => {
    
    if (!dataset || dataset.length === 0) {
        return (
            <div className="text-center py-10 text-gray-500">
                ไม่พบข้อมูลเครื่องดนตรีในระบบ
            </div>
        );
    }

    return(
        // ใช้ Grid Layout เพื่อจัดเรียง Card
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {/* 1. ใช้ .map() เพื่อวนซ้ำข้อมูลที่มาจาก NestJS API */}
            {dataset.map((instrument) => (
                
                // 2. ส่งข้อมูลแต่ละรายการไปให้ ProductCard เพื่อแสดงผล
                <ProductCard 
                    key={instrument._id} // ใช้ MongoDB ID เป็น Key เสมอ
                    imageUrl={instrument.imageUrl} 
                    brand={instrument.brand}
                    model={instrument.model}
                    price={instrument.price.toLocaleString('th-TH')} // แปลงตัวเลขเป็น String พร้อม Format
                    description={instrument.description}
                    showBuy={true} 
                    // ... ถ้า ProductCard ต้องการ Props อื่นๆ ก็เพิ่มตรงนี้
                />
            ))}
        </div>
    );
}

export default ShowCard;