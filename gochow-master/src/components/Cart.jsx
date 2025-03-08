import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import Checkout from './Checkout'

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, getCartTotal } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  if (!isCartOpen) return null
  if (showCheckout) return <Checkout />

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end'>
      <div className='bg-white w-full max-w-md h-full overflow-auto p-6'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold'>Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className='text-gray-500 hover:text-gray-700'
          >
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <div className='text-center text-gray-500 py-8'>
            <div className='text-4xl mb-4'>🛒</div>
            <p>Your cart is empty</p>
            <button 
              onClick={() => setIsCartOpen(false)}
              className='mt-4 text-[#FA6000] hover:text-[#ea580c]'
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className='space-y-4 mb-6'>
              {cart.map((item) => (
                <div key={item.id} className='bg-gray-50 p-4 rounded-lg'>
                  <div className='flex items-center gap-4'>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className='w-20 h-20 object-cover rounded-lg'
                    />
                    <div className='flex-1'>
                      <div className='flex justify-between'>
                        <h3 className='font-bold'>{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className='text-red-500 hover:text-red-700'
                        >
                          ✕
                        </button>
                      </div>
                      <p className='text-[#FA6000] font-semibold'>₦{item.price.toLocaleString()}</p>
                      <div className='flex items-center justify-between mt-2'>
                        <div className='flex items-center gap-3 bg-white rounded-full border px-2'>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className='w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#FA6000]'
                          >
                            -
                          </button>
                          <span className='w-8 text-center'>{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className='w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#FA6000]'
                          >
                            +
                          </button>
                        </div>
                        <p className='font-bold'>₦{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className='border-t pt-4 space-y-4'>
              <div className='space-y-2'>
                <div className='flex justify-between text-gray-600'>
                  <span>Subtotal</span>
                  <span>₦{getCartTotal().toLocaleString()}</span>
                </div>
                <div className='flex justify-between text-gray-600'>
                  <span>Delivery Fee</span>
                  <span>₦1,000</span>
                </div>
                <div className='flex justify-between text-xl font-bold pt-2 border-t'>
                  <span>Total</span>
                  <span>₦{(getCartTotal() + 1000).toLocaleString()}</span>
                </div>
              </div>

              <button 
                onClick={() => setShowCheckout(true)}
                className='w-full bg-[#FA6000] text-white py-3 rounded-full hover:bg-[#ea580c] transition-colors flex items-center justify-center gap-2'
              >
                <span>Proceed to Checkout</span>
                <span>({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
              </button>

              <button 
                onClick={() => setIsCartOpen(false)}
                className='w-full border-2 border-[#FA6000] text-[#FA6000] py-3 rounded-full hover:bg-[#FA6000] hover:text-white transition-colors'
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart 