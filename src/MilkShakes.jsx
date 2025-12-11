import React, { useState } from "react";
import "./MilkShakes.css";
import { useDispatch } from "react-redux";
import { add } from "./Store";

function MilkShakes() {
 const milkItems = [
  { 
    id: 1,
    name: "Chocolate Milkshake",
    price: 150,
    desc: "Rich and creamy chocolate blended with ice cream.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0xYV3Y6IvDxUvHibgi35QY2fa7F6X3T1CGg&s"
  },
  { 
    id: 2,
    name: "Strawberry Milkshake",
    price: 140,
    desc: "Fresh strawberries blended with cold milk and ice cream.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTvf670woNFX9dwd01fs008zzfG-uVfxPcSg&s"
  },
  { 
    id: 3,
    name: "Vanilla Milkshake",
    price: 130,
    desc: "Classic vanilla flavored chilled milkshake.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdipJNa61bsuMAzRgG1ExO8g1fyr7FZ4SSXA&s"
  },
  { 
    id: 4,
    name: "Oreo Milkshake",
    price: 160,
    desc: "Crushed Oreo biscuits blended with creamy ice cream.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGph6qxHU2_yI5jZ54r4unll-Mw69bWUaakw&s"
  },
  { 
    id: 5,
    name: "Banana Milkshake",
    price: 120,
    desc: "Healthy banana shake blended with milk and honey.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqy0Abqif2kjG5u_XjP5DyeS042KWBzdT_2A&s"
  },
  { 
    id: 6,
    name: "Mango Milkshake",
    price: 150,
    desc: "Sweet mangoes blended with milk and ice cream for a tropical flavor.",
    img: "/public/Mango.jpg"
  },
  { 
    id: 7,
    name: "Butterscotch Milkshake",
    price: 160,
    desc: "Creamy butterscotch flavor with crunchy caramel bits.",
    img: "/public/butterscotch-milkshake.jpg"
  },
  { 
    id: 8,
    name: "Coffee Milkshake",
    price: 140,
    desc: "Smooth coffee blended with milk and ice cream for a refreshing taste.",
    img: "/public/coffee-milkshake.jpg"
  },
  { 
    id: 9,
    name: "Pista Milkshake",
    price: 150,
    desc: "Rich pistachio flavor milkshake garnished with chopped nuts.",
    img: "/public/pista_milkshake.jpg"
  },
  { 
    id: 10,
    name: "Blueberry Milkshake",
    price: 160,
    desc: "Fresh blueberries blended with milk and creamy ice cream.",
    img: "/public/BlueberryMilkshake.jpg"
  }
];


  // ⭐ Rating state
  const [rating, setRating] = useState({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = milkItems.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(milkItems.length / itemsPerPage);

  const dispatch = useDispatch();

  return (
    <div className="milk-container">
      <h1 className="milk-title">Veg Dry Items</h1>

      <ul className="milk-list">
        {currentItems.map((item) => (
          <li className="milk-card" key={item.id}>
            <img src={item.img} alt={item.name} className="milk-img" />
            <h3>{item.name}</h3>
            <p className="milk-desc">{item.desc}</p>

            {/* ⭐ Rating */}
            <div className="milk-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= (rating[item.id] || 0) ? "star filled" : "star"}
                  onClick={() =>
                    setRating({ ...rating, [item.id]: star })
                  }
                >
                  ★
                </span>
              ))}
            </div>

            <p className="milk-price"><b>₹{item.price}</b></p>

            <button className="milk-btn" onClick={() => dispatch(add(item))}>
              Add
            </button>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="pagination-buttons">
        <button
          className="prev-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="page-info">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="next-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MilkShakes;