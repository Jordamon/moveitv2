import React from 'react';
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = "pk_test_51Nclp7HRbwH8RCTpk3UWsvYjs8NdGj2iVsC1T7ft872NhW3vnuxOXJR8mpRRWl99jlQ6HGWHiulYMzTyAklW7Xl800s1rhq492"
const stripePromise = loadStripe(PUBLIC_KEY);


const StripePayment = () => {
  return (
    <div className='stripe-container'>
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
    </div>
  )
};

export default StripePayment

