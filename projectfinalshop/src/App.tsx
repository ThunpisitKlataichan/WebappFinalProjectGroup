import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header.tsx'
import Footer from './components/footer.tsx'
import Body from './components/body.tsx'

function App() {

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
