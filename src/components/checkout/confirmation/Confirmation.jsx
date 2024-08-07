import React from 'react'
import { Link } from 'react-router-dom'
import './Confirmation.css'
import Cart from '../../pages/cart/Cart';
import CartComponent from '../../cart/CartComponent';

const Confirmation = ({onNext, onPrevious}) => {
  return (
    <div>
      <div className='stage-container-icons'>
            <div className='info-column icolumn'>
            <i className="fa-regular fa-circle-check icon"></i>
            <h2>Info</h2>
            </div>
            <div className='shipping-icon icolumn'>
            <i className="fa-regular fa-circle-check icon"></i>
            <h2>Shipping</h2>
            </div>
            <div className='payment-icon icolumn'>
            <i className="fa-regular fa-circle-check icon"></i>
            <h2>Payment</h2>
            </div>
            <div className='confirm-icon icolumn'>
            <i className="fa-regular fa-circle-check icon"></i>
            <h2>Confirmation</h2>
            </div>
         </div>
    <div className='thankYou'>
        <h3>Thank you. Your order is on it's way!</h3>
    </div>
    <div className='homey'>
      <Link
      to='/'>
    <button className="HomeBtn">Back to home</button>
    </Link>
    </div>
    </div>
  )
}

export default Confirmation
