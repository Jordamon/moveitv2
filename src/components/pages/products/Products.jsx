import React from 'react'
import Footer from '../../footer/Footer';
import '../../../App.css';
import './Products.css';
import Shop from '../../shop/Shop';

function Products() {
    return (
      <div className="Products-container">
        <div>
          <Shop />
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Products;