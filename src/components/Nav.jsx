import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
        <Link to="/Ingreso">Ingreso</Link>
        <Link to="/Lugares">Lugares</Link>
        <Link to="/Restaurantes">Restaurantes</Link>
        <Link to="/Diversion">Diversión</Link>
        <Link to="/Nosotros">Nosotros</Link>
      </nav>
    </div>
  );
};

export default Nav;
