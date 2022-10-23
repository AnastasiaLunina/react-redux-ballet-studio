import React from 'react';
import { useSelector } from 'react-redux';

import ShopItem from '../ShopItem/ShopItem';
import { getSelectedCategory } from '../../../redux/shopItemsSlice';
import shopData from '../shopData';

import './ShopItems.css';

const ShopItems = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            {shopData
            .filter(shopItem => {
                if (selectedCategory === 'all') return true;
                return selectedCategory === shopItem.category;
            })
            .map(shopItem => <ShopItem shopItem={shopItem} key={shopItem.id}/>)
            }
        </div>
    );
};

export default ShopItems;