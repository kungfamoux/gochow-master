import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Features from './components/Features'
import Menu from './components/Menu'
import Cart from './components/Cart'
import Footer from './components/Footer'
import { CartProvider, useCart } from './context/CartContext'
import BackToTop from './components/BackToTop'
import MenuPage from './pages/MenuPage'
import OrderTracking from './components/OrderTracking'
import OrderHistory from './components/OrderHistory'
import OrderLookup from './components/OrderLookup'
import { ThemeProvider } from './context/ThemeContext'
import CustomerSupport from './components/CustomerSupport'

const HomePage = () => (
  <div className='bg-[#FBFAF9] dark:bg-dark'>
    <Navbar />
    <Home />
    <Service />
    <Features />
    <AboutUs />
    <Footer />
    <Cart />
    <BackToTop />
  </div>
)

// Wrapper component that uses the cart context
const AppContent = () => {
  const { 
    showTracking, 
    currentOrder, 
    setShowTracking, 
    showOrderHistory, 
    setShowOrderHistory,
    showOrderLookup,
    setShowOrderLookup 
  } = useCart()

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
      {showTracking && currentOrder && (
        <OrderTracking 
          orderId={currentOrder} 
          onClose={() => setShowTracking(false)} 
        />
      )}
      {showOrderHistory && (
        <OrderHistory 
          onClose={() => setShowOrderHistory(false)} 
        />
      )}
      {showOrderLookup && (
        <OrderLookup
          onClose={() => setShowOrderLookup(false)}
        />
      )}
    </Router>
  )
}

const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
        <CustomerSupport />
      </CartProvider>
    </ThemeProvider>
  )
}

export default App 