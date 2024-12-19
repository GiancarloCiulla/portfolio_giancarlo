import React from "react";
import "../styles/globals.scss"
import "../styles/Footer.scss";
// import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Giancarlo Ciulla. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
