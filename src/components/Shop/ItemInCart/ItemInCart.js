import React from 'react';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../../../redux/cartSlice';

import shopData from '../shopData';
import './ItemInCart.css';

const ItemInCart = ({ cartItem }) => {
    const itemsInCart = shopData.find(item => item.id === cartItem.itemId);
    const dispatch = useDispatch();

    

    return (
        <div className='items-in-cart-wrapper'>
            <p>{itemsInCart.name}</p>
            <p>quantity: {cartItem.quantity}</p>
            <p>${itemsInCart.price * cartItem.quantity}</p>
            <p className='price-underlined'
               onClick={() => {dispatch(removeItemFromCart({cartItemId: cartItem.id}))}}>
                REMOVE
            </p>
        </div>
    );
};

export default ItemInCart;