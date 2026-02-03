import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";

import "../styles/List.css";

const List = ({ token }) => {
  const navigate = useNavigate();
  const [listProducts, setListProducts] = useState([]);

  const fetchListProducts = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");

      if (response.data.success) {
        setListProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(response.data.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/product/remove",
        { id },
        { headers: { token } }
      );

      if (response.data.success) {
        toast.info(response.data.message);
        await fetchListProducts();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchListProducts();
  }, []);

  return (
    <>
      <div className="list-container">
        {/* List Table Title */}
        <div className="list-grid-layout list-header">
          <b>Image</b>
          <b>Name</b>
          <b>Description</b>
          <b>Category</b>
          <b>Sub Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>
        {/* Display Products */}
        {listProducts.map((item, index) => (
          <div
            className="list-grid-layout list-row"
            key={index}
          >
            <img className="list-img" src={item.image[0]} alt="Product Image" />
            <p className="list-text-left">{item.name}</p>
            <p className="list-text-left">{item.description}</p>
            <p>{item.category}</p>
            <p>{item.subCategory}</p>
            <p>{currency(item.price)}</p>
            <div className="list-action-container">
              <p
                onClick={() => navigate(`/edit/${item._id}`)}
                className="list-action-btn list-btn-edit"
              >
                E
              </p>
              <p
                onClick={() => removeProduct(item._id)}
                className="list-action-btn list-btn-remove"
              >
                X
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
