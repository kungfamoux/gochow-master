import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Delivery',
      description: 'Get your food delivered in 30 minutes or less with our lightning-fast delivery service.'
    },
    {
      icon: '🍽️',
      title: 'Live Tracking',
      description: 'Track your order in real-time from restaurant preparation to delivery at your doorstep.'
    },
    {
      icon: '💳',
      title: 'Secure Payment',
      description: 'Multiple secure payment options including cards, bank transfers, and cash on delivery.'
    },
    {
      icon: '⭐',
      title: 'Loyalty Rewards',
      description: 'Earn points with every order and redeem them for free meals and special discounts.'
    },
    {
      icon: '🎁',
      title: 'Special Offers',
      description: 'Daily deals and exclusive discounts from your favorite restaurants.'
    },
    {
      icon: '📱',
      title: 'Easy Ordering',
      description: 'User-friendly interface making food ordering a breeze with just a few taps.'
    }
  ]

  return (
    <div className='bg-[#FBFAF9] font-Montserrat py-16'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-12'>
          <h2 className='text-[45px] font-bold'>Why Choose <span className='text-[#FA6000]'>GoChow</span></h2>
          <p className='text-[#674F41] text-lg mt-4 max-w-2xl mx-auto'>
            Experience the best food delivery service with features designed to make your ordering experience exceptional
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div 
              key={index}
              className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#FFEFE5]'
            >
              <div className='text-4xl mb-4'>{feature.icon}</div>
              <h3 className='text-xl font-bold mb-3'>{feature.title}</h3>
              <p className='text-[#674F41]'>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center'>
          <div className='bg-[#FFEFE5] p-8 rounded-3xl inline-block'>
            <h3 className='text-2xl font-bold mb-4'>Ready to Experience These Features?</h3>
            <p className='text-[#674F41] mb-6'>Download our app now and enjoy the convenience of food delivery</p>
            <div className='flex gap-4 justify-center'>
              <button className='bg-[#FA6000] text-white px-8 py-3 rounded-full hover:bg-[#ea580c] flex items-center gap-2'>
                <span className='text-xl'>📱</span>
                Download App
              </button>
              <button className='border-2 border-[#FA6000] text-[#FA6000] px-8 py-3 rounded-full hover:bg-[#FA6000] hover:text-white flex items-center gap-2'>
                <span className='text-xl'>🍽️</span>
                Order Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features 