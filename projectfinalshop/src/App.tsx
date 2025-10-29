import { Routes, Route } from "react-router-dom"
import './App.css'
import OrderPage from "./components/order/OrderPage.tsx"
import LoginPage from "./components/Auth/LoginPage.tsx"
import Home from './components/Home.tsx'
import RegisterPage from './components/Auth/RegisterPage';
import OrderStatusPage from "./components/OrderStatus/OrderStatusPage.tsx"
import CartPage from "./components/CartPage.tsx"
import HomeSalesPage from "./components/SalesPage/HomeSalesPage.tsx"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/OrderStatusPage" element={<OrderStatusPage />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/SalesPage" element={<HomeSalesPage/>} />
      </Routes>
    </>
  )
}

export default App
