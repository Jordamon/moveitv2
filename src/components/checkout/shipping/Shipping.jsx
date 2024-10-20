import React, { useState } from 'react';
import './Shipping.css';
import CartComponent from '../../cart/CartComponent';

const Shipping = ({ onNext, onPrevious, shippingCost, setShippingCost }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option, cost) => {
    setSelectedOption(option);
    setShippingCost(cost);
  };

  return (
    <div>
      <div className='info'>
      <div className='stage-container-icons'>
            <div className='info-column icolumn'>
            <i className="fa-regular fa-circle-check icon"></i>
            <h2>Info</h2>
            </div>
            <div className='shipping-icon icolumn'>
            <i className='fa-solid fa-truck-fast icon'></i>
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
            
        <div className='shipping'>
            <div className='shippingDetails'>
            <div className='shippingOption'>
          <h3>Choose Your Shipping Option</h3>
          <div className='standardShipping'>
          <div>
          <label>Standard Shipping</label>
          <p>$5.99</p>
          <p>Ships in 5 working days</p>
          </div>
          <div className='outerCircle'>
          <input
              type="checkbox"
              id="standard"
              name="option"
              // value="value"
              checked={selectedOption === 'standard'}
              onChange={() => handleCheckboxChange('standard', 5.99)}
            />
          </div>
          </div>
          <div className='nextDayShipping'>
            <div>
          <label>Express Shipping</label>
          <p>$20</p>
          <p>Ships next day</p></div>
          <div className='outerCircle'>
          <input
              type="checkbox"
              id="express"
              name="option"
              value="value"
              checked={selectedOption === 'express'}
              onChange={() => handleCheckboxChange('express', 20)}
            />
          </div>
          </div>
          <div className='checkoutNavBtns'>
                <div className='checkoutNavBtn1'>
                    <button className='checkoutBtn'onClick={onPrevious}>Previous</button>
                    </div>
                    <div className='checkoutNavBtn2'>
                    <button className='checkoutBtn' onClick={onNext}>Next</button>
                    </div>
            </div>
        </div>

        <div className='cartPreview'>
          <CartComponent shippingCost={shippingCost}  />
        </div>

        </div>
        </div>
        </div>
        </div>
  )
}

export default Shipping