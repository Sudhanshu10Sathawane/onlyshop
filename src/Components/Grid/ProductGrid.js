import React from 'react';
import './ProductGrid.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/CartContext';

const ProductGrid = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <span>${product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <Link to="/cart">
            <button>View Cart</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
