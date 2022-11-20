import React, { useEffect, useState } from "react";
import Laptop from "../components/Laptop";
import { useGlobalContext } from "../context/appContext";
import "../styles/laptops.css";
import Cart from "../components/Cart";
import { motion, AnimatePresence } from "framer-motion";
import LaptopPage from "../components/LaptopPage";

const sidebarVar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      duration: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 100% 0%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 2,
    },
  },
};
const modelVar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
      duration: 2,
    },
  }),
  closed: {
    clipPath: "circle(1px at 50% 50%)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      duration: 2,
    },
  },
};

const Laptops = () => {
  const { laptops, setActiveNav, cartIsOpen, closeCart, singleLaptop } =
    useGlobalContext();

  useEffect(() => {
    setActiveNav("laptops");
  }, []);

  useEffect(() => {
    singleLaptop.open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [singleLaptop.open]);

  return (
    <motion.section
      className="items-page mt"
      onClick={closeCart}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
    >
      <AnimatePresence>
        {cartIsOpen && (
          <motion.div
            className="card"
            variants={sidebarVar}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => e.stopPropagation()}
          >
            <Cart />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {singleLaptop.open && (
          <motion.section
            className="single-laptop mt"
            variants={modelVar}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <LaptopPage />
          </motion.section>
        )}
      </AnimatePresence>
      <div className="container items-container">
        {laptops.map((laptop) => {
          return <Laptop key={laptop.id} {...laptop} />;
        })}
      </div>
    </motion.section>
  );
};

export default Laptops;
