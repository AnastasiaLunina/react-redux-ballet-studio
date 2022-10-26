import React from 'react';
import ShopFilter from './ShopFilter';

import './ShopFilters.css';

const ShopFilters = () => {
    const filtersArray = ['all', 'women', 'girl'];
    return (
        <div className='filters-wrapper'>
            <h2 className='shop-title'>Need help with apparel?</h2>
            <div className='filters-items-container'>
                {filtersArray.map((category, id) => <ShopFilter category={category} key={id}/>)}    
            </div>
        </div>
    );
};

export default ShopFilters;