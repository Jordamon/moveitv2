import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../footer/Footer.jsx';
import SingleProductDetails from '../../productDetails/ProductDetails.jsx';
// import CartComponent from '../../cart/CartComponent.jsx';
import { CartContext } from '../../cartContext/CartContext';

const IndividualProduct = () => {
  const { id } = useParams();
  const { basket, increment } = useContext(CartContext);

  return (
    <div>
      <SingleProductDetails id={id} basket={basket} increment={increment} />
      <Footer />
    </div>
  );
};

export default IndividualProduct;
