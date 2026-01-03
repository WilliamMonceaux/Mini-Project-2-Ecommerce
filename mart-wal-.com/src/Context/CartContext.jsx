import React, {useState, useContext, createContext } from 'react';

const CartContext = React.createContext();

function AddItemsToCart(props) {
    const [addCart, setAddCart] = useState([]);

    const handleAddToCart = (product) => {
        setAddCart([...addCart, product]);
    }

    return(
        <CartContext.Provider value= {{addCart, handleAddToCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export { AddItemsToCart, CartContext };