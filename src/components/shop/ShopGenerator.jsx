import React, { useContext } from 'react';
import { CartContext } from '../cartContext/CartContext';

const ShopGenerator = ({ items }) => {
  const { updateCartAmount } = useContext(CartContext);

  return (
    <div className="shop">
      {items.map((item) => {
        const { id, name, price, img } = item;

        return (
          <div className="col-4" key={id}>
            <div id={`product-id-${id}`} className="item">
              <a href={`/product/${id}`}>
                <img width="220" src={img} alt="" />
                <div className="details">
                  <h3 className='prodtitle'>{name}</h3>
                  <div className="price-quantity">
                    <h2 className='pricelabel'>$ {price}</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShopGenerator;
