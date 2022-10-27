import { configureStore } from "@reduxjs/toolkit";
import items from './shopItemsSlice';
import cart from './cartSlice';

export const store = configureStore({
    reducer: {
        items: items, 
        cart: cart,
    }
})











