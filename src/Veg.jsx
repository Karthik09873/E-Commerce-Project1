import React, { useState } from "react";
import "./Veg.css";
import { useDispatch } from "react-redux";
import { add } from "./Store";

function Veg() {
  const vegItems = [
    { id: 1, name: "Panner Butter Masala", price: 250, desc: "Panner Butter Masala",
      img: "/public/PannerButterMasala.jpg"
    },
    { id: 2, name: "Veg Biryani", price: 180,
      desc: "Aromatic rice cooked with fresh vegetables and spices.",
      img: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-2.jpg"
    },
    { id: 3, name: "Aloo Gobi", price: 150,
      desc: "Classic dry curry made from potatoes and cauliflower.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXzGI9vkVxIBqEQs3pExVrrOUE7xj1uFaoQ&s"
    },
    { id: 4, name: "Dal Tadka", price: 130,
      desc: "Flavorful yellow lentils tempered with ghee, garlic, and spices.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIX8JFszwwFRu3ccbCqGXs1MrDFB5cJNAVCA&s"
    },
    { id: 5, name: "Chole Bhature", price: 160,
      desc: "Spicy chickpeas served with fluffy fried bhature.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK-ZC5dt1Jy1eF1eMBBofDrRjFRNBBXsXKA&s"
    },

    { id: 6, name: "Panner Butter Masala", price: 250, desc: "Panner Butter Masala",
      img: "/public/PannerButterMasala.jpg"
    },
    { id: 7, name: "Veg Biryani", price: 180,
      desc: "Aromatic rice cooked with fresh vegetables and spices.",
      img: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-2.jpg"
    },
    { id: 8, name: "Aloo Gobi", price: 150,
      desc: "Classic dry curry made from potatoes and cauliflower.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuXzGI9vkVxIBqEQs3pExVrrOUE7xj1uFaoQ&s"
    },
    { id: 9, name: "Dal Tadka", price: 130,
      desc: "Flavorful yellow lentils tempered with ghee, garlic, and spices.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIX8JFszwwFRu3ccbCqGXs1MrDFB5cJNAVCA&s"
    },
    { id: 10, name: "Chole Bhature", price: 160,
      desc: "Spicy chickpeas served with fluffy fried bhature.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaK-ZC5dt1Jy1eF1eMBBofDrRjFRNBBXsXKA&s"
    }
  ];

  // ⭐ Rating state
  const [rating, setRating] = useState({});

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = vegItems.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);

  const dispatch = useDispatch();

  return (
    <div className="veg-container">
      <h1 className="veg-title">Veg Dry Items</h1>

      <ul className="veg-list">
        {currentItems.map((item) => (
          <li className="veg-card" key={item.id}>
            <img src={item.img} alt={item.name} className="veg-img" />
            <h3>{item.name}</h3>
            <p className="veg-desc">{item.desc}</p>

            {/* ⭐ Rating */}
            <div className="veg-rating">
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

            <p className="veg-price"><b>₹{item.price}</b></p>

            <button className="veg-btn" onClick={() => dispatch(add(item))}>
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

export default Veg;
