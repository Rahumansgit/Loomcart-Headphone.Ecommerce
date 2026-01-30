import React from 'react'
import { useParams } from 'react-router'
import {productsData} from '../data'
import { ShopContext } from '../Components/ShopContext'

const ProductDetails = () => {
  const {id} = useParams()
  const product = productsData.find((item) => item.id === parseInt(id))
  const {addToCart} = React.useContext(ShopContext)

  return (
    <div>
      <div className='p-20 flex gap-16 max-[940px]:flex-col max-[940px]:items-center max-[940px]:gap-5 max-sm:p-10'>
        <div className='shrink-0 '>
          <img className='w-115' src={product.image} alt={product.title} />
        </div>
        <div className='mt-20 flex flex-col gap-3'>
          <h3 className='text-3xl font-bold'>{product.title}</h3>
          <p className='text-2xl text-red-500'>${product.price}</p>
          <span className='text-lg text-gray-600'>{product.description}</span>
          <button className='w-fit mt-4 px-12 py-4 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 active:bg-red-700 transition duration-200' onClick={() => addToCart(product, product.id)}>Add to Cart</button>
        </div>
      </div>    
    </div>
 ) 
}

export default ProductDetails