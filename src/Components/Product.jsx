import React, { useContext } from 'react'
import { ShopContext } from './CartContext/ShopContext';
const Product = (props) => {
    const {id,
    name,
    description,
    price,
    category,
    brand,
    imageUrl
    }= props.data;
    const {addToCart, cartItems}=useContext(ShopContext);
    const cartItemAmount=cartItems[id];
  return (
    <div key={id} className="product-card">
          <img src={imageUrl} alt={name} />
          <h3>{name}</h3>
          <p>{description}</p>
          <span>${price}</span>
          <div>
          <button onClick={()=>addToCart(id)}>Add to Cart{cartItemAmount>0 && <> ({cartItemAmount})</>}</button>
          </div>
          <div>
            <button id="viewDetails">View Details</button>
          </div>
        </div>
  )
}

export default Product
