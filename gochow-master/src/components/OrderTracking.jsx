import React, { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

const OrderTracking = ({ orderId, onClose }) => {
  const [currentStatus, setCurrentStatus] = useState('preparing')
  const [progress, setProgress] = useState(0)
  const [estimatedTime, setEstimatedTime] = useState(45)
  const [riderDetails, setRiderDetails] = useState(null)
  
  const stages = [
    { id: 'preparing', label: 'Preparing Order', icon: '👨‍🍳', time: '15-20 mins' },
    { id: 'ready', label: 'Ready for Pickup', icon: '📦', time: '5 mins' },
    { id: 'picked', label: 'Picked by Rider', icon: '🛵', time: '15-20 mins' },
    { id: 'delivered', label: 'Delivered', icon: '✅', time: '0 mins' }
  ]

  // Simulate order progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })

      setEstimatedTime(prev => {
        if (prev <= 0) return 0
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Update status based on progress
  useEffect(() => {
    if (progress < 35) {
      setCurrentStatus('preparing')
    } else if (progress < 50) {
      setCurrentStatus('ready')
      // Simulate rider assignment
      setRiderDetails({
        name: 'John Doe',
        phone: '+234 123 456 7890',
        rating: 4.8,
        image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg'
      })
    } else if (progress < 100) {
      setCurrentStatus('picked')
    } else {
      setCurrentStatus('delivered')
    }
  }, [progress])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Order #{orderId}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-[#FA6000] h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Estimated Time */}
        <div className="text-center mb-8">
          <p className="text-[#674F41]">Estimated Delivery Time</p>
          <p className="text-3xl font-bold text-[#FA6000]">{estimatedTime} mins</p>
        </div>

        {/* Status Stages */}
        <div className="space-y-6">
          {stages.map((stage) => (
            <div 
              key={stage.id}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                currentStatus === stage.id ? 'bg-[#FFEFE5]' : ''
              }`}
            >
              <span className="text-2xl">{stage.icon}</span>
              <div className="flex-1">
                <h3 className="font-semibold">{stage.label}</h3>
                <p className="text-sm text-[#674F41]">{stage.time}</p>
              </div>
              {currentStatus === stage.id && (
                <span className="animate-pulse text-[#FA6000]">●</span>
              )}
            </div>
          ))}
        </div>

        {/* Rider Details */}
        {riderDetails && currentStatus !== 'delivered' && (
          <div className="mt-8 p-4 border rounded-lg">
            <h3 className="font-semibold mb-4">Your Rider</h3>
            <div className="flex items-center gap-4">
              <img 
                src={riderDetails.image} 
                alt={riderDetails.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-medium">{riderDetails.name}</p>
                <p className="text-sm text-[#674F41]">{riderDetails.phone}</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-sm">{riderDetails.rating}</span>
                </div>
              </div>
              <a 
                href={`tel:${riderDetails.phone}`}
                className="bg-[#FA6000] text-white p-2 rounded-full hover:bg-[#ea580c]"
              >
                📞
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default OrderTracking 