import React, { useContext } from 'react'
import { RiDeleteBin6Line} from "react-icons/ri";
import { ShopContext } from '../Components/ShopContext'
import { IoMdAdd, IoMdRemove } from 'react-icons/io';

const Cart = () => {

  const {cart, quantity, total, decreaceFromCart, removeFromCart, clearCart, addToCart} = useContext(ShopContext)

  return (
    <div className='flex justify-between p-5 gap-5 max-sm:flex-col max-sm:gap-5'>
      {/* cart details */}
      <div className='w-2/3 bg-white p-5 mt-5 max-sm:w-full max-sm:mr-0 max-sm:p-3 rounded-lg shadow-md'>
        <div className='flex justify-between font-bold *:text-lg'>
          <h1>Shopping Cart</h1>
          <h1>Items Count: {quantity}</h1>
          <span className='flex gap-1 text-red-500 justify-center items-center cursor-pointer' onClick={clearCart} ><RiDeleteBin6Line />Clear Cart</span>
        </div>

      { quantity > 0 &&    
       <div className='flex justify-between mt-5 font-bold'>
          <span>Product</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>}

        <div >
          {
            quantity > 0 ? ( cart.map((product) => {
              const {id,image, title, price, quantity} = product
              return (
                <div key={id} className='flex justify-between items-center mt-5 border-b pb-3'>
                  <div className='flex items-center gap-4'>
                    <img src={image} alt={title} className='w-18 h-18' />
                    <div>
                      <h3 className='font-medium'>{title}</h3>
                      <div className='flex items-center text-red-500 text-sm cursor-pointer ' onClick={() => removeFromCart(product, id)} >
                        <RiDeleteBin6Line className='mr-1' />Remove
                      </div>
                    </div>
                  </div>
                  <span className='flex items-center '>
                    <IoMdRemove className='w-8 h-8 p-1 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer' onClick={() => decreaceFromCart(product, id)}/> 
                     <span className='mx-3'> {quantity} </span>
                    <IoMdAdd className='w-8 h-8 p-1 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer' onClick={() => addToCart(product, id)} />
                  </span>
                  <span className='text-gray-700'>${price}</span>
                  <span className='text-gray-700 font-medium'>${price * quantity}</span>
                </div> 
              )
            })) : ( <h2 className='text-2xl font-bold mt-10 text-center'>Your Cart is Empty!</h2> ) 
          }
        </div>
      </div>

      {/* cart summary */}
      <div className='w-1/3 bg-gray-100 p-5 rounded-lg mt-5 max-sm:w-full max-sm:mr-0 max-sm:p-3 h-fit shadow-md'>
        <h2 className='text-2xl font-bold mb-5'>Cart Summary</h2>
        <div className='flex justify-between mb-3'>
          <span className='font-semibold'>Total Items:</span>
          <span>{quantity}</span>
        </div>
        <div className='flex justify-between mb-3'>
          <span className='font-semibold'>Total Price:</span>
          <span>${total}</span>
        </div>
        <div className='flex justify-between mb-3'>
          <span className='font-semibold'>Shipping Fee:</span>
          <span>Free</span>
        </div>
        <button className='w-full mt-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 active:bg-sky-800 transition duration-300 cursor-pointer'>Proceed to Checkout</button>
      </div>
    </div>
  )
}

export default Cart