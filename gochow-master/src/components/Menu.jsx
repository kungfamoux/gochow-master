import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { sendOrderConfirmation } from '../services/emailService'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Popular')
  const { addToCart, setIsCartOpen } = useCart()
  
  const categories = [
    'Popular', 
    'Soups', 
    'Swallow', 
    'Rice Dishes', 
    'Small Chops', 
    'Protein', 
    'Drinks',
    'Desserts'
  ]
  
  const menuItems = [
    // Soups
    {
      name: "Egusi Soup",
      category: "Soups",
      price: 2500,
      rating: 4.8,
      prepTime: "25-30",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Traditional Nigerian soup made with ground melon seeds and assorted meat",
      tags: ["Soup", "Popular"]
    },
    {
      name: "Oha Soup",
      category: "Soups",
      price: 2800,
      rating: 4.7,
      prepTime: "30-35",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Delicious Igbo soup made with Oha leaves and assorted meat",
      tags: ["Soup"]
    },
    // Swallow
    {
      name: "Pounded Yam",
      category: "Swallow",
      price: 800,
      rating: 4.9,
      prepTime: "15-20",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Smooth and fluffy pounded yam",
      tags: ["Swallow", "Popular"]
    },
    {
      name: "Eba",
      category: "Swallow",
      price: 500,
      rating: 4.6,
      prepTime: "10-15",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Made from cassava flour (garri)",
      tags: ["Swallow"]
    },
    // Rice Dishes
    {
      name: "Jollof Rice",
      category: "Rice Dishes",
      price: 2000,
      rating: 4.9,
      prepTime: "30-40",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Nigerian party-style jollof rice with chicken",
      tags: ["Rice", "Popular"]
    },
    {
      name: "Native Rice",
      category: "Rice Dishes",
      price: 2200,
      rating: 4.7,
      prepTime: "35-45",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Local rice prepared with palm oil and traditional spices",
      tags: ["Rice"]
    },
    // Small Chops
    {
      name: "Puff Puff",
      category: "Small Chops",
      price: 500,
      rating: 4.8,
      prepTime: "15-20",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Deep-fried dough balls, sweet and fluffy",
      tags: ["Snacks", "Popular"]
    },
    {
      name: "Meat Pie",
      category: "Small Chops",
      price: 700,
      rating: 4.6,
      prepTime: "10-15",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Nigerian pastry filled with minced meat and vegetables",
      tags: ["Snacks"]
    },
    // Additional Soups
    {
      id: 'soup-3',
      name: "Nsala Soup",
      category: "Soups",
      price: 3000,
      rating: 4.8,
      prepTime: "30-35",
      image: "path-to-image",
      description: "White soup with catfish and traditional spices",
      tags: ["Soup"]
    },
    {
      id: 'soup-4',
      name: "Banga Soup",
      category: "Soups",
      price: 2800,
      rating: 4.7,
      prepTime: "35-40",
      image: "path-to-image",
      description: "Palm nut soup with assorted meat and fish",
      tags: ["Soup"]
    },
    // Additional Swallow
    {
      id: 'swallow-3',
      name: "Amala",
      category: "Swallow",
      price: 600,
      rating: 4.7,
      prepTime: "10-15",
      image: "path-to-image",
      description: "Smooth yam flour swallow",
      tags: ["Swallow"]
    },
    {
      id: 'swallow-4',
      name: "Semo",
      category: "Swallow",
      price: 700,
      rating: 4.6,
      prepTime: "10-15",
      image: "path-to-image",
      description: "Semolina swallow",
      tags: ["Swallow"]
    },
    // Protein
    {
      id: 'protein-1',
      name: "Assorted Meat",
      category: "Protein",
      price: 2500,
      rating: 4.9,
      prepTime: "20-25",
      image: "path-to-image",
      description: "Mix of cow meat, tripe, and intestines",
      tags: ["Protein", "Popular"]
    },
    {
      id: 'protein-2',
      name: "Grilled Fish",
      category: "Protein",
      price: 3500,
      rating: 4.8,
      prepTime: "25-30",
      image: "path-to-image",
      description: "Whole grilled catfish with pepper sauce",
      tags: ["Protein", "Popular"]
    },
    // Drinks
    {
      id: 'drink-1',
      name: "Palm Wine",
      category: "Drinks",
      price: 1000,
      rating: 4.7,
      prepTime: "5-10",
      image: "path-to-image",
      description: "Fresh palm wine",
      tags: ["Drinks"]
    },
    {
      id: 'drink-2',
      name: "Zobo",
      category: "Drinks",
      price: 500,
      rating: 4.6,
      prepTime: "5-10",
      image: "path-to-image",
      description: "Hibiscus drink with fruits and spices",
      tags: ["Drinks", "Popular"]
    },
    // Desserts
    {
      id: 'dessert-1',
      name: "Chin Chin",
      category: "Desserts",
      price: 500,
      rating: 4.8,
      prepTime: "10-15",
      image: "path-to-image",
      description: "Crunchy fried pastry snack",
      tags: ["Desserts"]
    },
    {
      id: 'dessert-2',
      name: "Coconut Candy",
      category: "Desserts",
      price: 300,
      rating: 4.7,
      prepTime: "5-10",
      image: "path-to-image",
      description: "Sweet coconut treats",
      tags: ["Desserts"]
    }
  ]

  const filteredItems = activeCategory === 'Popular' 
    ? menuItems.filter(item => item.tags.includes('Popular'))
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <div className='bg-[#FBFAF9] font-Montserrat py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-[45px] font-bold'>Our <span className='text-[#FA6000]'>Menu</span></h2>
          <p className='text-[#674F41] text-lg mt-4 max-w-2xl mx-auto'>
            Explore our selection of authentic Nigerian dishes prepared with the finest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-[#FA6000] text-white'
                  : 'border-2 border-[#FA6000] text-[#FA6000] hover:bg-[#FA6000] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className='bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow'
            >
              <div className='h-48 overflow-hidden'>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                />
              </div>
              <div className='p-6'>
                <div className='flex justify-between items-start mb-4'>
                  <h3 className='text-xl font-bold'>{item.name}</h3>
                  <p className='text-[#FA6000] font-bold'>₦{item.price.toLocaleString()}</p>
                </div>
                <p className='text-[#674F41] text-sm mb-4'>{item.description}</p>
                <div className='flex justify-between items-center'>
                  <div className='flex items-center gap-2'>
                    <span className='text-yellow-500'>⭐</span>
                    <span className='text-sm'>{item.rating}</span>
                    <span className='text-sm text-[#674F41]'>• {item.prepTime} mins</span>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart(item)
                      setIsCartOpen(true)
                    }}
                    className='bg-[#FA6000] text-white px-4 py-2 rounded-full text-sm hover:bg-[#ea580c] transition-colors'
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu 