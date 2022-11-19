const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cartItems: [...state.cartItems, action.payload],
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    let tempCartItems = state.cartItems.filter((item) => {
      return item.id != action.payload;
    });
    return {
      ...state,
      cartItems: tempCartItems,
    };
  }

  if (action.type === "ADDED_TRUE") {
    let tempLaptops = state.laptops.map((laptop) => {
      if (laptop.id === action.payload) {
        return { ...laptop, added: true };
      }
      return laptop;
    });
    return {
      ...state,
      laptops: tempLaptops,
    };
  }

  if (action.type === "ADDED_FALSE") {
    let tempLaptops = state.laptops.map((laptop) => {
      if (laptop.id === action.payload) {
        return { ...laptop, added: false };
      }
      return laptop;
    });
    return {
      ...state,
      laptops: tempLaptops,
    };
  }

  if (action.type === "SET_ACTIVE_NAV") {
    return {
      ...state,
      activeNav: action.payload,
    };
  }

  if (action.type === "TOGGLE_CART") {
    return {
      ...state,
      cartIsOpen: !state.cartIsOpen,
    };
  }

  if (action.type === "CLOSE_CART") {
    return {
      ...state,
      cartIsOpen: false,
    };
  }
  if (action.type === "INCREASE_COUNT") {
    let tempItems = state.cartItems.map((item) => {
      if (item.id === action.payload) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    return {
      ...state,
      cartItems: tempItems,
    };
  }

  if (action.type === "DECREASE_COUNT") {
    let tempItems = state.cartItems.map((item) => {
      if (item.id === action.payload) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    return {
      ...state,
      cartItems: tempItems,
    };
  }
};

export default reducer;
