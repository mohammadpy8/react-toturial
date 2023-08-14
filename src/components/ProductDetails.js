import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductDetails = () => {

    const params = useParams();
    const data = useContext(ProductsContext);

    const product = data[params.id - 1];
    const { image, title, price, description, category } = product;

    return (
        <div>
            <img src={image} alt='product' />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>category:{category}</p>
                <div>
                    <span>${price}</span>
                    <Link to="/products">back to shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;