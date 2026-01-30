import React, {useContext} from 'react'
import { Link } from 'react-router'
import { ShopContext } from '../Components/ShopContext'

const Navbar = () => {

  const {quantity} = useContext(ShopContext)

  return (
    <div>
      <nav className='fixed top-0 left-0 right-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-sky-600 shadow'>
            <Link to="/"><h2 className='font-bold text-2xl text-white cursor-pointer'>LOOMCART</h2></Link>
            <ul className='flex gap-8 text-white font-semibold text-md *:cursor-pointer max-[624px]:hidden'>
                <Link to="/"><li>HOME</li></Link>
                <Link to="/cart"><li>CART({quantity})</li></Link>
                <li>PRODUCT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
      <div className="h-20"></div>
    </div>
  )
}

export default Navbar