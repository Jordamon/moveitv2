import React, { useState } from 'react';
import Information from '../../checkout/cartCheckout/Information';
import Confirmation from '../../checkout/confirmation/Confirmation';
import Payment from '../../checkout/payment/Payment';
import Shipping from '../../checkout/shipping/Shipping';
import './Checkout.css';

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingCost, setShippingCost] = useState(0);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {/* Progress Indicator */}
      <div className='progressIndicator'>Step {currentStep} of 4</div>

      {/* Render the current step */}
      {currentStep === 1 && <Information onNext={handleNext} />}
      {currentStep === 2 && (
        <Shipping
          onNext={handleNext}
          onPrevious={handlePrevious}
          shippingCost={shippingCost} // Pass shippingCost to Shipping
          setShippingCost={setShippingCost} // Pass the function to update shippingCost
        />
      )}
      {currentStep === 3 && (
        <Payment
          onNext={handleNext}
          onPrevious={handlePrevious}
          shippingCost={shippingCost} // Pass shippingCost to Payment
        />
      )}
      {currentStep === 4 && <Confirmation onPrevious={handlePrevious} />}
    </div>
  );
};

export default CheckoutPage;