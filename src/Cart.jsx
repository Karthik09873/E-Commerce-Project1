import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove, setDiscount, clear, addOrder } from "./Store";
import { useNavigate } from "react-router-dom";
import CuponApply from "./CouponApply";
import SendOrderEmail from "./SendOrderEmail";
import Timer from "./Timer";
import { QRCodeCanvas } from "qrcode.react";
import "./Cart.css";

function Cart() {
  const { discount, applied, message } = useSelector((state) => state.cupon);
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [customerEmail, setCustomerEmail] = useState("");
  const [showQrCode, setShowQrCode] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (totalAmount * discount) / 100;
  const priceAfterDiscount = totalAmount - discountAmount;
  const gst = (priceAfterDiscount * 18) / 100;
  const netAmount = priceAfterDiscount + gst;

  const upiId = "8688042934-2@ybl";
  const payerName = "MK Netflix Store";
  const upiLink = `upi://pay?pa=${upiId}&pn=${payerName}&am=${netAmount}&cu=INR`;

  // ✅ Checkout handler
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    const order = {
      orderId: Date.now(),
      customerEmail,
      items: cartItems,
      totalAmount,
      discountAmount,
      gst,
      netAmount,
      date: new Date().toLocaleString(),
      paymentStatus: "Pending",
    };

    dispatch(addOrder(order));
    dispatch(clear()); // Clear cart
    navigate("/orders"); // Redirect to Orders page
  };

  return (
    <div className="cart-container">
      <h1 className="title">Your Cart</h1>
      <Timer />

      <div className="items-box">
        {cartItems.map((item) => (
          <div className="item-card" key={item.id}>
            <img src={item.img} alt={item.name} className="item-img" />
            <div className="item-info">
              <h2>{item.name}</h2>
              <p>₹ {item.price}</p>
              <div className="qty-buttons">
                <button onClick={() => dispatch(decrease(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increase(item.id))}>+</button>
              </div>
            </div>
            <button className="remove-btn" onClick={() => dispatch(remove(item.id))}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="email-section">
        <h4> Enter your email to receive the order details:</h4>
        <input
          type="email"
          placeholder="Enter your email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
        />
      </div>

      <SendOrderEmail
        cartItems={cartItems}
        netAmount={netAmount}
        tax={gst}
        discountAmount={discountAmount}
        totalAmount={totalAmount}
        customerEmail={customerEmail}
      />

      <div className="qr-box">
        <button onClick={() => setShowQrCode(true)}>Scan QR Code</button>
        {showQrCode && (
          <>
            <h1>Scan To Pay</h1>
            <h1>₹ Total Amount: {netAmount}</h1>
            <QRCodeCanvas value={upiLink} size={256} />
          </>
        )}
      </div>

      <div className="bill-box">
        <h2>Total Amount: ₹ {totalAmount.toFixed(2)}</h2>
        <CuponApply />
        <p style={{ color: applied ? "green" : "red" }}>{message}</p>
        <div className="discount-buttons">
          <button onClick={() => dispatch(setDiscount(10))}>10% OFF</button>
          <button onClick={() => dispatch(setDiscount(20))}>20% OFF</button>
          <button onClick={() => dispatch(setDiscount(30))}>30% OFF</button>
        </div>
        <p>Discount ({discount}%): ₹ {discountAmount.toFixed(2)}</p>
        <p>Price After Discount: ₹ {priceAfterDiscount.toFixed(2)}</p>
        <p>GST 18%: ₹ {gst.toFixed(2)}</p>
        <h2 className="net">Net Amount: ₹ {netAmount.toFixed(2)}</h2>

        {/* ✅ Checkout Button */}
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
