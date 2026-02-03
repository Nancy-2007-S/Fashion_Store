import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import '../styles/Collection.css';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="collection-flex">
      {/* Filter Options */}
      <div className="collection-filters">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="collection-filter-title"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="Dropdown"
          />
        </p>

        {/* Category Filters */}
        <div className={`filter-category-box ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="filter-group-title">CATEGORIES</p>
          <div className="filter-options-list">
            <label className="filter-option-label">
              <input
                className="filter-checkbox"
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
                checked={category.includes("Men")}
              />
              Men
            </label>
            <label className="filter-option-label">
              <input
                className="filter-checkbox"
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
                checked={category.includes("Women")}
              />
              Women
            </label>
            <label className="filter-option-label">
              <input
                className="filter-checkbox"
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
                checked={category.includes("Kids")}
              />
              Kids
            </label>
          </div>
        </div>

        {/* Sub Category Filters */}
        <div className={`filter-category-box ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="filter-group-title">TYPES</p>
          <div className="filter-options-list">
            <label className="filter-option-label">
              <input
                className="filter-checkbox"
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Topwear")}
              />
              Topwear
            </label>
            <label className="filter-option-label">
              <input
                className="filter-checkbox"
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Bottomwear")}
              />
              Bottomwear
            </label>
            <label className="filter-option-label">
              <input
                className="filter-checkbox"
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
                checked={subCategory.includes("Winterwear")}
              />
              Winterwear
            </label>
          </div>
        </div>

        {/* Clear Filters Button */}
        <button
          className={`clear-filters-btn ${showFilter ? "block" : "hidden"} sm:block`}
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* View Product Items */}
      <div className="collection-main">
        <div className="collection-top-bar">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="sort-select"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="collection-grid">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
