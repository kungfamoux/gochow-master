import React, { createContext, useContext, useState } from 'react'
import { sendOrderConfirmation } from '../services/emailService'

const CartContext = createContext()

const MAX_QUANTITY = 10
const MIN_QUANTITY = 1

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [orderHistory, setOrderHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        if (existingItem.quantity >= MAX_QUANTITY) {
          alert(`Maximum quantity (${MAX_QUANTITY}) reached for this item`)
          return prevCart
        }
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId))
  }

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < MIN_QUANTITY) {
      removeFromCart(itemId)
      return
    }
    if (newQuantity > MAX_QUANTITY) {
      alert(`Maximum quantity (${MAX_QUANTITY}) reached for this item`)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const placeOrder = async (orderDetails) => {
    setIsLoading(true)
    setError(null)
    try {
      const newOrder = {
        id: `GO${Math.random().toString().slice(2, 10)}`,
        items: [...cart],
        total: getCartTotal() + 1000, // Including delivery fee
        status: orderDetails.status,
        ...orderDetails,
        date: new Date().toISOString()
      }

      // Send email notification
      await sendOrderConfirmation(newOrder)

      // Update order history
      setOrderHistory(prev => [newOrder, ...prev])
      
      // Clear cart
      setCart([])
      
      return newOrder
    } catch (error) {
      setError('Failed to process order. Please try again.')
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const canAddToCart = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId)
    return !item || item.quantity < MAX_QUANTITY
  }

  return (
    <CartContext.Provider value={{
      cart,
      isCartOpen,
      setIsCartOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      getCartTotal,
      placeOrder,
      orderHistory,
      canAddToCart,
      isLoading,
      error
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext) 