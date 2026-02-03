import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

import "../styles/Orders.css";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      )

      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
  const statusHandler = async (event, orderId) => {
    try {
      const newStatus = event.target.value;
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: newStatus },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success("Status updated successfully");
        fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message || "Something went wrong");
    }
  };

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className="orders-page">
      <h3 className="orders-title">Order Page</h3>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div
            key={index}
            className="order-grid"
          >
            <img className="order-icon" src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {order.items.map((item, itemIndex) => (
                  <p className="order-item-text" key={itemIndex}>
                    {item.name} x {item.quantity}{' '}
                    <span>{item.size}</span>
                  </p>
                ))}
              </div>
              <p className="order-address-name">
                {order.address.firstName + ' ' + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ','}</p>
                <p>
                  {order.address.city +
                    ', ' +
                    order.address.state +
                    ', ' +
                    order.address.country +
                    ', ' +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="order-info-text">
                Items : {order.items.length}
              </p>
              <p className="order-method-text">Method : {order.paymentMethod}</p>
              <p>Payment : {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date : {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="order-info-text">
              {currency}
              {order.amount} $
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="order-status-select"
            >
              <option value="Order Placed">Order Placed</option>
              <option value="Paking">Paking</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
