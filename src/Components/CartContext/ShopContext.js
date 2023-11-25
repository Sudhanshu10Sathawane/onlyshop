import React, { createContext, useState } from 'react'
import { Products } from '../../Data/Data';

export const ShopContext=createContext(null);

const getDefaultCart=()=>{
  let cart={};
  for(let i=1;i<Products.length+1;i++){
    cart[i]=0;
  }
  return cart;
}
export const ShopContextProvider = (props) => {
  const  [cartItems,setCartItems]=useState(getDefaultCart());
  const addToCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  };
  const removeFromCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  };
  const updateCartItem=(newAmount,itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:newAmount}));
  }
  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let product=Products.find((product)=>product.id===Number(item));
        totalAmount+=cartItems[item]*product.price;
      }
    }
    return totalAmount;
  }
  const contextValue={
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    getTotalCartAmount
  };
  return (
    <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
  )
}
