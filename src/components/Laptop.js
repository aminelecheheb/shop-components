import React from "react";
import { useGlobalContext } from "../context/appContext";

const Laptop = ({ image, title, description, price, id, added }) => {
  const item = { image, title, price, id, count: 1, description };
  const { addToCart, removeFromCart, addedTrue, addedFalse, openSingleLaptop } =
    useGlobalContext();

  const handleAdd = (item, id) => {
    addToCart(item);
    addedTrue(id);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    addedFalse(id);
  };
  return (
    <div className="item">
      <div className="img-container">
        <img src={image} alt="laptop" />
      </div>
      <div className="infos">
        <p className="item-title">
          {title} <span className="price">{price}</span>
        </p>
        <p className="description">
          {`${description.substring(0, 100)}...`}{" "}
          <button
            className="details-btn"
            onClick={() => openSingleLaptop({ ...item, added })}
          >
            Details
          </button>
        </p>
        {added ? (
          <button
            className="target-btn target-btn-danger"
            onClick={() => handleRemove(id)}
          >
            remove
          </button>
        ) : (
          <button className="target-btn" onClick={() => handleAdd(item, id)}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Laptop;
