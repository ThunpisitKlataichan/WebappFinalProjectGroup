import FenderSlide from './images/fender/fender_Big1.webp'
import YamahaSlide from './images/yamaha/Yamaha_big2.2.jpg'
import SonicakeSlide from './images/sonicake/Sonicake_big3.1.jpg'
import BlackstarSlide from './images/blackstar/Blackstar_big4.1.jpg'




function Slideimage(){
    return<>
 <section className="relative w-full overflow-hidden slider flex flex-col rounded-2xl shadow-md ">
      <div className="relative w-full pt-[56.25%]">

        <div className="slider-track absolute inset-0 flex w-[400%] h-full animate-[Pic4_20s_linear_infinite]">
          <img src={FenderSlide} alt="Fender Product"
            className="w-1/4 h-full flex-none object-contain bg-black object-cover" />
          <img src={YamahaSlide} alt="Yamaha Product"
            className="w-1/4 h-full flex-none object-contain bg-black object-cover" />
          <img src={SonicakeSlide} alt=""
            className="w-1/4 h-full flex-none object-contain bg-black object-cover" />
          <img src={BlackstarSlide} alt=""
            className="w-1/4 h-full flex-none object-contain bg-black object-cover" />
        </div>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl font-bold drop-shadow ">Music 2 hand</h1>
          <p className="text-white/90 mt-2 max-w-xl text-sm sm:text-base ">
            ถ้าคุณต้องการหาสินค้ากีตาร์ มือ2 ในราคาที่คุ้มค่าและคุณภาพที่ดีเยี่ยม
            ของแท้แน่นอน ร้าน music2hand คุณจะพบสินค้ามากมาย
          </p>
        </div>
      </div>
    </section>
    </>
}
export default Slideimage