import React, { useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "../components/Cart";
import { Link } from "react-router-dom";
import "../styles/home.css";

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

const Home = () => {
  const { setActiveNav, cartIsOpen, closeCart } = useGlobalContext();
  useEffect(() => {
    setActiveNav("home");
  }, []);
  return (
    <motion.section
      className="home-page mt"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{
        duration: 0.2,
        ease: "linear",
      }}
      onClick={closeCart}
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
      <div className="container home">
        <h1 className="home-title">About me</h1>
        <p>
          I'm Amine, a junior web developer using mern stack, i love to create
          friendly interfaces with smooth transitions, i'm working as a
          freelancer for the last year, Sofeel free to contact me if you need
          anything !
        </p>

        <a
          className="target-btn green block"
          id="mail"
          href="mailto:aminelch01@gmail.com"
        >
          Send Email
        </a>

        <a
          className="target-btn block"
          href="https://github.com/aminelecheheb/shop-components"
          target="_blank"
        >
          Source Code
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
