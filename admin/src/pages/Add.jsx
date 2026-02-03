import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

import "../styles/Add.css";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("price", price);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestSeller", bestSeller);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        resetForm();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  const resetForm = () => {
    setImage1(null);
    setImage2(null);
    setImage3(null);
    setImage4(null);
    setName("");
    setDescription("");
    setCategory("");
    setSubCategory("");
    setPrice("");
    setSizes([]);
    setBestSeller(false);
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="add-form"
    >
      <div>
        <p className="add-label-title">Upload Product Image(s)</p>
        <div className="add-img-upload-container">
          <label htmlFor="image1" className="add-img-label">
            <img
              className="add-img-preview"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt="Upload Images"
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
              accept="image/*"
            />
          </label>
          <label htmlFor="image2" className="add-img-label">
            <img
              className="add-img-preview"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt="Upload Images"
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
              accept="image/*"
            />
          </label>
          <label htmlFor="image3" className="add-img-label">
            <img
              className="add-img-preview"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt="Upload Images"
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
              accept="image/*"
            />
          </label>
          <label htmlFor="image4" className="add-img-label">
            <img
              className="add-img-preview"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt="Upload Images"
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
              accept="image/*"
            />
          </label>
        </div>
      </div>
      <div className="add-input-wrapper">
        <p className="add-label-title">Product Item Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="add-input"
          type="text"
          placeholder="Enter Product Name"
          required
        />
      </div>
      <div className="add-input-wrapper">
        <p className="add-label-title">Product Item Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="add-textarea"
          type="text"
          placeholder="Enter Product Description"
          required
        />
      </div>
      <div className="add-row-group">
        <div>
          <p className="add-label-title">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="add-select"
            required
          >
            <option value="">Select Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="add-label-title">Product Sub Category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="add-select"
            required
          >
            <option value="">Select Sub Category</option>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className="add-label-title">Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="add-input"
            type="number"
            placeholder="Enter Product Price"
            required
          />
        </div>
      </div>
      <div>
        <p className="add-label-title">Product Sizes</p>
        <div className="add-sizes-container">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
            >
              <p
                className={`add-size-btn ${sizes.includes(size)
                    ? "active"
                    : ""
                  }`}
              >
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="add-checkbox-row">
        <input
          type="checkbox"
          id="bestSeller"
          checked={bestSeller}
          onChange={() => setBestSeller((prev) => !prev)}
        />
        <label htmlFor="bestSeller" className="add-checkbox-label">
          Add to Best Seller
        </label>
      </div>
      <div className="add-row-group">
        <button
          type="submit"
          className="add-btn"
        >
          Add Product
        </button>
        <button
          type="button"
          className="add-btn"
          onClick={resetForm}
        >
          Reset Details
        </button>
      </div>
    </form>
  );
};

export default Add;
