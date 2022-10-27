import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import QuantityButton from '../QuantityButton/QuantityButton';
import { addItemToCart } from '../../../redux/cartSlice';
import { updateQuantity, getCartItems } from '../../../redux/cartSlice';

import './ShopItem.css';

const ShopItem = ({ shopItem }) => {
    const { name, price, img } = shopItem;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const items = useSelector(getCartItems);

    const itemsInCart = items.some(item => item.itemId === shopItem.id);
   

    const addToCart = () => {
        if (!itemsInCart) {
            dispatch(addItemToCart({shopItem, quantity}));
            setQuantity(1)
        } else {
            dispatch(updateQuantity({shopItem, quantity}))
            setQuantity(1)
        }
    }

    return (
        <div className='shop-items-wrapper'>
            <h2 className='shop-title'>{name}</h2>
            <h2 className='shop-title'>{price} USD</h2>
            <img src={`./${img}.webp`} alt={name} className='shop-image' />
            <QuantityButton quantity={quantity} setQuantity={setQuantity}/>
            <button className="add-to-cart-button" onClick={addToCart}>
                Add to cart
            </button>
        </div>
    );
};

export default ShopItem;