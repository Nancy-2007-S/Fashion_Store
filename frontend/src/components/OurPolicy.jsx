import React from 'react'
import { assets } from '../assets/assets'
import '../styles/OurPolicy.css';

const OurPolicy = () => {
    return (
        <div className='policy-container'>
            <div className='policy-item'>
                <div className='policy-icon-wrapper'>
                    <img src={assets.exchange_icon} className='policy-icon' alt="Exchange" />
                </div>
                <p className='policy-title'>Easy Return & Exchange</p>
                <p className='policy-desc'>
                    Hassle-free returns and exchanges within 10 days of purchase.
                </p>
            </div>
            <div className='policy-item'>
                <div className='policy-icon-wrapper'>
                    <img src={assets.quality_icon} className='policy-icon' alt="Quality" />
                </div>
                <p className='policy-title'>Top Quality Guaranteed</p>
                <p className='policy-desc'>
                    Every product is meticulously checked for the highest standards.
                </p>
            </div>
            <div className='policy-item'>
                <div className='policy-icon-wrapper'>
                    <img src={assets.support_img} className='policy-icon' alt="Support" />
                </div>
                <p className='policy-title'>24/7 Priority Support</p>
                <p className='policy-desc'>
                    Our dedicated team is always here to help you via any channel.
                </p>
            </div>
        </div>
    )
}

export default OurPolicy
