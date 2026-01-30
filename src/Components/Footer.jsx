import React from 'react'
import { BsTwitterX, BsYoutube } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-black text-white pb-12'>
      <div className='flex justify-between items-center px-8 py-6 border-gray-600'> 
        <div className='text-2xl font-bold *:cursor-pointer'>
          <Link to="/">LOOMCART</Link>
        </div>
        <div className='flex space-x-4 *:text-xl cursor-pointer'>
          <FaFacebook />
          <BsTwitterX />
          <BsYoutube />
        </div>
      </div>
      <div className='text-center pt-4 text-sm max-md:mb-6'>
        <p>Copyright © LOOMCART 2026. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer