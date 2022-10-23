import React from 'react';

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
            <button onClick={decrease}>-</button>
            <span>{ quantity }</span>
            <button onClick={increase}>+</button>
        </div>
    );
};

export default QuantityButton;