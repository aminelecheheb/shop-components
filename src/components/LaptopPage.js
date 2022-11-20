import React from "react";
import { useGlobalContext } from "../context/appContext";
import "../styles/laptopPage.css";

const LaptopPage = () => {
  const {
    singleLaptop,
    addToCart,
    addedTrue,
    removeFromCart,
    addedFalse,
    closeSingleLaptop,
  } = useGlobalContext();
  const { title, image, price, description, id, added } =
    singleLaptop.laptopInfo;

  const handleAdd = (item, id) => {
    addToCart(item);
    addedTrue(id);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
    addedFalse(id);
  };
  return (
    <section className="single-laptop mt">
      <div className="container single-laptop-flex">
        <button className="close-single-laptop" onClick={closeSingleLaptop}>
          close
        </button>
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>
        <div className="page-infos">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
          <h2 className="price">{price}</h2>
          <div className="buttons">
            {added ? (
              <button
                className="target-btn target-btn-danger"
                onClick={() => handleRemove(id)}
              >
                remove
              </button>
            ) : (
              <button
                className="target-btn"
                onClick={() => handleAdd(singleLaptop.laptopInfo, id)}
              >
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopPage;
