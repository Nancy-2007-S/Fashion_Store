import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import '../styles/SearchBar.css';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();

    // The search bar is now globally visible whenever showSearch is true.
    // We only hide it automatically if the user navigates away from pages where search makes sense, 
    // but the user's request was for "search bar too" implying general access.
    // I will keep it simple and just remove the restricted logic.

    return showSearch ? (
        <div className='search-bar-container'>
            <div className='search-input-wrapper'>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='search-input'
                    type="text" placeholder='Search...'
                />
                <img className='search-icon' src={assets.search_icon} alt="Search" />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className='search-close-icon'
                src={assets.cross_icon} alt="Close"
            />
        </div>
    ) : null
}

export default SearchBar
