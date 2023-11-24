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
          <div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
          <div>
          <Link to="/cart">{/*To be modified */}
            <button id="viewDetails">View Details</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
