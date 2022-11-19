import React, { useEffect } from "react";
import { useGlobalContext } from "../context/appContext";

const Home = () => {
  const { setActiveNav } = useGlobalContext();
  useEffect(() => {
    setActiveNav("home");
  }, []);
  return <div>Home</div>;
};

export default Home;
