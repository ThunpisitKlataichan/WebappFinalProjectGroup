import { NavLink, Link } from "react-router-dom";
// ถ้าต้องเลื่อนไป section ในหน้า Home:
// npm i react-router-hash-link
// import { HashLink } from "react-router-hash-link";

function Header () {
  return (
    <header className="sticky top-0 z-50 h-[var(--nav-h)] bg-white/80 backdrop-blur border-b">
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">

        {/* ใช้ NavLink/Link แทน <a> */}
        <ul className="flex items-center space-x-6">
          <li>
            
          </li>

          <li></li>
          <li></li>
        </ul>

        <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl border shadow-sm">
          <Link to="/" className="px-4 py-1">Music2hand</Link>
        </div>

        <ul className="flex items-center space-x-6">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/order">Order</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>

      </nav>
    </header>
  );
}

export default Header;