import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const closeMenu = () => false;
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <img src={logo} className="logo" alt="logo" />
      <div className={click ? "navigator active" : "navigator"}>
        <li>
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/service" onClick={closeMenu}>
            Service
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/signUp" onClick={closeMenu}>
            Sign Up
          </Link>
        </li>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes className="icon" size={30} style={{ color: "#ffffff" }} />
        ) : (
          <FaBars className="icon" size={30} style={{ color: "#000001" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
