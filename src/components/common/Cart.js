import React, { useContext } from 'react';

import { shortTitle } from '../../helper/Functions';

import { CartContext } from '../../context/CartContextProvider';
import { FiTrash2 } from "react-icons/fi";

const Cart = ({data}) => {

    const { image, title, price, quantity } = data;
    const { dispatch } = useContext(CartContext);

    return (
        <div>
            <img src={image} alt="cart" />
            <div>
                <h3>{shortTitle(title)}</h3>
                <p>${price}</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                        (<button onClick={() => dispatch({ type: "DECREASE", payload: data })}>-</button>) :
                        (<button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><FiTrash2 /></button>)
                }
                <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;