import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("User not found! Please sign up first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {
      alert("Login Successful!");
      navigate("/home");
    } else {
      alert("Invalid Email or Password!");
    }
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignin}>
        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign In</button>

        <p>
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Sign Up</span>
        </p>
      </form>
    </div>
  );
}

export default Signin;
