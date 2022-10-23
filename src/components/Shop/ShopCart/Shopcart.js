import React from 'react';

import shoppingBag from '../../../assets/img/shopping-bag.png';

import './ShopCart.css';

const Shopcart = () => {
    return (
        <div>
            <img src={shoppingBag} alt="shopping bag" className="cart-image" />
        </div>
    );
};

export default Shopcart;