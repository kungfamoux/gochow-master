import React, { createContext, useContext, useState, useEffect } from 'react'
import { sendOrderConfirmation } from '../services/emailService'
import { sendNotification, requestNotificationPermission } from '../services/notificationService'

const CartContext = createContext()

const MAX_QUANTITY = 10
const MIN_QUANTITY = 1

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [orderHistory, setOrderHistory] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentOrder, setCurrentOrder] = useState(null)
  const [showTracking, setShowTracking] = useState(false)
  const [showOrderHistory, setShowOrderHistory] = useState(false)
  const [showOrderLookup, setShowOrderLookup] = useState(false)

  // Load orders from localStorage on mount
  useEffect(() => {
    const savedOrders = localStorage.getItem('orderHistory')
    if (savedOrders) {
      setOrderHistory(JSON.parse(savedOrders))
    }

    // Request notification permission
    requestNotificationPermission()
  }, [])

  // Save orders to localStorage when updated
  useEffect(() => {
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory))
  }, [orderHistory])

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
    try {
      setIsLoading(true)
      setError(null)
      
      const newOrder = {
        id: `GO${Math.random().toString().slice(2, 10)}`,
        items: [...cart],
        total: getCartTotal() + 1000,
        status: 'pending',
        ...orderDetails,
        date: new Date().toISOString()
      }

      // Send email notification
      await sendOrderConfirmation(newOrder)

      // Send push notification
      sendNotification('Order Placed Successfully!', {
        body: `Your order #${newOrder.id} has been received and is being processed.`,
        tag: newOrder.id
      })

      // Update order history
      setOrderHistory(prev => [newOrder, ...prev])
      setCart([])
      setCurrentOrder(newOrder.id)
      setShowTracking(true)

      return newOrder.id
    } catch (error) {
      setError(error.message)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const canAddToCart = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId)
    return !item || item.quantity < MAX_QUANTITY
  }

  const findOrder = (orderId) => {
    return orderHistory.find(order => order.id === orderId)
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
      error,
      currentOrder,
      showTracking,
      setShowTracking,
      showOrderHistory,
      setShowOrderHistory,
      showOrderLookup,
      setShowOrderLookup,
      findOrder
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext) 