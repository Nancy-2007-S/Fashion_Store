import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import '../styles/Cart.css';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  const isCartEmpty = cartData.length === 0;

  return (
    <div className='cart-container'>
      <div className='cart-title'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div key={index} className='cart-item'>
              <div className='cart-item-info'>
                <img className='cart-item-image' src={productData.image[0]} alt="Photo" />
                <div className='cart-item-details'>
                  <p className='cart-item-name'>{productData.name}</p>
                  <div className='cart-item-price-size'>
                    <p>
                      {currency}&nbsp;{productData.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <p className='cart-item-size'>{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                className='cart-quantity-input'
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                className='cart-remove-icon'
                src={assets.bin_icon}
                alt="Remove"
              />
            </div>
          );
        })}
      </div>
      <div className='cart-total-section'>
        <div className='cart-total-wrapper'>
          <CartTotal />
          <div className='cart-checkout-btn-container'>
            <button
              onClick={() => navigate('/place-order')}
              className='cart-checkout-btn'
              disabled={isCartEmpty}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
