import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
            <Link to="/" className='logo'>DEFI UPDATES</Link>
            <ul className='ul'>
                <li><Link to="/deficonnect">Deficonnect</Link></li>
                <li><Link to="/defipay">Defipay</Link></li>
                <li><Link to="/defimooves">Defimooves</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar