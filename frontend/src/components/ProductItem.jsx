import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import '../styles/ProductItem.css';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="product-item" to={`/product/${id}`}>
      <div className="product-image-container">
        <img
          className="product-image"
          src={image[0]}
          alt="Product"
        />
      </div>
      <p className="product-name">{name}</p>
      <p className="product-price">
        {currency}&nbsp;
        {price.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>
    </Link>
  );
};

export default ProductItem;
