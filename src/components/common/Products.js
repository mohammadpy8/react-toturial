import React, { useContext } from "react";
import { shortTitle, isInCart, quantityCount } from "../../helper/Functions";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContextProvider";
import { FiTrash2 } from "react-icons/fi";

const Products = ({ product }) => {
    
  const { title, price, image, id } = product;

  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <img
        src={image}
        alt="product"
        style={{ width: "250px", height: "250px" }}
      />
      <h3>{shortTitle(title)}</h3>
      <p>{price}</p>
      <div>
        <Link to={`/products/${id}`}>details</Link>
        {isInCart(state, id) ? (
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: product })}
          >
            +
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
          >
            Add to Cart
          </button>
        )}
        {quantityCount(state, id) > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: product })}
          >
            -
          </button>
        )}
        {quantityCount(state, id) === 1 && (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: product })}
          >
            <FiTrash2 />
          </button>
        )}
      </div>
    </div>
  );
};

export default Products;
