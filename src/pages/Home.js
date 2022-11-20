import React, { useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import { motion } from "framer-motion";

const Home = () => {
  const { setActiveNav } = useGlobalContext();
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
    >
      <div className="container">
        <h1>this is home page</h1>
      </div>
    </motion.section>
  );
};

export default Home;
