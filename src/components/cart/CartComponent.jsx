import React, { useEffect, useContext } from 'react';
import ShopItemsData from '../shop/Data.jsx';
import './CartComponent.css';
import { CartContext } from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
// import { shippingCost } from '../checkout/shipping/Shipping.jsx';

const CartComponent = ({ shippingCost }) => {
  const { basket, increment, setBasket, updateCartAmount } = useContext(CartContext);

  const decrement = (id, size) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket];
      const itemIndex = updatedBasket.findIndex((item) => item.id === id && item.size === size);
  
      if (itemIndex !== -1) {
        if (updatedBasket[itemIndex].quantity > 1) {
          updatedBasket[itemIndex] = {
            ...updatedBasket[itemIndex],
            quantity: updatedBasket[itemIndex].quantity - 1,
          };
        } else {
          updatedBasket.splice(itemIndex, 1); // Remove the item from the cart if the quantity is 1
        }
      }
  
      return updatedBasket;
    });
  };

  const removeItem = (id, size) => {
    setBasket((prevBasket) => {
      const filteredBasket = prevBasket.filter((item) => item.id !== id || item.size !== size);
      return filteredBasket;
    });
  };
  
  

  const clearCart = () => {
    setBasket([]);
  };

  const generateCartItems = () => {
    if (basket.length !== 0) {
      return basket.map((item) => {
        let { id, quantity, size } = item; // Include the 'size' property
        let product = ShopItemsData.find((product) => product.id === id) || {};
        let { img, name, price } = product;
        const cartItemKey = `${id}-${size}`; // Create a unique key using id and size
        return (
          <div className="cart-item" key={cartItemKey}>
            <img width="100" src={img} alt="" />
            <div className="details">
              <div className="title-price-x">
                <h4>
                  <p>{name}</p>
                  <p>£ {price}</p>
                  <p>Size: {size}</p> {/* Display the selected size */}
                </h4>
                <i onClick={() => removeItem(id, size)} className="bi bi-x-lg"></i>
              </div>
  
              <div className="buttons">
                <h4>Quantity:</h4>
                <i onClick={() => decrement(id, size)} className="bi bi-dash-lg"></i>
                <div id={id} className="quantity">
                  {item.quantity}
                </div>
                <i onClick={() => increment(id, 1, size)} className="bi bi-plus-lg"></i>
              </div>

              <h3>Total: £ {item.quantity * price}</h3>
            </div>
          </div>
        );
      });
    } else {
      return (
        <>
          <div id="shopping-cart"></div>
          <div id="label" className="text-center">
            <h2>Cart is empty</h2>
            <a href="/">
              <button className="HomeBtn">Back to home</button>
            </a>
          </div>
        </>
      );
    }
  };

  const totalAmount = () => {
    if (basket.length !== 0) {
      const totalItems = basket.reduce((total, item) => total + item.quantity, 0);
      const amount = basket.reduce((total, item) => {
        let product = ShopItemsData.find((prod) => prod.id === item.id) || {};
        return total + item.quantity * product.price;
      }, 0);
  
      const itemsText = totalItems === 1 ? 'item' : 'items';
  
      const totalBill = amount + (shippingCost || 0); // Add the shipping cost to the total amount, default to 0 if shippingCost is not provided

  
      return (
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
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
    updateCartAmount(); // Call the function to update the cart amount
  }, [basket, updateCartAmount]);

  return (
    <div>
      {totalAmount()}
      <div className="shopping-cart">{generateCartItems()}</div>
    </div>
  );
};

export default CartComponent;