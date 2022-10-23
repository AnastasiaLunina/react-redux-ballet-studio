import React from 'react';
import ShopFilter from './ShopFilter';

import './ShopFilters.css';

const ShopFilters = () => {
    const filtersArray = ['ballet apparel women', 'ballet apparel girl', 'all'];
    return (
        <div>
            <h2>Need help with apparel?</h2>
            {filtersArray.map((category, id) => <ShopFilter category={category} key={id}/>)}
        </div>
    );
};

export default ShopFilters;