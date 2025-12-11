import React, { useState } from "react";
import "./NonVeg.css";
import { useDispatch } from "react-redux";
import { add } from "./Store";

function NonVeg() {
  const nonvegItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 220,
      desc: "Fragrant basmati rice cooked with tender chicken and spices.",
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe.jpg"
    },
    {
      id: 2,
      name: "Butter Chicken",
      price: 260,
      desc: "Creamy tomato-based curry with tender grilled chicken pieces.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGiQ07ysk_nhy8ua-2A6eUy8Jw2Nve_cZng&s"
    },
    {
      id: 3,
      name: "Mutton Curry",
      price: 300,
      desc: "Slow-cooked tender mutton in a rich and spicy gravy.",
      img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Curry.jpg"
    },
    {
      id: 4,
      name: "Fish Fry",
      price: 180,
      desc: "Crispy fried fish marinated with traditional spices.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBaCcHb_60lvNxxZcKjItTkwu5v7djvKfWg&s"
    },
    {
      id: 5,
      name: "Prawns Masala",
      price: 280,
      desc: "Spicy and flavorful prawns cooked in thick onion-tomato gravy.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXY74rfHvOUUW41cK953b14aCNdOcr6hzfBQ&s"
    },

    // 🔥 Duplicate data but unique IDs
    {
      id: 6,
      name: "Chicken Biryani",
      price: 220,
      desc: "Fragrant basmati rice cooked with tender chicken and spices.",
      img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/chicken-biryani-recipe.jpg"
    },
    {
      id: 7,
      name: "Butter Chicken",
      price: 260,
      desc: "Creamy tomato-based curry with tender grilled chicken pieces.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGiQ07ysk_nhy8ua-2A6eUy8Jw2Nve_cZng&s"
    },
    {
      id: 8,
      name: "Mutton Curry",
      price: 300,
      desc: "Slow-cooked tender mutton in a rich and spicy gravy.",
      img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Curry.jpg"
    },
    {
      id: 9,
      name: "Fish Fry",
      price: 180,
      desc: "Crispy fried fish marinated with traditional spices.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBaCcHb_60lvNxxZcKjItTkwu5v7djvKfWg&s"
    },
    {
      id: 10,
      name: "Prawns Masala",
      price: 280,
      desc: "Spicy and flavorful prawns cooked in thick onion-tomato gravy.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXY74rfHvOUUW41cK953b14aCNdOcr6hzfBQ&s"
    }
  ];

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // show 4 per page

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = nonvegItems.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(nonvegItems.length / itemsPerPage);

  const dispatch = useDispatch();

  return (
    <div className="veg-container">
      <h1 className="veg-title">Non-Veg Dry Items</h1>

      <ul className="veg-list">
        {currentItems.map((item) => (
          <li className="veg-card" key={item.id}>
            <img src={item.img} alt={item.name} className="veg-img" />
            <h3>{item.name}</h3>
            <p className="veg-desc">{item.desc}</p>
            <p className="veg-price"><b>₹{item.price}</b></p>

            <button className="veg-btn" onClick={() => dispatch(add(item))}>
              Add
            </button>
          </li>
        ))}
      </ul>

      {/* PAGINATION BUTTONS */}
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

export default NonVeg;
