// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const initialState = {
    cartItems: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);
  const history = useHistory(); // Access to the history object

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    history.push('/cart'); // Navigate to the cart page after adding to the cart
  };

  return (
    <CartContext.Provider value={{ cart: state.cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
