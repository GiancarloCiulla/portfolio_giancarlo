import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>Disenado y desarrollado por Giancarlo Ciulla</p>
                <p>&copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;
