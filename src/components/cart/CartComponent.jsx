import React, { useEffect, useContext } from 'react';
import ShopItemsData from '../shop/Data.jsx';
import CARTCOMPONENTCSS from './CartComponent.module.css';
import { CartContext } from '../cartContext/CartContext';
import { Link } from 'react-router-dom';

const CartComponent = ({ shippingCost = 0 }) => {
  const { basket, increment, setBasket, updateCartAmount } = useContext(CartContext);

  const decrement = (id, size) => {
    setBasket((prevBasket) => {
      const updatedBasket = prevBasket
        .map((item) =>
          item.id === id && item.size === size && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return updatedBasket;
    });
  };

  const removeItem = (id, size) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.id !== id || item.size !== size)
    );
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
      <div className={CARTCOMPONENTCSS.cartItem} key={cartItemKey}>
        <img width="100" src={img} alt={name} />
        <div className={CARTCOMPONENTCSS.details}>
          <div className={CARTCOMPONENTCSS.titlePriceX}>
            <h4>
              <p>{name}</p>
              <p>£ {price}</p>
              <p>Size: {size}</p>
            </h4>
            <i onClick={() => removeItem(id, size)} className="bi bi-x-lg"></i>
          </div>

          <div className={CARTCOMPONENTCSS.buttons}>
            <h4>Quantity:</h4>
            <i onClick={() => decrement(id, size)} className="bi bi-dash-lg"></i>
            <div id={id} className={CARTCOMPONENTCSS.quantity}>
              {quantity}
            </div>
            <i onClick={() => increment(id, 1, size)} className="bi bi-plus-lg"></i>
          </div>

          <h4>Subtotal: £ {quantity * price}</h4>
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
    <h1 className={CARTCOMPONENTCSS.h1cart}>Your Cart</h1>
    <div className={CARTCOMPONENTCSS.row}>
      {basket.length > 0 ? (
        <div className={`${CARTCOMPONENTCSS.textCenter} ${CARTCOMPONENTCSS.col1}`}>
          <h2>Total Bill: <br/>£ {totalBill}</h2>
          <p>Shipping: £ {shippingCost}</p>
          <p>{totalItems} {itemsText}</p>
          <div className="links">
          <Link to="/CheckoutPage">
            <button className={`${CARTCOMPONENTCSS.checkout} ${CARTCOMPONENTCSS.checkClear}`}>Checkout</button>
          </Link>
          <button onClick={clearCart} className={`${CARTCOMPONENTCSS.removeAll} ${CARTCOMPONENTCSS.checkClear}`}>
            Clear Cart
          </button>
          </div>
        </div>
      ) : (
        <div className={`${CARTCOMPONENTCSS.label} ${CARTCOMPONENTCSS.textCenter}`}>
          <h2>Cart is empty</h2>
          <Link to="/">
            <button className={CARTCOMPONENTCSS.homeBtn}>Back to home</button>
          </Link>
        </div>
      )}
      <div className={CARTCOMPONENTCSS.shoppingCart}>
        {basket.map((item) => (
          <CartItem key={`${item.id}-${item.size}`} {...item} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default CartComponent;
