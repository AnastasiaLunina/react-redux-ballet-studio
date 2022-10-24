import React from 'react';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../../../redux/cartSlice';

import shopData from '../shopData';
import './ItemInCart.css';

const ItemInCart = ({ cartItem }) => {
    const itemsInCart = shopData.find(item => item.id === cartItem.itemId);
    const dispatch = useDispatch();

    const check = () => {
        if (itemsInCart) {
            return shopData.map((item) => 
            item.id === cartItem.itemId ? 
            {...item, quantity: item.quantity + 1 } : item)
        }
       return [...shopData, { ...cartItem, quantity: 1}]
    }

    const aaa = () => {
        // check().map(item => {
            return check()
        // })
    }

    console.log(aaa())


    return (
        <div>
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