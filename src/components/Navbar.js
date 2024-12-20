 import { useState } from "react";
import "./Navbar.css";

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
            src="https://thumbs.dreamstime.com/b/education-logo-concept-graduation-cap-open-book-pages-transparency-flattened-education-logo-concept-graduation-104378681.jpg"
            alt="Career Path Logo"
          />
          <h1>CAREER_PATH</h1>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="/">Back</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/career">Start Now</a></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
