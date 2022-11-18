import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { social } from "../data/navbar-data";
import "../styles/Navbar.css";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="nav">
      <div className="nav-center container">
        <div className="nav-header">
          <h2 className="logo">LOGO</h2>
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li>
              <Link className="link" to="/items">
                items
              </Link>
            </li>
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
        <div className="shopping-container">
          <button className="shopping">
            <span className="number-of-items">0</span>
            <HiShoppingBag className="icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
