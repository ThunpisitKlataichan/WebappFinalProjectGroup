import { NavLink, Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"




function Header () {
  return (
    <header className="sticky top-0 z-50 h-[var(--nav-h)] bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">

        
        <ul className="flex items-center space-x-6">
          <li>
       <HashLink smooth to="/#Product" className="text-gray-600 hover:text-black"> Shop  </HashLink>
          </li>
            <li> <HashLink smooth to="/#contact" className="text-gray-600 hover:text-black"> Contact </HashLink>
        </li>
        <li><NavLink to="/CartPage" className="text-gray-600 hover:text-black">Cart</NavLink></li>
        </ul>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl border shadow-sm">
          <Link to="/" className="px-4 py-1">Music2hand</Link>
        </div>

        <ul className="flex items-center space-x-6">
          <li><NavLink to="/OrderStatusPage" className="text-gray-600 hover:text-black">OrderStatus</NavLink></li>
          <li><NavLink to="/order" className="text-gray-600 hover:text-black">Order</NavLink></li>
          <li><NavLink to="/login" className="text-gray-600 hover:text-black">Login</NavLink></li>
          
        </ul>

      </nav>
    </header>
  );
}

export default Header;