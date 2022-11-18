import React from "react";

const Laptop = ({ image, title, description }) => {
  return (
    <div className="item">
      <div className="img-container">
        <img src={image} alt="laptop" />
      </div>
      <div className="infos">
        <p className="title">{title}</p>
        <p className="description">
          {`${description.substring(0, 100)}...`}{" "}
          <button className="details-btn">Details</button>
        </p>
        <button className="target-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default Laptop;
