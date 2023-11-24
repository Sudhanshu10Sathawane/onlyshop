import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ProductGrid from './Components/Grid/ProductGrid';
import CartPage from './Components/CartPage/CartPage';
import { Product } from './Data/Data';

const App = () => {
  return (
      <div id="app">
        <Navbar />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/" element={<ProductGrid products={Product} />} />
        </Routes>
      </div>
  );
};

export default App;