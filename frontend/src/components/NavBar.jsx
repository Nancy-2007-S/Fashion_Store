import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import '../styles/NavBar.css';

const NavBar = () => {
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});

    }
    return (
        <div className='navbar-container'>
            <Link to='/'>
                <img src={assets.logo} className='navbar-logo' alt="Trendify" />
            </Link>
            <ul className='navbar-links'>
                <NavLink to='/' className='navbar-link-item'>
                    <p>HOME</p>
                    <hr className='navbar-link-active-line' />
                </NavLink>
                <NavLink to='/collection' className='navbar-link-item'>
                    <p>COLLECTION</p>
                    <hr className='navbar-link-active-line' />
                </NavLink>
                <NavLink to='/about' className='navbar-link-item'>
                    <p>ABOUT</p>
                    <hr className='navbar-link-active-line' />
                </NavLink>
                <NavLink to='/contact' className='navbar-link-item'>
                    <p>CONTACT</p>
                    <hr className='navbar-link-active-line' />
                </NavLink>
            </ul>
            <div className='navbar-actions'>
                <img
                    onClick={() => setShowSearch(true)}
                    src={assets.search_icon}
                    className='navbar-icon'
                    alt="Search Products"
                />
                <div className='navbar-profile-group'>

                    <img onClick={() => token ? null : navigate('/login')} src={assets.profile_icon} className='navbar-icon' alt="Your Profile" />

                    {token &&
                        <div className='navbar-dropdown'>
                            <div className='navbar-dropdown-content'>
                                <p className='navbar-dropdown-item'>Profile</p>
                                <p onClick={() => navigate('/orders')} className='navbar-dropdown-item'>Orders</p>
                                <p onClick={logout} className='navbar-dropdown-item'>Logout</p>
                            </div>
                        </div>}
                </div>
                <Link to='/cart' className='navbar-cart-link'>
                    <img src={assets.cart_icon} className='navbar-cart-icon' alt="Cart" />
                    <p className='navbar-cart-count'>{getCartCount()}</p>
                </Link>
            </div>
        </div>
    )
}

export default NavBar
