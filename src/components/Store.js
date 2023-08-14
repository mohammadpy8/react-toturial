import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import Products from './common/Products';
import Loader from '../shared/Loader';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {
                products.length ? (
                    products.map(product => (
                        <Products product={product} key={product.id} />
                    ))
                ) : (<Loader />)
            }
        </div>
    );
};

export default Store;