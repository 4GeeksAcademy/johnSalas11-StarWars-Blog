import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownButton } from 'react-bootstrap'; 
import { FaHeart } from 'react-icons/fa'; 
import "../../styles/home.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="navbar mb-3">
      <Link to="/">
        <h1 className="navbar-brand ms-3 h1 btn">StarWars</h1>
      </Link>

      <DropdownButton
        id="dropdown-favorites"
        title={<FaHeart />} 
        show={isDropdownOpen}
        onClick={toggleDropdown}
        className="ms-auto me-2" 
      >
        {store.favorites.length > 0 ? (
          store.favorites.map(fav => (
            <Dropdown.Item key={fav.uid}>
              <Link to={`/${fav.type}/${fav.uid}`}>
                {fav.name}
              </Link>
            </Dropdown.Item>
          ))
        ) : (
          <Dropdown.Item disabled>No favorites</Dropdown.Item>
        )}
      </DropdownButton>
    </nav>
  );
};
