import React from 'react';
import ShopFilter from './ShopFilter';

import './ShopFilters.css';

const ShopFilters = () => {
    const filtersArray = ['all', 'women', 'girl'];
    return (
        <div className='filters-wrapper'>
            <h2>Need help with apparel?</h2>
            {filtersArray.map((category, id) => <ShopFilter category={category} key={id}/>)}
        </div>
    );
};

export default ShopFilters;