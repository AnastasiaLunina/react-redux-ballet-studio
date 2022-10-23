import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import QuantityButton from '../QuantityButton/QuantityButton';
import { addItemToCart } from '../../../redux/cartSlice';

import './ShopItem.css';

const ShopItem = ({shopItem} ) => {
    const { name, price, img } = shopItem;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()

    return (
        <div>
            <h2>{name}</h2>
            <h2>{price} USD</h2>
            <img src={img} alt={name} className='shop-image' />
            <QuantityButton quantity={quantity} setQuantity={setQuantity}/>
            <button className="add-to-cart-button" onClick={() => dispatch(addItemToCart({shopItem, quantity}))}>Add to cart</button>
        </div>
    );
};

export default ShopItem;