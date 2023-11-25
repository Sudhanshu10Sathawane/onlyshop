import './Navbar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
export default function Navbar(){
    return(
        <div id="nav">
        <a id="logo"><Link to="/">OnlyShop</Link></a>
        <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart"><ShoppingCart size={32}/></Link></li>
        </ul>
    </div>
    );
}   