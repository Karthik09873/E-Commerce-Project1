import React, { useState } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [showCard, setShowCard] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowCard(true);

    // Auto hide after 4 seconds (optional)
    setTimeout(() => setShowCard(false), 4000);
  };

  return (
    <div className="contact-wrapper">

      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>We are happy to help you anytime 😊</p>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" required />

          <input type="email" placeholder="Enter your email"   required />

          <textarea placeholder="Enter your message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* SLIDE-UP RESPONSE CARD */}
      {showCard && (
        <div className="slide-card">
          <h3>🎉 Message Sent Successfully!</h3>
          <p>We will contact you soon. Thank you!</p>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
