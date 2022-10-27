import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    }, 
    reducers: {
        addItemToCart: (state, action) => {
            const timeId = new Date().getTime();

            state.cartItems.push({
                id: timeId,
                itemId: action.payload.shopItem.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.shopItem.price,
                price: action.payload.shopItem.price,
            })
        },
        updateQuantity: (state, action) => {
            const newCart = [];
            
            state.cartItems.forEach(item => {
                if (item.itemId === action.payload.shopItem.id) {
                    let newQuantity = item.quantity + action.payload.quantity;
                    let totalSum = item.price * newQuantity;
                    const changeCart = {...item, quantity: newQuantity, totalPrice: totalSum };
                    newCart.push(changeCart);
                } else {
                    newCart.push(item);
                }
            })
            state.cartItems = newCart;
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            )
        }, 
        clearCart: state => {
            state.cartItems = []
        }
    }
})
    //     const check = () => {
    //     if (itemsInCart) {
    //         return shopData.map((item) => 
    //         item.id === cartItem.itemId ? 
    //         {...item, quantity: item.quantity + 1 } : item)
    //     }
    //    return [...shopData, { ...cartItem, quantity: 1}]
    // }
export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total;
    }, 0)
}

export const getTotalQuantity = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.quantity + total;
    }, 0)
}

export const getCartItems = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;