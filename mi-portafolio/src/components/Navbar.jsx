import React from "react";

const Navbar = () => {
    return (
        <header className="navbar" id="inicio">
            <div className="container navbar-inner">
                <a className="brand" href="#inicio">
                    Giancarlo Ciulla
                </a>
                <nav aria-label="Navegacion principal">
                    <ul className="nav-links">
                        <li>
                            <a href="#inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="#sobre-mi">Sobre mi</a>
                        </li>
                        <li>
                            <a href="#stack">Stack</a>
                        </li>
                        <li>
                            <a href="#proyectos">Proyectos</a>
                        </li>
                        <li>
                            <a href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;