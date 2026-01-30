import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext();

import { productsData } from "../data"

const ShopContextProvider = ({ children }) => {

  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  //function for Add To Cart 
  const addToCart = (product, id) => {
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct) {
      setCart(cart.map((item) => item.id === id ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setQuantity(quantity + 1);
    setTotal(total + product.price);
  };

  //function for Decreace From Cart
  const decreaceFromCart = (product, id) => {
    const existingProduct = cart.find((item) => item.id === id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(cart.map((item) => item.id === id ? { ...existingProduct, quantity: existingProduct.quantity - 1 } : item));
    }
    setQuantity(quantity - 1);
    setTotal(total - product.price);
  };

  //function for Remove From Cart
  const removeFromCart = (product, id) => {
    setCart(cart.filter((item) => item.id !== id));
    setQuantity(quantity - product.quantity);
    setTotal(total - product.price * product.quantity);
  };

  //function for Clear Cart
  const clearCart = () => {
    setCart([]);
    setQuantity(0);
    setTotal(0);
  };

  //funtion to update total and quantity when cart changes
  useEffect(() => {
    let newQuantity = 0;
    let newTotal = 0;
    cart.forEach((product) => {
      newQuantity += product.quantity;
      newTotal += product.price * product.quantity;
    });
    setQuantity(newQuantity);
    setTotal(newTotal);
  }, [cart]);



  return (
    <ShopContext.Provider value={{ products, cart, quantity, total, addToCart, decreaceFromCart, removeFromCart, clearCart }}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider