import Filter from './Filter'
import ProductCard from './Productcard'

function ProductPage (){
    return(
        <>
       <section  id="Product" className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <h2 className="text-2xl font-semibold text-center mb-8">Product</h2>

  <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
    <aside className="min-w-0">
          <div className="md:sticky md:top-20 w-full max-w-[260px] md:max-w-none">
            <div className="md:sticky md:top-20 bg-white rounded-2xl shadow p-4 w-full overflow-hidden">
              <Filter />
            </div>
          </div>
        </aside>

        {/* โซนการ์ดสินค้า */}
        <main className="min-w-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
          </div> 
        </main>
      </div>
    </section>

        </>
    )
}

export default ProductPage