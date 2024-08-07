import React from 'react';
import StripePayment from '../../stripe/Stripe';
import './Payment.css';
import CartComponent from '../../cart/CartComponent';

const Payment = ({ onNext, onPrevious, selectedShippingOption, shippingCost = 0 }) => {
  return (
    <div>
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
            <i className='fa-regular fa-credit-card icon'></i>
            <h2>Payment</h2>
            </div>
            <div className='confirm-icon icolumn'>
            <i className='fa-regular fa-clipboard icon'></i>
            <h2>Confirmation</h2>
            </div>
         </div>
         <div className='paymentBody'>
            <div className='paymentFeature'>
            <h2>Proceed To Payment</h2>
            <StripePayment/>
            <div className='checkoutNavBtns'>
                    <button className='btn btn--medium btn--primary checkoutNav'onClick={onPrevious}>Previous</button>
                    <button className='btn btn--medium btn--primary checkoutNav' onClick={onNext}>Next</button>
            </div>
            </div>
          <div className='cartPreview'>
            <CartComponent shippingCost={shippingCost} />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Payment
