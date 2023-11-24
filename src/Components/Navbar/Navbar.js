import './Navbar.css'
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <div id="nav">
        <a id="logo"><Link to="/">HOnlyShop</Link></a>
        <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    </div>
    );
}