import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ProductGrid from './Components/Grid/ProductGrid';
import CartPage from './Components/CartPage/CartPage';
import { ShopContextProvider } from './Components/CartContext/ShopContext';
const App = () => {
  return (
      <div id="app">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductGrid/>} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </Router>
      </ShopContextProvider>
      </div>
  );
};

export default App;