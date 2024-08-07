import React, { useState } from 'react';
import Footer from '../../footer/Footer';
import CartComponent from '../../cart/CartComponent';
import '../../../App.css';
import './Cart.css';

function Cart() {
  const [basket, setBasket] = useState([]);

  return (
    <div className="Cart-container">
      <div>
        <CartComponent basket={basket} setBasket={setBasket} />
        <Footer />
      </div>
    </div>
  );
}

export default Cart;
