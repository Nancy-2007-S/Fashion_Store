import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import '../styles/Product.css';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='product-container'>
      {/* Product Data */}
      <div className='product-content'>
        {/* Product Images */}
        <div className='product-images-section'>
          <div className='product-thumbnails'>
            {
              productData.image.map((item, index) => (
                <img
                  src={item}
                  key={index}
                  onClick={() => setImage(item)}
                  className={`product-thumbnail-image ${image === item ? 'product-thumbnail-active' : ''
                    }`}
                  alt="Photo"
                />
              ))
            }
          </div>
          <div className='product-main-image-container'>
            <img src={image} className='product-main-image' alt="Photo" />
          </div>
        </div>
        {/* Product Info */}
        <div className='product-info-section'>
          <h1 className='product-title'>{productData.name}</h1>
          <div className='product-rating'>
            <img src={assets.star_icon} alt="Ratings" className="product-star-icon" />
            <img src={assets.star_icon} alt="Ratings" className="product-star-icon" />
            <img src={assets.star_icon} alt="Ratings" className="product-star-icon" />
            <img src={assets.star_icon} alt="Ratings" className="product-star-icon" />
            <img src={assets.star_dull_icon} alt="Ratings" className="product-star-icon" />
            <p className='product-rating-count'>(122)</p>
          </div>
          <p className='product-price-text'>{currency}{productData.price}</p>
          <p className='product-description'>{productData.description}</p>
          <div className='product-size-container'>
            <p>Select Size</p>
            <div className='product-size-list'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`product-size-button ${item === size ? 'product-size-active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData._id, size)}
            className='product-add-to-cart-btn'
          >
            ADD TO CART
          </button>
          <hr className='product-divider' />
          <div className='product-benefits'>
            <p>Guaranteed 100% Authentic – Shop with Confidence!</p>
            <p>Enjoy Cash on Delivery – Pay at Your Doorstep!</p>
            <p>Hassle-Free Returns & Exchanges – 10 Days, No Questions Asked!</p>
          </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className='product-tabs-container'>
        <div className='product-tabs-header'>
          <b className='product-tab product-tab-active'>Description</b>
          <p className='product-tab'>Reviews (122)</p>
        </div>
        <div className='product-tab-content'>
          <p>Elevate your style with our meticulously crafted Trendify quality products. Designed with a perfect balance of elegance and practicality, these Trendify quality products made from premium materials that ensure both durability and comfort.</p>
          <p>Whether you're dressing up for a special occasion or adding a touch of sophistication to your everyday look, the Trendify quality products offer unparalleled versatility. Its timeless design, coupled with a flawless fit, makes it a must-have addition to any wardrobe. Don’t miss out on the chance to own a piece that combines both form and function—experience the difference today.</p>
        </div>
      </div>
      {/* Display Related Products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='product-opacity-0'></div>
}

export default Product
