import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'
import Body from './components/body.tsx'
import OrderPage from "./components/order/OrderPage.tsx"
import LoginPage from "./components/Auth/LoginPage.tsx"

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
          <Routes>
              <Route path ="/" element={<Body/>} />
              <Route path ="/order" element={<OrderPage/>} />
              <Route path="/login" element={<LoginPage />} />
          </Routes>
       </BrowserRouter>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
