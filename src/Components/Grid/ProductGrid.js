import React from 'react';
import './ProductGrid.css';
import { Link } from 'react-router-dom';
import {Products as products} from '../../Data/Data'
import Product from '../Product';

const ProductGrid = () => {

  return (
    <div className="product-grid">
      {products.map((product) => (
        <Product data={product}/>
      ))}
    </div>

  );
};

export default ProductGrid;
