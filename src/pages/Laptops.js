import React, { useEffect } from "react";
import Laptop from "../components/Laptop";
import { useGlobalContext } from "../context/appContext";
import "../styles/laptops.css";
import Cart from "../components/Cart";

const Laptops = () => {
  const { laptops, setActiveNav, cartIsOpen, closeCart } = useGlobalContext();

  useEffect(() => {
    setActiveNav("laptops");
  }, []);

  // useEffect(() => {
  //   cartIsOpen
  //     ? (document.body.style.overflow = "hidden")
  //     : (document.body.style.overflow = "unset");
  // }, [cartIsOpen]);
  return (
    <section className="items-page mt">
      {cartIsOpen && <Cart />}
      <div className="container items-container">
        {laptops.map((laptop) => {
          return <Laptop key={laptop.id} {...laptop} />;
        })}
      </div>
    </section>
  );
};

export default Laptops;
