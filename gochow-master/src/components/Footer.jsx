import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#FFEFE5] font-Montserrat py-12'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid grid-cols-4 gap-8 mb-8'>
          {/* Company Info */}
          <div>
            <h2 className='text-[#FA6000] text-2xl font-bold mb-4'>GoChow</h2>
            <p className='text-[#674F41] mb-4'>Your favorite food delivery app in Enugu, bringing delicious meals right to your doorstep.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2 text-[#674F41]'>
              <li><a href="#home" className='hover:text-[#FA6000]'>Home</a></li>
              <li><a href="#about" className='hover:text-[#FA6000]'>About Us</a></li>
              <li><a href="#services" className='hover:text-[#FA6000]'>Services</a></li>
              <li><a href="#restaurants" className='hover:text-[#FA6000]'>Restaurants</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-bold mb-4'>Contact Us</h3>
            <ul className='space-y-2 text-[#674F41]'>
              <li>Email: info@gochow.com</li>
              <li>Phone: +234 123 456 7890</li>
              <li>Address: Enugu, Nigeria</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='font-bold mb-4'>Newsletter</h3>
            <p className='text-[#674F41] mb-4'>Subscribe to get updates on special offers!</p>
            <div className='flex gap-2'>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className='px-4 py-2 rounded-full flex-grow'
              />
              <button className='bg-[#FA6000] text-white px-4 py-2 rounded-full hover:bg-[#ea580c]'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-[#674F41]/20 pt-8 mt-8'>
          <div className='flex justify-between items-center text-[#674F41]'>
            <p>&copy; 2025 GoChow. All rights reserved.</p>
            <div className='flex gap-6'>
              <a href="#terms" className='hover:text-[#FA6000]'>Terms & Conditions</a>
              <a href="#privacy" className='hover:text-[#FA6000]'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 