import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { social } from "../data/navbar-data";
import "../styles/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const Navbar = () => {
  const { cartItems, activeNav, toggleCart, cartIsOpen } = useGlobalContext();
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

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
              <Link
                className={activeNav === "home" ? "link active" : "link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={activeNav === "laptops" ? "link active" : "link"}
                to="/laptops"
              >
                laptops
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
          <button className="shopping" onClick={toggleCart}>
            <span className="number-of-items">{cartItems.length}</span>
            <AiOutlineShoppingCart
              className={cartIsOpen ? "icon icon-danger" : "icon"}
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
