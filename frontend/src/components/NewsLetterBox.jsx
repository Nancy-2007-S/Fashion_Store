import React from 'react'
import '../styles/NewsLetterBox.css';

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }

    return (
        <div className='newsletter-container'>
            <p className='newsletter-heading'>Unlock 20% Off | Subscribe Today!</p>
            <p className='newsletter-subheading'>Don't miss out—unlock your savings now by subscribing below!</p>
            <form onClick={onSubmitHandler} className='newsletter-form'>
                <input
                    className='newsletter-input'
                    type="email"
                    placeholder='hello@gmail.com'
                    required
                />
                <button type='submit' className='newsletter-button'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsLetterBox
