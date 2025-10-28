import Slideimage from "./sildeimages.tsx";
import ProductCard from './productcard.tsx';
import FenderProduct1 from './images/fender/FD-AM-PRO-II-STRAT-MSG-RW-01.png';
import FenderProduct2 from './images/fender/FD-AM-PRO-II-TELE-MMB-MN-01.png'
import BlackstarProdust1 from './images/blackstar/BA202002-H-HT-CLUB-40-MK-III-FRONT__60707.jpg'
import SonicakeProdust1 from './images/sonicake/QME-50.jpg'
import YamahaProdust1 from './images/yamaha/f310.jpg'
import YamahaProdust2 from './images/yamaha/PSR-E283.jpg'
import ProductPage from "./ProductPage.tsx"

function Body (){
    return(
        <>
        <Slideimage/>

        <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Recommended products :</h2>


      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ProductCard img={FenderProduct1} 
          brand="Fender"
          model="American Professional II Stratocaster"
          price="฿60,000"
          specs={[
            "Body: Alder",
            "Neck: Maple, Maple Or Rosewood",
            "Pickups: 3x V-Mod II Single-Coil Strat®",
            "Controls: Master Volume, 2 Tone, 5-Way Switch",
          ]}
        />
          
            <ProductCard img={FenderProduct2} 
             brand="Fender"
             model="American Professional II Telecaster"
             price="฿60,000"
             specs={[
             "Body: Alder",
             "Neck: Maple, Maple Or Rosewood",
              "Pickups: 2x V-Mod II Single-Coil Tele®",
             "Controls: Master Volume, Master Tone, 3-Way Switch",
          ]}
        />
          
        <ProductCard img={BlackstarProdust1} 
          brand="Blackstar"
          model="HT-Club 40 MKll 6L6"
          price="฿20,000"
          specs={[
            "Innovative 40 Watt valve combo",
            "2 x ECC83 and 2 x 6L6 valves",
            "High gain overdrive channel",
            "Digital Reverb with Dark/Light switch",
            "1×12″ Celestion Seventy-80 speaker",
          ]}
        />

         <ProductCard img={SonicakeProdust1} 
          brand="Sonicake"
          model="Matribox"
          price="฿3,000"
          specs={[
            "- 24-bit 44.1kHz signal processing",
            "- Over 130 high quality effects",
            "- 40 legendary guitar/bass/acoustic amp types",
            "- 50+ dynamic/drive/EQ/mod/delay/reverb effects",
            "- USB audio interface function with stereo audio streaming",
          ]}
        />

         <ProductCard img={YamahaProdust1} 
          brand="Yamamha"
          model="F310"
          price="฿4,000"
          specs={[
            "Body: Spruce top, Meranti back and sides",
            "Neck: Nato",
            "Fingerboard: Rosewood",
            "bridge: Rosewood",
            "Body Shape: Traditional Western",
            "Body depth: 96-116mm (3.78-4.57 inches)",
            "Scale Length: 636mm (25.04)",
            "Tuning machines: Open chrome",
          ]}
        />

         <ProductCard img={YamahaProdust2} 
          brand="Yamaha"
          model="PSR-E283"
          price="฿4,000"
          specs={[
            "- 410 high-quality Voices, 150 auto accompaniment Styles",
            "- 122 Songs, easy Song Book",
            "- Smart Chord",
            "- Stereo Speakers (12cm x 2 / 2.5W x 2)",
            "- Battery operation (AAx6)",
          ]}
        />
          </div>
        </div>
        
       <ProductPage/>

     </>
     )
}

export default Body