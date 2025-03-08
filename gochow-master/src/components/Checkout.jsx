import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { 
    cart, 
    getCartTotal, 
    setIsCartOpen, 
    placeOrder, 
    isLoading,
    error
  } = useCart()
  const [checkoutStep, setCheckoutStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    deliveryInstructions: '',
    paymentMethod: 'cash'
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setCheckoutStep(checkoutStep + 1)
  }

  const deliveryFee = 1000 // ₦1000 delivery fee
  const total = getCartTotal()
  const grandTotal = total + deliveryFee

  const handlePlaceOrder = async () => {
    try {
      console.log('Starting order placement...')
      
      // Validate email
      if (!formData.email) {
        throw new Error('Email is required')
      }

      const order = await placeOrder({
        ...formData,
        status: 'pending'
      })

      console.log('Order placed successfully:', order)
      setCheckoutStep(3)
    } catch (error) {
      console.error('Order placement failed:', error)
      alert(`Failed to place order: ${error.message}`)
    }
  }

  // Add loading spinner component
  const LoadingSpinner = () => (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-lg flex flex-col items-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#FA6000]'></div>
        <p className='mt-4 text-gray-600'>Processing your order...</p>
      </div>
    </div>
  )

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end'>
      {isLoading && <LoadingSpinner />}
      <div className='bg-white w-full max-w-2xl h-full overflow-auto p-6'>
        {error && (
          <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
            {error}
          </div>
        )}
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-2xl font-bold'>Checkout</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className='text-gray-500 hover:text-gray-700'
          >
            ✕
          </button>
        </div>

        {/* Progress Steps */}
        <div className='flex justify-between mb-8'>
          {['Delivery Details', 'Payment', 'Confirmation'].map((step, index) => (
            <div 
              key={step}
              className={`flex items-center ${index < checkoutStep ? 'text-[#FA6000]' : 'text-gray-400'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 
                ${index + 1 === checkoutStep ? 'bg-[#FA6000] text-white' : 
                  index + 1 < checkoutStep ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
                {index + 1 < checkoutStep ? '✓' : index + 1}
              </div>
              {step}
            </div>
          ))}
        </div>

        {checkoutStep === 1 && (
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-gray-700 mb-2'>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Delivery Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]'
                rows="3"
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-2'>Delivery Instructions (Optional)</label>
              <textarea
                name="deliveryInstructions"
                value={formData.deliveryInstructions}
                onChange={handleInputChange}
                className='w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000]'
                rows="2"
              />
            </div>
            <button 
              type="submit"
              className='w-full bg-[#FA6000] text-white py-3 rounded-full hover:bg-[#ea580c] transition-colors'
            >
              Continue to Payment
            </button>
          </form>
        )}

        {checkoutStep === 2 && (
          <div className='space-y-6'>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='font-bold mb-4'>Payment Method</h3>
              <div className='p-4 border rounded-lg'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <span className='text-2xl'>💵</span>
                    <div>
                      <h4 className='font-semibold'>Cash on Delivery</h4>
                      <p className='text-sm text-gray-500'>Pay when you receive your order</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gray-50 p-6 rounded-lg'>
              <h3 className='font-bold mb-4'>Order Summary</h3>
              <div className='space-y-2'>
                {cart.map(item => (
                  <div key={item.id} className='flex justify-between text-sm'>
                    <span>{item.quantity}x {item.name}</span>
                    <span>₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
                <div className='border-t pt-2 mt-2'>
                  <div className='flex justify-between'>
                    <span>Subtotal</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Delivery Fee</span>
                    <span>₦{deliveryFee.toLocaleString()}</span>
                  </div>
                  <div className='flex justify-between font-bold text-lg pt-2 border-t mt-2'>
                    <span>Total</span>
                    <span>₦{grandTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex gap-4'>
              <button 
                onClick={() => setCheckoutStep(1)}
                className='w-1/2 border-2 border-[#FA6000] text-[#FA6000] py-3 rounded-full hover:bg-[#FA6000] hover:text-white transition-colors'
                disabled={isLoading}
              >
                Back
              </button>
              <button 
                onClick={handlePlaceOrder}
                className='w-1/2 bg-[#FA6000] text-white py-3 rounded-full hover:bg-[#ea580c] transition-colors disabled:opacity-50'
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </div>
        )}

        {checkoutStep === 3 && (
          <div className='text-center space-y-6'>
            <div className='text-6xl mb-4'>🎉</div>
            <h3 className='text-2xl font-bold text-[#FA6000]'>Order Placed Successfully!</h3>
            <p className='text-gray-600'>
              Thank you for your order. We'll send you a confirmation email shortly.
            </p>
            <div className='bg-gray-50 p-6 rounded-lg text-left'>
              <h4 className='font-bold mb-2'>Order Details</h4>
              <p>Order Number: #GO{Math.random().toString().slice(2, 10)}</p>
              <p>Estimated Delivery Time: 45-60 minutes</p>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)}
              className='w-full bg-[#FA6000] text-white py-3 rounded-full hover:bg-[#ea580c] transition-colors'
            >
              Back to Menu
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout 