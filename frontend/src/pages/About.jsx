import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import '../styles/About.css';

const About = () => {
  return (
    <div className='about-main'>
      <div className='about-header'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='about-content'>
        <img className='about-image' src={assets.about_img} alt="About" />
        <div className='about-text-container'>
          <p>
            Welcome to <b>Trendify</b>, where style meets quality. Our mission is to bring you the latest fashion trends and must-have items, all curated with an eye for quality and design. We believe that everyone deserves to express themselves through fashion.
          </p>
          <p>
            From the moment you browse our site to the day your order arrives, we are dedicated to providing a seamless shopping experience. Our team is always on the lookout for the freshest styles to keep your wardrobe ahead of the curve.
          </p>

          <div className='about-vision-mission'>
            <b className='about-strong-text'>Our Mission</b>
            <p>To empower you to express your unique style with high-quality, on-trend fashion that inspires confidence every single day.</p>

            <b className='about-strong-text'>Our Vision</b>
            <p>To be the world's most loved fashion destination, defined by cutting-edge design and an unwavering commitment to quality.</p>
          </div>
        </div>
      </div>

      <div className='about-choose-us-header'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='about-features-container'>
        <div className='about-feature-box'>
          <b>Quality Assurance</b>
          <p className='about-feature-text'>We meticulously inspect every item to ensure it meets our highest standards of excellence.</p>
        </div>
        <div className='about-feature-box'>
          <b>Seamless Experience</b>
          <p className='about-feature-text'>From intuitive browsing to fast shipping, we prioritize your convenience at every step.</p>
        </div>
        <div className='about-feature-box'>
          <b>Exceptional Service</b>
          <p className='about-feature-text'>Our dedicated support team is always ready to assist you for a truly satisfying journey.</p>
        </div>
      </div>
    </div>
  )
}

export default About
