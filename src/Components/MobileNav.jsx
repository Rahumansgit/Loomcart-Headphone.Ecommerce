import React from 'react'
import { GoHome, GoHomeFill } from "react-icons/go";
import { IoCartOutline, IoCart, IoPersonOutline, IoPerson } from "react-icons/io5";
import { Link, useLocation } from 'react-router';

const MobileNav = () => {
  const location = useLocation();

  return (
    <div>
      <div className='fixed bottom-0 left-0 w-full z-50 bg-sky-600 shadow-md flex justify-around items-center py-4 min-[624px]:hidden'>
        <Link to="/">{location.pathname === "/" ? <GoHomeFill size={24} color='white' className='cursor-pointer' /> : <GoHome size={24} color='white' className='cursor-pointer' />}</Link>
        <Link to="/cart">{location.pathname === "/cart" ? <IoCart size={24} color='white' className='cursor-pointer' /> : <IoCartOutline size={24} color='white' className='cursor-pointer' />}</Link>
        <Link to="/profile">{location.pathname === "/profile" ? <IoPerson size={24} color='white' className='cursor-pointer' /> : <IoPersonOutline size={24} color='white' className='cursor-pointer' />}</Link>
      </div>
    </div>
  )
}

export default MobileNav