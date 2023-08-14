import React from 'react';
import { shortTitle } from '../../helper/Functions';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    
    const { title, price, image, id } = product;

    return (
        <div>
            <img src={image} alt='product' style={{width : "250px", height: "250px"}}/>
            <h3>{shortTitle(title)}</h3>
            <p>{price}</p>
            <div>
                <Link to={`/products/${id}`}>details</Link>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;