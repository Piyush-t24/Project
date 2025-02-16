import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <h1>NEET Battleground</h1>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/play">Play Now</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
