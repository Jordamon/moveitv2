import React, { useState, useContext, useEffect } from 'react';
import ShopItemsData from '../shop/Data.jsx';
import { CartContext } from '../cartContext/CartContext';
import PRODUCTDETAILSCSS from './ProductDetails.module.css';

const SingleProductDetails = ({ id }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { increment, basket, setBasket, updateCartAmount } = useContext(CartContext);
  const product = ShopItemsData.find((item) => item.id === id);

  const changeImage = (newImageSrc) => {
    var productImg = document.getElementById('ProductImg');
    productImg.src = newImageSrc;
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorMessage('Please select a size before adding to the cart.');
      return;
    }

    const existingItemIndex = basket.findIndex((item) => item.id === id && item.size === selectedSize);
    if (existingItemIndex === -1) {
      increment(id, selectedQuantity, selectedSize);
    } else {
      const updatedBasket = [...basket];
      updatedBasket[existingItemIndex].quantity += selectedQuantity;
      setBasket(updatedBasket);
    }

    setErrorMessage('');
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
    updateCartAmount();
  }, [basket, updateCartAmount]);

  return (
    <div className={PRODUCTDETAILSCSS.productDetailsContainer}>
      {product ? (
        <div className={PRODUCTDETAILSCSS.smallContainer}>
          <div className={PRODUCTDETAILSCSS.row}>
            <div className={PRODUCTDETAILSCSS.col2} id="imgCol">
              <img
                src={product.img}
                className={PRODUCTDETAILSCSS.mainProductImg}
                id="ProductImg"
                alt={product.name}
                width="100%"
              />
              <div className={PRODUCTDETAILSCSS.smallImgRow}>
                {product.img && (
                  <div className={PRODUCTDETAILSCSS.smallImgCol}>
                    <img
                      src={product.img}
                      alt={product.name}
                      width="100%"
                      className={PRODUCTDETAILSCSS.smallImg}
                      onClick={() => changeImage(product.img)}
                    />
                  </div>
                )}
                {product.img2 && (
                  <div className={PRODUCTDETAILSCSS.smallImgCol}>
                    <img
                      src={product.img2}
                      alt={product.name}
                      width="100%"
                      className={PRODUCTDETAILSCSS.smallImg}
                      onClick={() => changeImage(product.img2)}
                    />
                  </div>
                )}
                {product.img3 && (
                  <div className={PRODUCTDETAILSCSS.smallImgCol}>
                    <img
                      src={product.img3}
                      alt={product.name}
                      width="100%"
                      className={PRODUCTDETAILSCSS.smallImg}
                      onClick={() => changeImage(product.img3)}
                    />
                  </div>
                )}
                {product.img4 && (
                  <div className={PRODUCTDETAILSCSS.smallImgCol}>
                    <img
                      src={product.img4}
                      alt={product.name}
                      width="100%"
                      className={PRODUCTDETAILSCSS.smallImg}
                      onClick={() => changeImage(product.img4)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className={PRODUCTDETAILSCSS.proDetailsCol2}>
              <p>{product.category}</p>
              <h1>{product.name}</h1>
              <h4>£{product.price}</h4>
              <select
                name="size"
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                <option value="">Select Size</option>
                <option value="XXL">XXL</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
              </select>
              <select
                name="quantity"
                id="quantity"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <div className={PRODUCTDETAILSCSS.addToCartBtn}>
              <button className={PRODUCTDETAILSCSS.frog}onClick={handleAddToCart}>Add To Cart</button>
              </div>
              {/* <div className={PRODUCTDETAILSCSS.proDetails}>
                <h3>
                  Product Details <i className="fa fa-indent"></i>
                </h3>
                <br />
                <p>{product.description}</p>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default SingleProductDetails;
