import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import '../styles/CartTotal.css';

const CartTotal = () => {

    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className='cart-total-container'>
            <div className='cart-total-title'>
                <Title text1={'CART'} text2={'TOTAL'} />
            </div>
            <div className='cart-total-details'>
                <div className='cart-total-row'>
                    <p className='cart-total-text'>
                        Sub Total
                    </p>
                    <p className='cart-total-text'>
                        {currency}&nbsp;{getCartAmount().toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
                <hr />
                <div className='cart-total-row'>
                    <p className='cart-total-text'>
                        Shipping Fee
                    </p>
                    <p className='cart-total-text'>
                        {currency}&nbsp;{delivery_fee.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
                <hr />
                <div className='cart-total-row'>
                    <p className='cart-total-total-text'>
                        Total Amount
                    </p>
                    <p className='cart-total-total-text'>
                        {currency}&nbsp;{(getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal
