import React from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useGlobalContext } from "../context/appContext";

const CartItem = ({ price, title, image, id, count }) => {
  const { removeFromCart, addedFalse, increaseCount, decreaseCount } =
    useGlobalContext();

  const handleRemove = () => {
    removeFromCart(id);
    addedFalse(id);
  };

  return (
    <article className="card-item">
      <div className="card-image-wrapper">
        <img src={image} alt="laptop" />
      </div>
      <div className="card-title-price">
        <h2 className="card-title">{title}</h2>
        <h3>{price} DA</h3>
      </div>
      <div className="card-btns">
        <button className="plus" onClick={() => increaseCount(id)}>
          <AiOutlinePlusSquare className="plus-icon" />
        </button>
        <span className="count">{count}</span>
        <button className="minus" onClick={() => decreaseCount(id)}>
          <AiOutlineMinusSquare className="minus-icon" />
        </button>
        <button className="card__remove" onClick={handleRemove}>
          <AiOutlineCloseSquare />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
