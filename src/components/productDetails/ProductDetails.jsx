import React, { useState, useContext, useEffect } from 'react';
import ShopItemsData from '../shop/Data.jsx';
import './ProductDetails.css';
import { CartContext } from '../cartContext/CartContext';

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

    // Find the item in the cart, if it exists
    const existingItemIndex = basket.findIndex((item) => item.id === id && item.size === selectedSize);
    if (existingItemIndex === -1) {
      // If the item is not in the cart, add it with the selected quantity and size
      increment(id, selectedQuantity, selectedSize);
    } else {
      // If the item is already in the cart, update its quantity with the selected quantity
      const updatedBasket = [...basket];
      updatedBasket[existingItemIndex].quantity += selectedQuantity;
      setBasket(updatedBasket);
    }

    // Clear any previous error messages
    setErrorMessage('');
  };

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basket));
    updateCartAmount();
  }, [basket, updateCartAmount]);

  return (
    <div className='product-details-container'>
      {product ? (
        <div className="small-container single-product">
          <div className="row">
            <div className="col-2 img-col">
              <img
                src={product.img}
                className="main-product-img"
                id="ProductImg"
                alt={product.name}
                width="100%"
              />
              <div className="small-img-row">
                {/* Render smaller images */}
                {product.img && (
                  <div className="small-img-col">
                    <img
                      src={product.img}
                      alt={product.name}
                      width="100%"
                      className="small-img"
                      onClick={() => changeImage(product.img)}
                    />
                  </div>
                )}
                {product.img2 && (
                  <div className="small-img-col">
                    <img
                      src={product.img2}
                      alt={product.name}
                      width="100%"
                      className="small-img"
                      onClick={() => changeImage(product.img2)}
                    />
                  </div>
                )}
                {product.img3 && (
                  <div className="small-img-col">
                    <img
                      src={product.img3}
                      alt={product.name}
                      width="100%"
                      className="small-img"
                      onClick={() => changeImage(product.img3)}
                    />
                  </div>
                )}
                {product.img4 && (
                  <div className="small-img-col">
                    <img
                      src={product.img4}
                      alt={product.name}
                      width="100%"
                      className="small-img"
                      onClick={() => changeImage(product.img4)}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="pro-details-col-2">
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
                {/* Add more options based on your requirement */}
              </select>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              <button className='btn--primary addbtn' onClick={handleAddToCart}>Add To Cart</button>
              <div className="prodetails">
              <h3>
                Product Details <i className="fa fa-indent"></i>
              </h3>
              <br />
              <p>{product.description}</p>
            </div>
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
