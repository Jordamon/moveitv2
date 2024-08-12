import React, { useEffect, createContext, useState, useCallback } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    const savedBasket = JSON.parse(localStorage.getItem('data')) || [];
    return savedBasket;
  });

  const [errorMessage, setErrorMessage] = useState('');

  const increment = useCallback((id, quantity, size) => {
    if (!size) {
      setErrorMessage('Please select a size before adding to the cart.');
      return;
    }

    // If a size is selected, clear any previous error messages
    setErrorMessage('');

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
    let cartIcon = document.getElementById('cartAmount');
    cartIcon.innerHTML = totalItems;
  }, [basket]);

  useEffect(() => {
    // Update the cart amount whenever the basket changes
    updateCartAmount();

    // Save the basket to localStorage
    localStorage.setItem('data', JSON.stringify(basket));
  }, [basket, updateCartAmount]);

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

  return (
    <CartContext.Provider value={{ basket, setBasket, increment, updateCartAmount, setSize }}>
      {children}
    </CartContext.Provider>
  );
};
