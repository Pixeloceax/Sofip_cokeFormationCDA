import { useState } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="burger-menu">
        <div
          className={isOpen ? "burger-menu-btn open" : "burger-menu-btn"}
          onClick={toggleMenu}
        >
          <div className="burger-menu-bar1"></div>
          <div className="burger-menu-bar2"></div>
          <div className="burger-menu-bar3"></div>
        </div>
        <ul className={isOpen ? "burger-menu-links open" : "burger-menu-links"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <img src={logo} className="cooke-logo" alt="logo" />
      <div className="buttons-container">
        <button className="cart">🛒 panier</button>

        <button className="login">connexion</button>
      </div>
    </nav>
  );
};

export default Header;
