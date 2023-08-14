import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div>
            
        </div>
    );
};

export default Store;