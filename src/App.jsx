import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import MilkShakes from './MilkShakes';
import Cart from './Cart';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import "./Navbar.css";
import { useSelector } from "react-redux";
import Menu from './Menu';
import Orders from './Orders';
import Signup from './Signup';
import Signin from './Signin';

// ------------------------------------------------------
// ✅ Protected Route (MUST BE OUTSIDE COMPONENT)
// ------------------------------------------------------
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user"); // user logged in check
  return user ? children : <Navigate to="/signin" replace />;
}

// ------------------------------------------------------
// APP COMPONENT
// ------------------------------------------------------
function App() {

  let cartItems = useSelector((state) => state.cart);

  let cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <BrowserRouter>

        <nav className="navbar">
          <div className="navbar-container">

            <h1 className="hero-title">Garden Grill</h1>

            <div className="nav-links">
              <Link to="/home" className="link">Home</Link>
              <Link to="/veg" className="link">Veg</Link>
              <Link to="/nonveg" className="link">Non-Veg</Link>
              <Link to="/milkshakes" className="link">MilkShakes</Link>
              <Link to="/cart" className="link">Cart {cartCount}</Link>
              <Link to="/aboutus" className="link">About Us</Link>
              <Link to="/contactus" className="link">Contact Us</Link>
              <Link to="/menu" className="link">Menu</Link>
              <Link to="/orders" className="link">Orders</Link>
              <Link to="/signup" className="link">Sign Up</Link>
              <Link to="/" className="link">Sign In</Link>
            </div>

          </div>
        </nav>

    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/veg" element={<ProtectedRoute><Veg /></ProtectedRoute>} />
      <Route path="/nonveg" element={<ProtectedRoute><NonVeg /></ProtectedRoute>} />
      <Route path="/milkshakes" element={<ProtectedRoute><MilkShakes /></ProtectedRoute>} />
      <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
      <Route path="/aboutus" element={<ProtectedRoute><AboutUs /></ProtectedRoute>} />
      <Route path="/contactus" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
      <Route path="/menu" element={<ProtectedRoute><Menu /></ProtectedRoute>} />  
  </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
