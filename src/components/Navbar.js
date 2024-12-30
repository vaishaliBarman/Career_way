 import { useState } from "react";
import "./Navbar.css";
import image from "../images/Preview.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src={image}
            alt="Career Path Logo"
          />
          <h1>Pathify</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          
        </ul>
      </div>
    </>
  );
}

export default Navbar;
