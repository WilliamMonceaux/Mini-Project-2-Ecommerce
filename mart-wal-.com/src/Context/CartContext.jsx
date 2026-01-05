import React, {useState, useContext, createContext } from 'react';

const CartContext = React.createContext();

function AddItemsToCart(props) {
    const [addCart, setAddCart] = useState([]);

    const handleAddToCart = (product) => {
        setAddCart([...addCart, product]);
    }

    const removeProduct = (id) => {
        setAddCart((cart) => {
            return cart.filter((product) => product.id !== id)
        })
    }

    return(
        <CartContext.Provider value= {{addCart, handleAddToCart, removeProduct }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { AddItemsToCart, CartContext };