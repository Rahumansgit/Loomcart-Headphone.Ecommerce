import React from 'react'
import bannerImage from "../assets/head3.jpg"

const Banner = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white text-center px-4'>
      <h2 className='text-4xl font-bold mb-4'>Unleash Pure Sound</h2>
      <p className='max-w-md text-gray-600 mb-6'>Premium Headphones engineered for immersive audio, all-day comfort, and cutting-edge design.
Shop now and take your listening to the next level.</p>
      <div>
        <img src={bannerImage} alt="Banner" className='w-96 object-contain'/>
      </div>
    </div>
  )
}

export default Banner