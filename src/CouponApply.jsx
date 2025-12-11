import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "./Store";
import "./Coupons.css";

function CuponApply() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(applyCoupon(input));
    setInput("");
  };

  return (
    <div className="coupon-box">
      <input
        type="text"
        placeholder="Enter Coupon Code"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="coupon-input"
      />
      <button className="coupon-btn" onClick={handleApply}>
        Apply
      </button>
    </div>
  );
}

export default CuponApply;
