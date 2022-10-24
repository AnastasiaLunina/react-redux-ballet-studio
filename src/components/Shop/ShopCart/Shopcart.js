import React from 'react';
import { useSelector } from 'react-redux';

import { getCartItems, getTotalPrice, getTotalQuantity } from '../../../redux/cartSlice';

import ItemInCart from '../ItemInCart/ItemInCart';

import shoppingBag from '../../../assets/img/shopping-bag.png';

import './ShopCart.scss';

const Shopcart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const quantity = useSelector(getTotalQuantity);

    return (
        <div className='cart-btn'>
            <div className="cart-container">
                <img src={shoppingBag} alt="shopping bag" className="cart-image" />
                <p className='item-count'>{quantity}</p>
            </div>
            {cartItems.map((cartItem, id) => <ItemInCart cartItem={cartItem} key={id}/>)}
            <p>TOTAL: ${totalPrice}</p>
        </div>
    );
};

export default Shopcart;