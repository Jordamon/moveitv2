import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={require('../../images/logo.avif')} alt='moveit logo' className='navbar-logo'/>
            </Link>
          </div>
          <div className='menu-icons' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to='/account'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Account
              </Link>
            </li>
          </ul>  
              <Link
                to='/cart'
                className='nav-item'
                onClick={closeMobileMenu}
              >
                <div className="cart">
                    <img src={require("../../images/cart-icon.png")} alt="Cart icon" width="30px" height="30px"/>
                    <div id="cartAmount" className="cartAmount">0</div>
                </div>
              </Link>
        </div>
      </nav>
    </>
  );
}


export default Navbar;
