import React from "react";
import { useSelector } from "react-redux";
import "./Orders.css";

function Orders() {
  const orders = useSelector((state) => state.orders);

  if (orders.length === 0) return <h2>No orders found</h2>;

  return (
    <div className="orders-container">
      <h1>Your Orders</h1>

      {orders.map((order) => (
        <div key={order.orderId} className="order-card">
          <p><strong>Order ID:</strong> {order.orderId}</p>
          <p><strong>Email:</strong> {order.customerEmail}</p>
          <p><strong>Date:</strong> {order.date}</p>
          <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
          <p><strong>Total Amount:</strong> ₹ {order.totalAmount.toFixed(2)}</p>
          <p><strong>Discount:</strong> ₹ {order.discountAmount.toFixed(2)}</p>
          <p><strong>GST:</strong> ₹ {order.gst.toFixed(2)}</p>
          <p><strong>Net Amount:</strong> ₹ {order.netAmount.toFixed(2)}</p>

          <h4>Items:</h4>
          {order.items.map((item) => (
            <div key={item.id} className="order-item">
              <p>{item.name} x {item.quantity} = ₹ {item.price * item.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;
