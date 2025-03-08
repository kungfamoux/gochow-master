import React from 'react'

const AboutUs = () => {
  return (
    <div className='bg-[#FBFAF9] w-full font-Montserrat p-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-[45px] font-bold'>About <span className='text-[#FA6000]'>GoChow</span></h2>
          <p className='text-[#674F41] text-lg mt-4'>Your trusted food delivery partner in Enugu</p>
        </div>
        
        <div className='grid grid-cols-3 gap-8'>
          <div className='bg-[#FFEFE5] p-6 rounded-2xl'>
            <h3 className='text-xl font-bold mb-4'>Our Mission</h3>
            <p className='text-[#674F41]'>To connect food lovers with the best local restaurants, ensuring quick and reliable delivery services.</p>
          </div>
          
          <div className='bg-[#FFEFE5] p-6 rounded-2xl'>
            <h3 className='text-xl font-bold mb-4'>Our Vision</h3>
            <p className='text-[#674F41]'>To revolutionize food delivery in Enugu, making great food accessible to everyone.</p>
          </div>
          
          <div className='bg-[#FFEFE5] p-6 rounded-2xl'>
            <h3 className='text-xl font-bold mb-4'>Our Values</h3>
            <p className='text-[#674F41]'>Quality, reliability, and customer satisfaction are at the heart of everything we do.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
