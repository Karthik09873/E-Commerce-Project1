import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">

      <h1 className="about-title">About Us</h1>
      <p className="about-subtitle">
        Delicious food, great service, and a passion for quality ❤️
      </p>

      <div className="about-cards">

        <div className="about-card">
          <div className="icon">🍽️</div>
          <h2>Who We Are</h2>
          <p>
            We are a passionate food brand focused on delivering fresh,
            hygienic, and high-quality dishes at affordable prices.
          </p>
        </div>

        <div className="about-card">
          <div className="icon">⭐</div>
          <h2>Our Quality</h2>
          <p>
            From ingredients to final plate — we maintain top hygiene,
            freshness, taste, and consistent quality.
          </p>
        </div>

        <div className="about-card">
          <div className="icon">🚀</div>
          <h2>Our Mission</h2>
          <p>
            To serve food that brings happiness, comfort, and satisfaction to
            every customer every time.
          </p>
        </div>

        <div className="about-card">
          <div className="icon">🎯</div>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Fresh Ingredients</li>
            <li>✔ Fast and Safe Delivery</li>
            <li>✔ Affordable & Premium Quality</li>
            <li>✔ Customer-First Approach</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default AboutUs;
