import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/appContext";
import CartItem from "./CartItem";
import "../styles/cart.css";

const Cart = () => {
  const { cartItems, cartIsOpen } = useGlobalContext();
  let totalPrice = 0;
  cartItems.map((item) => {
    let { price, count } = item;
    totalPrice = totalPrice + price * count;
    return totalPrice;
  });
  const handleOverFlow = () => {
    document.body.style.overflow = "hidden";
  };
  const removeOverFlow = () => {
    document.body.style.overflow = "unset";
  };
  return (
    <>
      {cartItems.length < 1 && (
        <h2 className="empty-card">Your card is empty</h2>
      )}
      {cartItems.map((item) => {
        const { id } = item;
        return <CartItem key={id} {...item} />;
      })}
      {cartItems.length >= 1 && (
        <div className="total-price">
          <h2>
            Your total price is : <span>{totalPrice} DA</span>
          </h2>
        </div>
      )}
    </>
  );
};

export default Cart;
