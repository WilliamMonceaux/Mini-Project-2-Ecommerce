import React, { useState, useContext, createContext } from "react";

const CartContext = React.createContext();

function AddItemsToCart(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isItemInCart = prevCart.find((item) => item.id === product.id);

      if (isItemInCart) {
        return prevCart.map((item) => {
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeProduct = (id) => {
    setCart((cart) => {
      return cart.filter((product) => product.id !== id);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};

export { AddItemsToCart, CartContext };
