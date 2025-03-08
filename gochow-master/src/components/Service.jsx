import React from 'react'
import icons from '../assets/Icons.png'
import image1 from '../assets/image 1.png'
import image2 from '../assets/image 2.png'
import image3 from '../assets/image 3.png'
import image4 from '../assets/image 4.png'
import icons1 from '../assets/Icons (2).png'
import icons2 from '../assets/Icons (3).png'

const Service = () => {
  const services = [
    {
      image: image1,
      title: "Restaurant Partners",
      description: "Partner with top-rated local restaurants offering diverse cuisines"
    },
    {
      image: image2,
      title: "Food Delivery",
      description: "Swift and reliable delivery service right to your doorstep"
    },
    {
      image: image3,
      title: "Catering Service",
      description: "Professional catering for events and special occasions"
    },
    {
      image: image4,
      title: "Special Orders",
      description: "Customize your orders to match your dietary preferences"
    }
  ]

  return (
    <div id="services" className='bg-hero-pattern bg-contain bg-center bg-no-repeat min-h-screen mt-[6%] font-Montserrat relative'>
      <div className='bg-[#FFEFE5] absolute top-[-5%] left-[5%] right-[5%] bottom-[-5%] p-8 rounded-3xl'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-12'>
          <div className='flex flex-col md:flex-row items-center gap-5'>
            <button className='border border-black px-6 py-2 rounded-full font-semibold hover:bg-black hover:text-white transition-colors'>
              Our Services
            </button>
            <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left'>
              Elevate Your Dining Experience
            </h2>
          </div>
          <button className='bg-[#FA6000] hover:bg-[#ea580c] rounded-full px-6 py-3 text-white flex items-center gap-3 font-bold shadow-xl hover:shadow-2xl transition-all'>
            Discover Restaurants
            <img src={icons} alt="arrow" className='w-4 h-4' />
          </button>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='group relative overflow-hidden rounded-2xl cursor-pointer'
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className='w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0'>
                <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                <p className='text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
          <div className='flex gap-4'>
            <button className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-[#FA6000] hover:text-white transition-colors'>
              <img src={icons1} alt="Previous" className='w-6 h-6' />
            </button>
            <button className='w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-lg hover:bg-[#FA6000] hover:text-white transition-colors'>
              <img src={icons2} alt="Next" className='w-6 h-6' />
            </button>
          </div>
          
          <div className='text-sm md:text-base text-right max-w-2xl'>
            <p className='leading-relaxed text-[#674F41]'>
              Experience the seamless convenience of ordering from a diverse selection of restaurants, 
              customizable meals, and real-time tracking—making your dining experience not only enjoyable 
              but effortless. Activate the flavors of Enugu, and let GoChow revolutionize your meals, 
              all from your pocket.
            </p>
          </div>
        </div>

        {/* Service Stats */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 bg-white rounded-2xl p-6 shadow-lg'>
          {[
            { number: "500+", label: "Restaurant Partners" },
            { number: "50k+", label: "Happy Customers" },
            { number: "100k+", label: "Deliveries Done" },
            { number: "4.8/5", label: "Customer Rating" }
          ].map((stat, index) => (
            <div key={index} className='text-center'>
              <h3 className='text-[#FA6000] text-2xl md:text-3xl font-bold'>{stat.number}</h3>
              <p className='text-[#674F41] text-sm md:text-base'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service