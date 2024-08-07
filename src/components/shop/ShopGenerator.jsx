import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../cartContext/CartContext';

const ShopGenerator = ({ items }) => {
  const { updateCartAmount } = useContext(CartContext);
  const [basket] = useState(() => {
    const savedBasket = JSON.parse(localStorage.getItem('data')) || [];
    return savedBasket;
  });

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
    updateCartAmount();
  }, [basket, updateCartAmount]);

  return (
    <div className="shop">
      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        items.map((item) => {
          const { id, name, price, img } = item;
          return (
            <div className="col-4" key={id}>
              <div id={`product-id-${id}`} className="item">
                <a href={`/product/${id}`}>
                  <img width="220" src={img} alt={name} />
                  <div className="details">
                    <h3 className="prodtitle">{name}</h3>
                    <div className="price-quantity">
                      <h2 className="pricelabel">${price}</h2>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ShopGenerator;
