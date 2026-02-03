import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className='footer-container'>
                <div className='footer-brand-section'>
                    <Link to='/'>
                        <img src={assets.logo} className='footer-logo' alt="Trendify" />
                    </Link>
                    <p className='footer-description'>
                        Thank you for shopping with Trendify! We're dedicated to bringing you the latest trends and top-quality products. Follow us on social media for updates, exclusive offers, and more. Your style journey starts here—let's make it unforgettable!
                    </p>
                </div>

                <div>
                    <p className='footer-heading'>COMPANY</p>
                    <ul className='footer-links-list'>
                        <Link to='/' className='footer-link-item'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about' className='footer-link-item'>
                            <li>About Us</li>
                        </Link>
                        <Link to='/about' className='footer-link-item'>
                            <li>Delivery</li>
                        </Link>
                        <Link to='/about' className='footer-link-item'>
                            <li>Privacy & Policy</li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <p className='footer-heading'>GET IN TOUCH</p>
                    <ul className='footer-contact-list'>
                        <li className='footer-contact-item'>+11-558-669-447</li>
                        <li className='footer-contact-item'>contact.trendify@info.com</li>
                    </ul>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='footer-copyright'>&copy; 2024 Trendify. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
