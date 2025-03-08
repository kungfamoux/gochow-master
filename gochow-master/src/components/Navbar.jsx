import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const { cart, setIsCartOpen } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0)
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.classList.toggle('menu-open')
  }

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'Menu', href: 'menu' },
    { name: 'Services', href: 'services' },
    { name: 'About', href: 'about' }
  ]
  
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.getElementById(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    if (isMobileMenuOpen) {
      toggleMobileMenu()
    }
  }
  
  return (
    <nav className='bg-[#FBFAF9] w-full font-Montserrat p-6 relative z-50'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex items-center gap-12'>
          <h1 className='text-[#FA6000] text-2xl font-bold'>GoChow</h1>
          
          {/* Desktop Menu */}
          <div className='hidden md:flex gap-8'>
            {navItems.map(item => (
              <a 
                key={item.href}
                href={`#${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className='text-[#674F41] hover:text-[#FA6000] transition-colors'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        
        <div className='flex gap-4 items-center'>
          <button 
            onClick={() => setIsCartOpen(true)}
            className='relative p-2 text-[#674F41] hover:text-[#FA6000]'
          >
            🛒
            {cartItemCount > 0 && (
              <span className='absolute -top-1 -right-1 bg-[#FA6000] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full animate-bounce'>
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Animated Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className='md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50'
          >
            <span className={`w-6 h-0.5 bg-[#674F41] transition-all duration-300 ${
              isMobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-[#674F41] transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`w-6 h-0.5 bg-[#674F41] transition-all duration-300 ${
              isMobileMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
            }`}></span>
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div className={`fixed inset-0 bg-[#FBFAF9] transition-all duration-500 z-40 ${
        isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className='flex flex-col items-center justify-center h-full space-y-8'>
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-xl text-[#674F41] hover:text-[#FA6000] transform transition-all duration-500 ${
                isMobileMenuOpen 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
