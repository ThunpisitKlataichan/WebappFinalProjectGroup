import Slideimage from "./Sildeimages";
import Productcard from './Productcard.tsx';
import FenderProduct1 from './images/fender/FD-AM-PRO-II-STRAT-MSG-RW-01.png';


function Body (){
    return(
        <>
        <Slideimage/>

        <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">Recommended products :</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Productcard img={FenderProduct1} 
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
          
            <Productcard img={FenderProduct1} 
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
          
        <Productcard img={FenderProduct1} 
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

         <Productcard img={FenderProduct1} 
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

         <Productcard img={FenderProduct1} 
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

         <Productcard img={FenderProduct1} 
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


          </div>
        </div>
     </>
    )
}

export default Body