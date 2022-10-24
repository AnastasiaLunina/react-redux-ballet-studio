import React from 'react';

import './QuantityButton.css';

const QuantityButton = ({ quantity, setQuantity }) => {

    const increase = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const decrease = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }


    return (
        <div>
            <button onClick={decrease} className='change-quantity-button'>&#9473;</button>
            <span className='change-quantity-number'>{ quantity }</span>
            <button onClick={increase} className='change-quantity-button'>&#9547;</button>
        </div>
    );
};

export default QuantityButton;