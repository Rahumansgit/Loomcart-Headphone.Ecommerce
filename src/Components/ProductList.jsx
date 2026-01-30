import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ShopContext } from '../Components/ShopContext'

const ProductList = () => {

  const {products} = useContext(ShopContext)
  const {addToCart} = useContext(ShopContext)

  return (
    <div className='max-w-300 mx-auto px-4 mt-20 text-center'>
      <h2 className='text-3xl font-semibold mb-8 text-gray-800'>Our Elegent Collections</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          products.map((product) => {
            const {id, image, title, price} = product
            return (
              <div key={id} className='bg-white border border-gray-200 rounded-lg p-4 transition-transform duration-200'>
                <Link to={`/product/${id}`}>
                  <img src={image} alt={title} className='w-full h-62.5 object-cover mb-4'/>
                </Link>
              <div className='text-left'>
                <Link to={`/product/${id}`}><h4 className='text-lg font-medium text-gray-800 mb-1'>{title}</h4></Link>
                <p className='text-lg font-bold text-gray-500 text-center'>${price}</p>                
              </div>
              <button  onClick={() => addToCart(product, id)} className='w-full mt-4 py-2 border border-sky-600 text-black rounded-md hover:bg-sky-600 active:bg-sky-700 transition duration-300 cursor-pointer'>Add To Cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductList