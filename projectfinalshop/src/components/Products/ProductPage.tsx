import Filter from './Filter'
import ProductCard from './Productcard'
import FenderProduct1 from '../images/fender/FD-AM-PRO-II-STRAT-MSG-RW-01.png';
import FenderProduct2 from '../images/fender/FD-AM-PRO-II-TELE-MMB-MN-01.png'
import BlackstarProdust1 from '../images/blackstar/BA202002-H-HT-CLUB-40-MK-III-FRONT__60707.jpg'
import SonicakeProdust1 from '../images/sonicake/QME-50.jpg'
import YamahaProdust1 from '../images/yamaha/f310.jpg'
import YamahaProdust2 from '../images/yamaha/PSR-E283.jpg'

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
            <ProductCard
              img={FenderProduct1}
              brand="Fender"
              model="American Professional II Stratocaster"
              price="฿60,000"
              specs={[
                "Body: Alder",
                "Neck: Maple / Rosewood",
                "Pickups: 3x V-Mod II Single-Coil Strat®",
                "Controls: Master Volume, 2 Tone, 5-Way",
              ]}
              showBuy //แสดงปุ่ม “สั่งซื้อ”
            />

            <ProductCard
              img={FenderProduct2}
              brand="Fender"
              model="American Professional II Telecaster"
              price="฿60,000"
              specs={[
                "Body: Alder",
                "Neck: Maple",
                "Pickups: 2x V-Mod II Single-Coil Tele®",
                "Controls: Master Volume, Master Tone, 3-Way",
              ]}
              showBuy
            />

            <ProductCard
              img={BlackstarProdust1}
              brand="Blackstar"
              model="HT-Club 40 MKII 6L6"
              price="฿20,000"
              specs={[
                "Innovative 40 Watt valve combo",
                "2 x ECC83 and 2 x 6L6 valves",
                "High gain overdrive channel",
                "Digital Reverb with Dark/Light switch",
              ]}
              showBuy
            />

            <ProductCard
              img={SonicakeProdust1}
              brand="Sonicake"
              model="QME-50"
              price="฿3,000"
              specs={[
                "24-bit 44.1kHz signal processing",
                "Over 130 quality effects",
                "40 amp types / 50 reverb presets",
              ]}
              showBuy
            />

            <ProductCard
              img={YamahaProdust1}
              brand="Yamaha"
              model="F310"
              price="฿4,000"
              specs={[
                "Body: Spruce top, Nato back",
                "Fingerboard: Rosewood",
                'Scale Length: 636mm (25")',
                
                ]}
              showBuy />

            <ProductCard
              img={YamahaProdust2}
              brand="Yamaha"
              model="PSR-E283"
              price="฿4,000"
              specs={[
                "410 high-quality Voices, 150 Styles",
                "122 Songs, Smart Chord",
                'Stereo Speakers (12cm x 2)',
              ]} showBuy />

              <ProductCard
              img={YamahaProdust2}
              brand="Yamaha"
              model="PSR-E283"
              price="฿4,000"
              specs={[
                "410 high-quality Voices, 150 Styles",
                "122 Songs, Smart Chord",
                'Stereo Speakers (12cm x 2)',
              ]} showBuy />

              <ProductCard
              img={YamahaProdust2}
              brand="Yamaha"
              model="PSR-E283"
              price="฿4,000"
              specs={[
                "410 high-quality Voices, 150 Styles",
                "122 Songs, Smart Chord",
                'Stereo Speakers (12cm x 2)',
              ]} showBuy />

              <ProductCard
              img={YamahaProdust2}
              brand="Yamaha"
              model="PSR-E283"
              price="฿4,000"
              specs={[
                "410 high-quality Voices, 150 Styles",
                "122 Songs, Smart Chord",
                'Stereo Speakers (12cm x 2)',
              ]} showBuy />

              <ProductCard
              img={YamahaProdust2}
              brand="Yamaha"
              model="PSR-E283"
              price="฿4,000"
              specs={[
                "410 high-quality Voices, 150 Styles",
                "122 Songs, Smart Chord",
                'Stereo Speakers (12cm x 2)',
              ]} showBuy />

              <ProductCard
              img={YamahaProdust2}
              brand="Yamaha"
              model="PSR-E283"
              price="฿4,000"
              specs={[
                "410 high-quality Voices, 150 Styles",
                "122 Songs, Smart Chord",
                'Stereo Speakers (12cm x 2)',
              ]} showBuy />

              <ProductCard
              img={YamahaProdust2}
              brand="Yamaha"
              model="PSR-E283"
              price="฿4,000"
              specs={[
                "410 high-quality Voices, 150 Styles",
                "122 Songs, Smart Chord",
                'Stereo Speakers (12cm x 2)',
              ]} showBuy />
          </div> 
        </main>
      </div>
    </section>

        </>
    )
}

export default ProductPage