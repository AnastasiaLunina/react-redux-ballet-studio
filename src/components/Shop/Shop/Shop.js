import React from 'react';

import Shopcart from '../ShopCart/Shopcart';
import ShopFilters from '../ShopFilters/ShopFilters';
import ShopItems from '../ShopItems/ShopItems';
import Navbar from '../../Navbar/Navbar';

import './Shop.css';

const Shop = () => {
    return (
        <div>
            <Navbar/>
            <div className='shop-container'>
                <div className="shop-sub-container shop-sub-container-filters">
                    <ShopFilters />
                    <Shopcart />
                </div>
                <div className="shop-sub-container">
                    <ShopItems />
                </div>
            </div>
        </div>
    );
};

export default Shop;