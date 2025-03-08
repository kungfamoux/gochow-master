import React from 'react'

const Home = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div id="home" className='min-h-screen font-Montserrat relative'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[#FFEFE5] opacity-50 clip-diagonal'></div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='grid md:grid-cols-2 gap-8 items-center min-h-screen py-20'>
          {/* Text Content */}
          <div className='space-y-6 text-center md:text-left'>
            <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
              Delicious Food
              <span className='text-[#FA6000] block'>Delivered To Your</span>
              Doorstep
            </h1>
            
            <p className='text-[#674F41] text-lg md:text-xl max-w-md'>
              Experience the best Nigerian cuisine delivered fresh and hot to your location in Enugu.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
              <button 
                onClick={() => handleScroll('menu')}
                className='px-8 py-3 bg-[#FA6000] text-white rounded-full hover:bg-[#ea580c] transition-all transform hover:scale-105 flex items-center justify-center gap-2'
              >
                Order Now 🛵
              </button>
              <button 
                onClick={() => handleScroll('menu')}
                className='px-8 py-3 border-2 border-[#FA6000] text-[#FA6000] rounded-full hover:bg-[#FA6000] hover:text-white transition-all transform hover:scale-105 flex items-center justify-center gap-2'
              >
                View Menu 📋
              </button>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-4 mt-12 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg'>
              <div className='text-center'>
                <h3 className='text-[#FA6000] text-2xl md:text-3xl font-bold'>30m</h3>
                <p className='text-sm text-[#674F41]'>Fast Delivery</p>
              </div>
              <div className='text-center'>
                <h3 className='text-[#FA6000] text-2xl md:text-3xl font-bold'>100+</h3>
                <p className='text-sm text-[#674F41]'>Restaurants</p>
              </div>
              <div className='text-center'>
                <h3 className='text-[#FA6000] text-2xl md:text-3xl font-bold'>4.8</h3>
                <p className='text-sm text-[#674F41]'>Rating</p>
              </div>
            </div>
          </div>

          {/* Decorative Right Section */}
          <div className='relative hidden md:block'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#FA6000] rounded-full opacity-10'></div>
            <div className='relative z-10 w-full max-w-lg mx-auto grid grid-cols-2 gap-8 p-8'>
              {/* Food Emojis Grid */}
              <div className='text-8xl animate-float-slow'>🍗</div>
              <div className='text-8xl animate-float-medium'>🍚</div>
              <div className='text-8xl animate-float-fast'>🌶️</div>
              <div className='text-8xl animate-float-medium'>🥘</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
