import React from 'react';

import './ShopItem.css';

const ShopItem = ({shopItem} ) => {
    const { name, price, img } = shopItem;

    return (
        <div>
            <h2>{name}</h2>
            <h2>{price} USD</h2>
            <img src={img} alt={name} className='shop-image' />
            <button className="shop-quantity-button">Quantity</button>
            <button className="add-to-cart-button">Add to cart</button>
        </div>
    );
};

export default ShopItem;