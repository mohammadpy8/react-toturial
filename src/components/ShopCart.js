import React, { useContext } from 'react';

import { CartContext } from '../context/CartContextProvider';
import Cart from './common/Cart';
import { Link } from 'react-router-dom';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => (
                        <Cart key={item.id} data={item} />
                    ))
                }
            </div>
            {
                state.itemsCounter > 0 && (
                    <div>
                        <p><span>totalItems:</span>{state.itemsCounter}</p>
                        <p><span>totalPayment:</span>{state.total}</p>
                        <div>
                            <button onClick={() => dispatch({ type: "CHECKOUT" })}>checkOut</button>
                            <button onClick={() => dispatch({type: "CLEAR"})}>clear</button>
                        </div>
                    </div>
                )
            }
            {
                state.checkout && (
                    <div>
                        <h3>successfully</h3>
                        <Link to="/products">buy more</Link>
                    </div>
                )
            }
                        {
                !state.checkout && state.itemsCounter === 0 && (
                    <div>
                        <h3>clear</h3>
                        <Link to="/products">back to shop</Link>
                    </div>
                )
            }
        </div>
    );
};

export default ShopCart;