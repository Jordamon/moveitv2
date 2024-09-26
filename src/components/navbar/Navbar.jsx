import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NAVBARCSS from './Navbar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={NAVBARCSS.navbar}>
        <div className={NAVBARCSS.navbarContainer}>
          <div>
            <Link to='/' className={NAVBARCSS.navbarLogo} onClick={closeMobileMenu}>
              <img src={require('../../images/logo.avif')} alt='moveit logo' className={NAVBARCSS.navbarLogo}/>
            </Link>
          </div>
          <div className={NAVBARCSS.menuIcons} onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? `${NAVBARCSS.navMenu} ${NAVBARCSS.active}` : NAVBARCSS.navMenu}>
            <li className={NAVBARCSS.navItem}>
              <Link to='/' className={NAVBARCSS.navLinks} onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className={NAVBARCSS.navItem}>
              <Link to='/products' className={NAVBARCSS.navLinks} onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className={NAVBARCSS.navItem}>
              <Link to='/contact' className={NAVBARCSS.navLinks} onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
            <li>
              <Link to='/account' className={NAVBARCSS.navLinks} onClick={closeMobileMenu}>
                Account
              </Link>
            </li>
          </ul>
          <Link to='/cart' className={NAVBARCSS.navItem} onClick={closeMobileMenu}>
            <div className={NAVBARCSS.cart}>
              <img src={require("../../images/cart-icon.png")} alt="Cart icon" width="30px" height="30px"/>
              <div id="cartAmount" className={NAVBARCSS.cartAmount}>0</div>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
