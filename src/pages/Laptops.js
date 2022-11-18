import React from "react";
import { laptops } from "../data/laptops-data";
import Laptop from "../components/Laptop";
import "../styles/laptops.css";

const Laptops = () => {
  return (
    <section className="items-page mt">
      <div className="container items-container">
        {laptops.map((laptop) => {
          return <Laptop key={laptop.id} {...laptop} />;
        })}
      </div>
    </section>
  );
};

export default Laptops;
