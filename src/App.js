import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Account from './components/pages/account/Account';
import Contact from './components/pages/contact/Contact';
import Products from './components/pages/products/Products';
import Cart from './components/pages/cart/Cart';
import IndividualProduct from './components/pages/individualProduct/IndividualProduct.jsx';
import './App.css';
import { CartProvider } from './components/cartContext/CartContext'; 
import CheckoutPage from './components/pages/checkoutPage/Checkout.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <CartProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Account' element={<Account />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/CheckoutPage' element={<CheckoutPage />} />
        <Route path='/product/:id' element={<IndividualProduct />} />
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
