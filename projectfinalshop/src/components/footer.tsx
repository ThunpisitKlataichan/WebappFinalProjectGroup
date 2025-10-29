function Footer(){
    return(
        <>
           <footer id="contact" className="border-t mt-12  flex flex-col rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-center md:text-left">Music2Hand</h3>
            <p className="mt-3 text-sm leading-6 text-gray-700 text-center md:text-left">
              ขอบคุณลูกค้าทุกท่านที่เข้ามาเยี่ยมหรือใช้บริการจากร้าน music2handติดตามโปรอัปเดตสินค้าใหม่ๆ คู่รุ่นฮิต
              มือหนึ่ง–มือสอง คัดสภาพดี และอย่าพลาดโอกาสเด็ดกับโปรโมชั่นสินค้าพิเศษที่เรานำมาดูแลทุกท่านในงบของคุณ
              ขอบคุณจาก <strong>music2hand</strong> </p>
            
            <div className="mt-6 text-sm text-gray-800">
              <p className="font-semibold">ติดต่อเราได้ที่</p>
              <p>อีเมล์ : <a href="mailto:music2hand@gmail.com" className="underline">music2hand@gmail.com</a></p>
              <p>เบอร์โทร : 098-xxx-xxxx</p>
            </div>
            <div className="mt-4 flex items-center gap-4 justify-center md:justify-start">
              
              <a href="#" aria-label="Facebook" className="p-2 rounded-full border hover:bg-gray-50">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path
                    d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.62.76-1.62 1.55V12h2.76l-.44 2.88h-2.32v6.99A10 10 0 0 0 22 12Z" />
                </svg>
              </a>
              
              <a href="#" aria-label="Instagram" className="p-2 rounded-full border hover:bg-gray-50">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path
                    d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 8.2Zm5.1-.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
                </svg>
              </a>
              
              <a href="#" aria-label="YouTube" className="p-2 rounded-full border hover:bg-gray-50">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path
                    d="M23.5 7.1a3 3 0 0 0-2.1-2.1C19.6 4.5 12 4.5 12 4.5s-7.6 0-9.4.5A3 3 0 0 0 .5 7.1 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.9ZM9.8 15.3V8.7l6 3.3-6 3.3Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 md:col-span-2">
            <div>
              <h4 className="font-semibold">Brand</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><a href="#brand" className="hover:underline">Fender</a></li>
                <li><a href="#products" className="hover:underline">Blackstar</a></li>
                <li><a href="#top" className="hover:underline">Sonicake</a></li>
                <li><a href="#contact" className="hover:underline">Yamaha</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Catagory</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><a href="#brand" className="hover:underline">Guitar</a></li>
                <li><a href="#products" className="hover:underline">Electric guitar</a></li>
                <li><a href="#top" className="hover:underline">Bass guitar</a></li>
                <li><a href="#contact" className="hover:underline">multi Effect</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">About Us</h4>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li><a href="" className="hover:underline">ทางมาร้าน Map</a></li>
                <li><a href="" className="hover:underline">Open daily : 11.00-20.00</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center text-xs text-gray-500">
          © 2025 Music2Hand — All rights reserved.
        </div>
      </div>
    </footer>
    </>
    )
}

export default Footer