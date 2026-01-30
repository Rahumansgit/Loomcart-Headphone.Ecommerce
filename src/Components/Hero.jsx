import React from 'react'
import bgImage from "../assets/herobg.png"

const Hero = () => {
  return (
    <div className='relative h-screen w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bgImage})`}}>
      <div className='relative z-20 flex flex-col items-center justify-center text-white h-full px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-1'>Experience the Ultimate <br />Sound Quality</h1>
        <p className='text-gray-200 mb-4'>Discover headphones that deliver rich bass, crystal-clear highs, and unbeatable comfort <br /> built for music lovers, gamers, and creators alike.</p>
        <button className='bg-red-600 text-white font-bold px-6 py-3 rounded-lg cursor-pointer hover:bg-red-500 duration-200 active:bg-red-700'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default Hero