import React, { useState } from 'react'
import { useCart } from '../context/CartContext'

const OrderLookup = ({ onClose }) => {
  const [orderId, setOrderId] = useState('')
  const [error, setError] = useState('')
  const { findOrder, setShowTracking, setCurrentOrder } = useCart()

  const handleSubmit = (e) => {
    e.preventDefault()
    const order = findOrder(orderId.trim())
    
    if (!order) {
      setError('Order not found. Please check the ID and try again.')
      return
    }

    setCurrentOrder(order.id)
    setShowTracking(true)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Track Your Order</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-1">
              Order ID
            </label>
            <input
              type="text"
              id="orderId"
              placeholder="Enter your order ID (e.g., GO12345678)"
              value={orderId}
              onChange={(e) => {
                setOrderId(e.target.value)
                setError('')
              }}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#FA6000] focus:border-transparent"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-[#FA6000] text-white py-2 rounded-lg hover:bg-[#ea580c] transition-colors"
          >
            Track Order
          </button>
        </form>
      </div>
    </div>
  )
}

export default OrderLookup 