import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Navbar = () => {

	
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 btn">StarWars</span>
			</Link>
		</nav>
	);
};
