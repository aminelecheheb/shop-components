import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { laptops } from "../data/laptops-data";

const initialState = {
  laptops: laptops,
  cartIsOpen: false,
  cartItems: [],
  activeNav: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const addedTrue = (id) => {
    dispatch({ type: "ADDED_TRUE", payload: id });
  };

  const addedFalse = (id) => {
    dispatch({ type: "ADDED_FALSE", payload: id });
  };

  const setActiveNav = (activeNav) => {
    dispatch({ type: "SET_ACTIVE_NAV", payload: activeNav });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };

  const increaseCount = (id) => {
    dispatch({ type: "INCREASE_COUNT", payload: id });
  };

  const decreaseCount = (id) => {
    dispatch({ type: "DECREASE_COUNT", payload: id });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToCart,
        addedTrue,
        addedFalse,
        removeFromCart,
        setActiveNav,
        toggleCart,
        closeCart,
        increaseCount,
        decreaseCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
