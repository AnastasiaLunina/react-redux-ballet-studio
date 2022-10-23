import React from 'react';

import ShopItem from '../ShopItem/ShopItem';

import shopData from '../shopData';

import './ShopItems.css';

const ShopItems = () => {
    return (
        <div>
            {shopData.map((shopItem, id) => <ShopItem shopItem={shopItem} key={id}/>)}
        </div>
    );
};

export default ShopItems;