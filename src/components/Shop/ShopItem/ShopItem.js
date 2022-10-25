import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import QuantityButton from '../QuantityButton/QuantityButton';
import { addItemToCart, updateQuantity, clearCart } from '../../../redux/cartSlice';

import shopData from '../shopData';

import './ShopItem.css';

const ShopItem = ({ shopItem, cartItem }) => {
    const { name, price, img, id } = shopItem;
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const itemsInCart = shopData.some(item => item.id === id);
   

    // const addToCart = () => {
    //     if (!itemsInCart) {
    //         dispatch(addItemToCart({shopItem, quantity}));
    //         // setQuantity(0)
    //     } else {
    //         dispatch(updateQuantity({shopItem, quantity}))
    //         // setQuantity(0)
    //     }
    // }

    // console.log(addToCart())
    //     const check = () => {
    //     if (itemsInCart) {
    //         console.log(itemsInCart)
    //         return shopData.map((item) => 
    //         item.id === id ? 
    //         {...item, quantity: item.quantity + 1 } : item)
    //     }
    //     console.log(cartItem)
    //    return [...shopData, { ...shopItem, quantity: 1}]
    // }

    return (
        <div >
            <h2 >{name}</h2>
            <h2>{price} USD</h2>
            <img src={img} alt={name} className='shop-image' />
            <QuantityButton quantity={quantity} setQuantity={setQuantity}/>
           
            <button className="add-to-cart-button" onClick={
                // () => check()
                // () => addToCart()
                () => dispatch(addItemToCart({shopItem, quantity}))
                // !itemsInCart ? () => dispatch(addItemToCart({shopItem, quantity})) : () => dispatch(updateQuantity({shopItem, quantity}))
            }>Add to cart</button>
        </div>
    );
};

export default ShopItem;