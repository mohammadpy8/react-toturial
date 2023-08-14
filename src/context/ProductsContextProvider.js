import React, { createContext, useEffect, useState } from 'react';
import getProduct from '../services/api';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {

        const fetchApi = async () => {
            
            setProductsData(await getProduct());
        };

        fetchApi();

    }, []);

    return (
        <ProductsContext.Provider value={productsData}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;