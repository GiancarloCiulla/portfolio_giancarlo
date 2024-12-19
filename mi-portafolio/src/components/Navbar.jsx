import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
// import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/portfolio">Portafolio</Link></li>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;