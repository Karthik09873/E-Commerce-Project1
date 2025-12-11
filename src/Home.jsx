import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="home-wrapper">
      <h1>Welcome, {user?.name} 👋</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      {/* HERO SECTION */}
      <div className="hero-box">
       <video
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
      src="https://cdn.pixabay.com/video/2017/08/29/11625-231571945_large.mp4"
    ></video>

        <div className="hero-content">
          <h1 className="hero-title">Welcome to Our Restaurant</h1>
          <p className="hero-desc">
            Delicious food, fresh ingredients, and a beautiful experience.
          </p>
          <button className="hero-btn" onClick={() => window.location.href = "/menu"}>Explore Menu</button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="features-container">

        <div className="feature-card">
          <img
            src="https://www.empactgroup.co.za/wp-content/uploads/2024/03/February2024-Employee-Wellness.jpg"
            alt="Veg Items"
            className="feature-img"
          />
          <h3>Fresh Veg Items</h3>
          <p>Healthy, delicious, and cooked with love.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://thumbs.dreamstime.com/b/crispy-fried-chicken-pieces-flying-air-surrounded-spices-crumbs-creating-dynamic-appetizing-scene-warm-crispy-377124653.jpg"
            alt="Non-Veg Items"
            className="feature-img"
          />
          <h3>Non-Veg Special</h3>
          <p>Hot, spicy and mouth-watering flavors.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://img.freepik.com/free-photo/front-view-whipped-cream-with-black-currants-white-cherries-bowls-green-surface_141793-17815.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Milkshakes"
            className="feature-img"
          />
          <h3>Milkshakes</h3>
          <p>Thick, creamy and made with real fruits.</p>
        </div>

      </div>

    </div>
  );
}

export default Home;
