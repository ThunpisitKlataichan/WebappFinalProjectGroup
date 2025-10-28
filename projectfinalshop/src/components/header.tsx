function Header (){
    return (
        <>
        <header className="sticky top-0 z-50 h-[var(--nav-h)] bg-white/80 backdrop-blur border-b">
    <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
      
      <ul className="flex items-center space-x-6">
        <li><a href="index.html"
            className="hover:text-black relative font-semibold text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-black">Home</a>
        </li>
        <li><a href="#contact" className="hover:text-black text-gray-600">Contact</a></li>
        <li><a href="#products" className="hover:text-black text-gray-600">Shop</a></li>
      </ul>

      <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl border  shadow-sm">
        <a href="#top" className="px-4 py-1 ">Music2hand</a>
      </div>
      <ul className="flex items-center space-x-6">
        <li><a href="#brand" className="hover:text-black text-gray-600">Brand</a></li>
        <li><a href="order.html" className="hover:text-black text-gray-600">Order</a></li>
        <li><a href="login.html" className="hover:text-black text-gray-600 ">Login</a></li>
      </ul>
    </nav>
  </header>
        </>
    )
}

export default Header