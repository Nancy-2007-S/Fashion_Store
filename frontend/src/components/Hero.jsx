import React from 'react'
import { assets } from '../assets/assets'
import '../styles/Hero.css';

const Hero = () => {
    return (
        <div className='hero-container'>
            {/* Hero Left Side */}
            <div className='hero-left'>
                <div className='hero-text-content'>
                    <div className='hero-subtitle-wrapper'>
                        <p className='hero-line'></p>
                        <p className='hero-subtitle'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='hero-title'>Latest Arrivals</h1>
                    <div className='hero-cta-wrapper'>
                        <p className='hero-cta-text'>SHOP NOW</p>
                        <p className='hero-line'></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <div className='hero-img-wrapper'>
                <img className='hero-img' src="https://images.pexels.com/photos/7973302/pexels-photo-7973302.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Hero" />
            </div>
        </div>
    )
}

export default Hero
