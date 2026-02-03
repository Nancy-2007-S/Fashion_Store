import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios';
import '../styles/Orders.css';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      let allOrdersItem = []
      response.data.orders.map((order) => {
        order.items.map((item) => {
          item['status'] = order.status
          item['payment'] = order.payment
          item['paymentMethod'] = order.paymentMethod
          item['date'] = order.date
          allOrdersItem.push(item)
        })
      })
      setorderData(allOrdersItem)
    } catch (error) {

    }
  }
  useEffect(() => {
    loadOrderData()
  }, [token])
  return (
    <div className='orders-container'>
      <div className='orders-title'>
        <Title text1={'YOUR'} text2={'ORDERS'} />
      </div>
      <div>
        {
          orderData.map((item, index) => (
            <div key={index} className='order-item-card'>
              <div className='order-item-left'>
                <img className='order-item-image' src={item.image[0]} alt="Photo" />
                <div className='order-item-details'>
                  <p className='order-item-name'>{item.name}</p>
                  <div className='order-item-meta-row'>
                    <p className='order-item-price'>{currency}&nbsp;{item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    <p>Quantity:{item.quantity}</p>
                    <p>Size:{item.size}</p>
                  </div>
                  <p className='order-item-meta'>Date:&nbsp;<span className='order-item-meta-value'>{new Date(item.date).toDateString()}</span></p>
                  <p className='order-item-meta'>Payment:&nbsp;<span className='order-item-meta-value'>{item.paymentMethod}</span></p>
                </div>
              </div>
              <div className='order-item-right'>
                <div className='order-status'>
                  <p className='order-status-dot'></p>
                  <p className='order-status-text'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='order-track-btn'>TRACK ORDER</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders
