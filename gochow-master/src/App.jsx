import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Features from './components/Features'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { CartProvider } from './context/CartContext'
import BackToTop from './components/BackToTop'

const App = () => {
  return (
    <CartProvider>
      <div className='bg-[#FBFAF9]'>
        <Navbar />
        <Home />
        <Service />
        <Features />
        <Menu />
        <AboutUs />
        <Footer />
        <Cart />
        <BackToTop />
      </div>
    </CartProvider>
  )
}

export default App

