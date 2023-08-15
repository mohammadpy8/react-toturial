const shortTitle = (title) => {

    const shorten = title.slice(0, 10);
    return shorten;

};

const isInCart = (state, id) => {

    const result = !!state.selectedItems.find(item => item.id === id);
    return result;

};

const quantityCount = (state, id) => {
    
    const Index = state.selectedItems.findIndex(item => item.id === id);
    if (Index === -1) {
        return false;
    } else {
        return state.selectedItems[Index].quantity;
    }

}

export { shortTitle, isInCart, quantityCount };