import { Routes, Route } from "react-router-dom"
import './App.css'
import OrderPage from "./components/order/OrderPage.tsx"
import LoginPage from "./components/Auth/LoginPage.tsx"
import Home from './components/Home.tsx'

function App() {
  return (
    <>
          <Routes>
              <Route path ="/" element={<Home/>} />
              <Route path ="/order" element={<OrderPage/>} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
    </>
  )
}

export default App
