import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getCartItems, getTotalPrice, getTotalQuantity } from '../../../redux/cartSlice';

import ItemInCart from '../ItemInCart/ItemInCart';

import shoppingBag from '../../../assets/img/shopping-bag.png';

import './ShopCart.css';

const Shopcart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const quantity = useSelector(getTotalQuantity);
    const [isActive, setIsActive] = useState(false);

    const checkCartnotEmpty = () => {
        if (quantity === 0) {
            return (
                <div className={isActive ? 'cart-items' : 'cart-items hide'}>Cart is Empty</div> 
            ) 
        } else {
        return (
            <div className={isActive ? 'cart-items' : 'cart-items hide'}>
                {cartItems.map((cartItem, id) => <ItemInCart cartItem={cartItem} key={id}/>)}
            </div>
        )
    }
}

    const onCartHide = (event) => {
    // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    } 

    return (
        <div className='cart-btn'>
            <div className="cart-container">
                <button onClick={onCartHide} className='cart-button'>
                    <img src={shoppingBag} alt="shopping bag" className="cart-image" />
                </button>
                <p className='item-count'>{quantity}</p>
            </div>
            {checkCartnotEmpty()}
            <p className='item-total'>TOTAL: ${totalPrice}</p>
        </div>
    );
};

export default Shopcart;