import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import Navbar from '../components/Navbar'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('Popular')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 })
  const [sortBy, setSortBy] = useState('name') // 'name', 'price-asc', 'price-desc', 'rating'
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
      id: 'soup-1',
      name: "Egusi Soup",
      category: "Soups",
      price: 2500,
      rating: 4.8,
      prepTime: "25-30",
      image: "https://images.pexels.com/photos/11643326/pexels-photo-11643326.jpeg",
      description: "Traditional Nigerian soup made with ground melon seeds and assorted meat",
      tags: ["Soup", "Popular"]
    },
    {
      id: 'soup-2',
      name: "Oha Soup",
      category: "Soups",
      price: 2800,
      rating: 4.7,
      prepTime: "30-35",
      image: "https://i0.wp.com/www.nigerianlazychef.com/wp-content/uploads/2016/08/IMG_7665.jpg",
      description: "Delicious Igbo soup made with Oha leaves and assorted meat",
      tags: ["Soup"]
    },
    {
      id: 'soup-3',
      name: "Nsala Soup",
      category: "Soups",
      price: 3000,
      rating: 4.8,
      prepTime: "30-35",
      image: "https://allnigerianfoods.com/wp-content/uploads/2015/02/nsala-soup.jpg",
      description: "White soup with catfish and traditional spices",
      tags: ["Soup", "Popular"]
    },
    {
      id: 'soup-4',
      name: "Banga Soup",
      category: "Soups",
      price: 2800,
      rating: 4.7,
      prepTime: "35-40",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Palm nut soup with assorted meat and fish",
      tags: ["Soup"]
    },
    {
      id: 'soup-5',
      name: "Afang Soup",
      category: "Soups",
      price: 3000,
      rating: 4.8,
      prepTime: "35-40",
      image: "https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg",
      description: "Traditional Efik soup made with Afang leaves and waterleaf",
      tags: ["Soup"]
    },
    {
      id: 'soup-6',
      name: "Okro Soup",
      category: "Soups",
      price: 2500,
      rating: 4.7,
      prepTime: "25-30",
      image: "https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg",
      description: "Fresh okra soup with assorted meat and fish",
      tags: ["Soup", "Popular"]
    },

    // Rice Dishes
    {
      id: 'rice-1',
      name: "Jollof Rice",
      category: "Rice Dishes",
      price: 2000,
      rating: 4.9,
      prepTime: "30-40",
      image: "https://images.pexels.com/photos/13485215/pexels-photo-13485215.jpeg",
      description: "Nigerian party-style jollof rice with chicken",
      tags: ["Rice", "Popular"]
    },
    {
      id: 'rice-2',
      name: "Fried Rice",
      category: "Rice Dishes",
      price: 2000,
      rating: 4.8,
      prepTime: "30-40",
      image: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg",
      description: "Nigerian-style fried rice with mixed vegetables and chicken",
      tags: ["Rice", "Popular"]
    },
    {
      id: 'rice-3',
      name: "Coconut Rice",
      category: "Rice Dishes",
      price: 2200,
      rating: 4.7,
      prepTime: "35-45",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Fragrant rice cooked in coconut milk with chicken",
      tags: ["Rice"]
    },
    {
      id: 'rice-4',
      name: "Native Rice",
      category: "Rice Dishes",
      price: 2300,
      rating: 4.7,
      prepTime: "35-40",
      image: "https://images.pexels.com/photos/7438982/pexels-photo-7438982.jpeg",
      description: "Local rice cooked with palm oil and traditional spices",
      tags: ["Rice"]
    },
    {
      id: 'rice-5',
      name: "Ofada Rice",
      category: "Rice Dishes",
      price: 2500,
      rating: 4.8,
      prepTime: "35-40",
      image: "https://images.pexels.com/photos/5409023/pexels-photo-5409023.jpeg",
      description: "Nigerian brown rice served with special ofada sauce",
      tags: ["Rice", "Popular"]
    },

    // Swallow
    {
      id: 'swallow-1',
      name: "Pounded Yam",
      category: "Swallow",
      price: 800,
      rating: 4.9,
      prepTime: "15-20",
      image: "https://images.pexels.com/photos/14537698/pexels-photo-14537698.jpeg",
      description: "Smooth and fluffy pounded yam",
      tags: ["Swallow", "Popular"]
    },
    {
      id: 'swallow-2',
      name: "Eba",
      category: "Swallow",
      price: 500,
      rating: 4.6,
      prepTime: "10-15",
      image: "https://allnigerianfoods.com/wp-content/uploads/2015/02/eba-and-egusi.jpg",
      description: "Made from cassava flour (garri)",
      tags: ["Swallow"]
    },
    {
      id: 'swallow-3',
      name: "Amala",
      category: "Swallow",
      price: 600,
      rating: 4.7,
      prepTime: "10-15",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Smooth yam flour swallow",
      tags: ["Swallow"]
    },
    {
      id: 'swallow-4',
      name: "Semo",
      category: "Swallow",
      price: 600,
      rating: 4.6,
      prepTime: "10-15",
      image: "https://images.pexels.com/photos/5409019/pexels-photo-5409019.jpeg",
      description: "Smooth semolina swallow",
      tags: ["Swallow"]
    },
    {
      id: 'swallow-5',
      name: "Wheat",
      category: "Swallow",
      price: 700,
      rating: 4.7,
      prepTime: "10-15",
      image: "https://images.pexels.com/photos/5409017/pexels-photo-5409017.jpeg",
      description: "Healthy wheat swallow",
      tags: ["Swallow"]
    },

    // Small Chops
    {
      id: 'snack-1',
      name: "Spring Rolls",
      category: "Small Chops",
      price: 1500,
      rating: 4.8,
      prepTime: "15-20",
      image: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg",
      description: "Crispy spring rolls with minced chicken and vegetables",
      tags: ["Small Chops", "Popular"]
    },
    {
      id: 'snack-2',
      name: "Samosa",
      category: "Small Chops",
      price: 1500,
      rating: 4.7,
      prepTime: "15-20",
      image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg",
      description: "Triangular pastry filled with minced meat and spices",
      tags: ["Small Chops"]
    },
    {
      id: 'snack-3',
      name: "Puff Puff",
      category: "Small Chops",
      price: 500,
      rating: 4.9,
      prepTime: "10-15",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Sweet Nigerian doughnuts",
      tags: ["Small Chops", "Popular"]
    },
    {
      id: 'snack-4',
      name: "Chicken Wings",
      category: "Small Chops",
      price: 2000,
      rating: 4.8,
      prepTime: "20-25",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
      description: "Spicy grilled chicken wings",
      tags: ["Small Chops", "Popular"]
    },
    {
      id: 'snack-5',
      name: "Meat Pie",
      category: "Small Chops",
      price: 800,
      rating: 4.7,
      prepTime: "15-20",
      image: "https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg",
      description: "Nigerian meat pie with minced beef and vegetables",
      tags: ["Small Chops"]
    },

    // Protein
    {
      id: 'protein-1',
      name: "Grilled Chicken",
      category: "Protein",
      price: 2500,
      rating: 4.8,
      prepTime: "25-30",
      image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
      description: "Marinated and grilled chicken with spicy sauce",
      tags: ["Protein", "Popular"]
    },
    {
      id: 'protein-2',
      name: "Grilled Fish",
      category: "Protein",
      price: 3500,
      rating: 4.9,
      prepTime: "25-30",
      image: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg",
      description: "Whole grilled catfish with pepper sauce",
      tags: ["Protein", "Popular"]
    },
    {
      id: 'protein-3',
      name: "Asun",
      category: "Protein",
      price: 3000,
      rating: 4.8,
      prepTime: "20-25",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Spicy peppered goat meat",
      tags: ["Protein"]
    },
    {
      id: 'protein-4',
      name: "Peppered Turkey",
      category: "Protein",
      price: 3000,
      rating: 4.8,
      prepTime: "25-30",
      image: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg",
      description: "Spicy grilled turkey with pepper sauce",
      tags: ["Protein"]
    },
    {
      id: 'protein-5',
      name: "Suya",
      category: "Protein",
      price: 2000,
      rating: 4.9,
      prepTime: "15-20",
      image: "https://images.pexels.com/photos/5409029/pexels-photo-5409029.jpeg",
      description: "Spicy grilled beef skewers with yaji spice",
      tags: ["Protein", "Popular"]
    },

    // Drinks
    {
      id: 'drink-1',
      name: "Chapman",
      category: "Drinks",
      price: 1000,
      rating: 4.8,
      prepTime: "5-10",
      image: "https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg",
      description: "Nigerian cocktail drink with Grenadine and Fanta",
      tags: ["Drinks", "Popular"]
    },
    {
      id: 'drink-2',
      name: "Zobo",
      category: "Drinks",
      price: 500,
      rating: 4.7,
      prepTime: "5-10",
      image: "https://images.pexels.com/photos/1232152/pexels-photo-1232152.jpeg",
      description: "Hibiscus drink with fruits and spices",
      tags: ["Drinks"]
    },
    {
      id: 'drink-3',
      name: "Palm Wine",
      category: "Drinks",
      price: 1000,
      rating: 4.6,
      prepTime: "5-10",
      image: "https://images.unsplash.com/photo-1549716678-0881c0cd8f85?q=80&w=1000",
      description: "Fresh palm wine",
      tags: ["Drinks"]
    },
    {
      id: 'drink-4',
      name: "Kunu",
      category: "Drinks",
      price: 500,
      rating: 4.7,
      prepTime: "5-10",
      image: "https://images.pexels.com/photos/5409031/pexels-photo-5409031.jpeg",
      description: "Traditional millet drink",
      tags: ["Drinks"]
    },
    {
      id: 'drink-5',
      name: "Fura de Nono",
      category: "Drinks",
      price: 800,
      rating: 4.6,
      prepTime: "5-10",
      image: "https://images.pexels.com/photos/5409033/pexels-photo-5409033.jpeg",
      description: "Traditional yoghurt drink with millet balls",
      tags: ["Drinks"]
    },

    // Desserts
    {
      id: 'dessert-1',
      name: "Ice Cream",
      category: "Desserts",
      price: 1500,
      rating: 4.9,
      prepTime: "5-10",
      image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
      description: "Variety of ice cream flavors with toppings",
      tags: ["Desserts", "Popular"]
    },
    {
      id: 'dessert-2',
      name: "Fruit Salad",
      category: "Desserts",
      price: 1200,
      rating: 4.7,
      prepTime: "10-15",
      image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
      description: "Fresh tropical fruit mix with cream",
      tags: ["Desserts"]
    },
    {
      id: 'dessert-3',
      name: "Chin Chin",
      category: "Desserts",
      price: 500,
      rating: 4.8,
      prepTime: "10-15",
      image: "https://images.pexels.com/photos/5409035/pexels-photo-5409035.jpeg",
      description: "Crunchy fried pastry snack",
      tags: ["Desserts"]
    },
    {
      id: 'dessert-4',
      name: "Doughnuts",
      category: "Desserts",
      price: 800,
      rating: 4.7,
      prepTime: "15-20",
      image: "https://images.pexels.com/photos/3628508/pexels-photo-3628508.jpeg",
      description: "Sweet fried doughnuts with sugar coating",
      tags: ["Desserts"]
    }
  ]

  const filterAndSortItems = () => {
    let filtered = activeCategory === 'Popular' 
      ? menuItems.filter(item => item.tags.includes('Popular'))
      : menuItems.filter(item => item.category === activeCategory)

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
      )
    }

    // Apply price filter
    filtered = filtered.filter(item => 
      item.price >= priceRange.min && item.price <= priceRange.max
    )

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default: // 'name'
        filtered.sort((a, b) => a.name.localeCompare(b.name))
    }

    return filtered
  }

  const filteredItems = filterAndSortItems()

  return (
    <div className='bg-[#FBFAF9] min-h-screen'>
      <Navbar />
      
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-[45px] font-bold'>Our <span className='text-[#FA6000]'>Menu</span></h1>
          <p className='text-[#674F41] text-lg mt-4 max-w-2xl mx-auto'>
            Explore our selection of authentic Nigerian dishes prepared with the finest ingredients
          </p>
        </div>

        {/* Search and Filters */}
        <div className='mb-8 space-y-4'>
          {/* Search Bar */}
          <div className='flex justify-center'>
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='w-full max-w-md px-4 py-2 rounded-full border-2 border-[#FA6000] focus:outline-none focus:ring-2 focus:ring-[#FA6000] focus:ring-opacity-50'
            />
          </div>

          {/* Price Range and Sort */}
          <div className='flex flex-wrap justify-center gap-4'>
            <div className='flex items-center gap-2'>
              <span>Price:</span>
              <input
                type="number"
                min="0"
                max="5000"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                className='w-24 px-2 py-1 rounded border'
              />
              <span>to</span>
              <input
                type="number"
                min="0"
                max="5000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                className='w-24 px-2 py-1 rounded border'
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className='px-4 py-2 rounded-full border'
            >
              <option value="name">Sort by Name</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
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

        {/* Results Count */}
        <div className='text-center mb-8 text-[#674F41]'>
          {filteredItems.length} items found
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

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className='text-center py-12 text-[#674F41]'>
            <p className='text-xl mb-4'>No items found</p>
            <button 
              onClick={() => {
                setSearchQuery('')
                setPriceRange({ min: 0, max: 5000 })
                setSortBy('name')
                setActiveCategory('Popular')
              }}
              className='text-[#FA6000] hover:underline'
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <Cart />
      <Footer />
    </div>
  )
}

export default MenuPage 