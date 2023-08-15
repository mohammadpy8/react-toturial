import React from 'react';

import { CartContext } from '../../context/CartContextProvider';
import { useContext } from 'react';

import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from 'react-router-dom';

const Navbar = () => {

    const {state} = useContext(CartContext)

    return (
        <div>
            <div>
                <Link to="/products">Products</Link>
                <div>
                    <Link to="/cart">
                        <button><AiOutlineShoppingCart size={25} /></button>
                    </Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;