import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className='contact-main'>
      <div className='contact-header'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='contact-content'>
        <img className='contact-image' src={assets.contact_img} alt="Contact" />

        <div className='contact-info'>
          <div className='contact-section-group'>
            <p className='contact-info-title'>Our Flagship Store</p>
            <p className='contact-info-text'>
              Trendify HQ, 354 Fashion Lane<br />
              Los Angeles, CA 90210, USA
            </p>
          </div>

          <div className='contact-section-group'>
            <p className='contact-info-title'>Direct Connect</p>
            <p className='contact-info-text'>
              Tel: (+1) 555-0123-447<br />
              Email: hello@trendify.com
            </p>
          </div>

          <div className='contact-section-group'>
            <p className='contact-info-title'>Careers at Trendify</p>
            <p className='contact-info-text'>
              Join our dynamic team and help shape the future of global fashion.
            </p>
            <button className='contact-button'>Explore Opportunities</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
