import React, { createContext, useState, useCallback, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const savedBasket = JSON.parse(localStorage.getItem('data')) || [];
    return savedBasket;
  });

  const increment = useCallback((id, quantity, size) => {
    if (!size) {
      // setErrorMessage('Please select a size before adding to the cart.');
      return;
    }

    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket];
      const itemIndex = updatedBasket.findIndex((item) => item.id === id && item.size === size);

      if (itemIndex === -1) {
        updatedBasket.push({ id, quantity: parseInt(quantity), size });
      } else {
        updatedBasket[itemIndex] = {
          ...updatedBasket[itemIndex],
          quantity: updatedBasket[itemIndex].quantity + parseInt(quantity),
        };
      }

      return updatedBasket;
    });
  }, []);

  const updateCartAmount = useCallback(() => {
    const totalItems = basket.reduce((total, item) => total + parseInt(item.quantity), 0);
    return totalItems;
  }, [basket]);

  const setSize = useCallback((id, size) => {
    setBasket((prevBasket) => {
      const updatedBasket = [...prevBasket];
      const itemIndex = updatedBasket.findIndex((item) => item.id === id);
  
      if (itemIndex !== -1) {
        updatedBasket[itemIndex].size = size;
      }
  
      return updatedBasket;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
  }, [basket]);

  return (
    <CartContext.Provider value={{ basket, setBasket, increment, updateCartAmount, setSize }}>
      {children}
      <div id="cartAmount">{updateCartAmount()}</div>
    </CartContext.Provider>
  );
};
