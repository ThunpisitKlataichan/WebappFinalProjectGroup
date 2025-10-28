// ProductPage.tsx (โค้ดที่แก้ไขแล้ว)

import Filter from "./Filter";
import ProductCard from "./Productcard.tsx"; // ต้อง import ProductCard
import type { ProductPageProps } from "../types/InstrumentTypes";

const ProductPage: React.FC<ProductPageProps> = ({ datasetProd }) => {
  return (
    <>
      <section id="Product" className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <h2 className="text-2xl font-semibold text-center mb-8">Product</h2>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
          {/* 1. ส่วน Filter/Sidebar */}
          <aside className="min-w-0">
            <div className="md:sticky md:top-20 w-full max-w-[260px] md:max-w-none">
              <div className="md:sticky md:top-20 bg-white rounded-2xl shadow p-4 w-full overflow-hidden">
                <Filter />{" "}
              </div>
            </div>
          </aside>

          <main className="min-w-0">
            {/* 2. 💡 จัด Grid Layout ให้กับการ์ดสินค้า */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* 3. วนลูปเรียก ProductCard */}
              {datasetProd.map((instrument) => (
                <ProductCard
                  key={instrument._id}
                  imageUrl={instrument.imageUrl}
                  brand={instrument.brand}
                  model={instrument.model}
                  price={instrument.price.toLocaleString("th-TH")}
                  description={instrument.description}
                  showBuy={false}
                />
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
