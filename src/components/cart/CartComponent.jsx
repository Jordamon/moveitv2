import React, { useEffect, useContext } from 'react';
import ShopItemsData from '../shop/Data.jsx';
import './CartComponent.css';
import { CartContext } from '../cartContext/CartContext';
import { Link } from 'react-router-dom';

const CartComponent = ({ shippingCost = 0 }) => {
  const { basket, increment, setBasket, updateCartAmount } = useContext(CartContext);

  const decrement = (id, size) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket.map((item) => 
        item.id === id && item.size === size && item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0);
      
      return updatedBasket;
    });
  };

  const removeItem = (id, size) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id || item.size !== size));
  };

  const clearCart = () => {
    setBasket([]);
  };

  const CartItem = ({ id, quantity, size }) => {
    const product = ShopItemsData.find((product) => product.id === id) || {};
    const { img, name, price } = product;

    if (!name || !price) {
      return null;
    }

    const cartItemKey = `${id}-${size}`;

    return (
      <div className="cart-item" key={cartItemKey}>
        <img width="100" src={img} alt={name} />
        <div className="details">
          <div className="title-price-x">
            <h4>
              <p>{name}</p>
              <p>£ {price}</p>
              <p>Size: {size}</p>
            </h4>
            <i onClick={() => removeItem(id, size)} className="bi bi-x-lg"></i>
          </div>

          <div className="buttons">
            <h4>Quantity:</h4>
            <i onClick={() => decrement(id, size)} className="bi bi-dash-lg"></i>
            <div id={id} className="quantity">
              {quantity}
            </div>
            <i onClick={() => increment(id, 1, size)} className="bi bi-plus-lg"></i>
          </div>

          <h3>Total: £ {quantity * price}</h3>
        </div>
      </div>
    );
  };

  const totalAmount = basket.reduce((total, item) => {
    const product = ShopItemsData.find((prod) => prod.id === item.id) || {};
    return total + item.quantity * (product.price || 0);
  }, 0);

  const totalItems = basket.reduce((total, item) => total + item.quantity, 0);
  const itemsText = totalItems === 1 ? 'item' : 'items';
  const totalBill = totalAmount + shippingCost;

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
    updateCartAmount();
  }, [basket, updateCartAmount]);

  return (
    <div>
      {basket.length > 0 ? (
        <div id="label" className="text-center">
          <h2>Total Bill: £ {totalBill}</h2>
          <p>Shipping: £ {shippingCost}</p>
          <p>{totalItems} {itemsText}</p>
          <Link to="/CheckoutPage">
            <button className="checkout check-clear">Checkout</button>
          </Link>
          <button onClick={clearCart} className="removeAll check-clear">
            Clear Cart
          </button>
        </div>
      ) : (
        <div id="label" className="text-center">
          <h2>Cart is empty</h2>
          <Link to="/">
            <button className="HomeBtn">Back to home</button>
          </Link>
        </div>
      )}
      <div className="shopping-cart">
        {basket.map((item) => (
          <CartItem key={`${item.id}-${item.size}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
