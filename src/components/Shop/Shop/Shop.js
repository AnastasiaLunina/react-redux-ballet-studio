import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/img/icon.png';

import Shopcart from '../ShopCart/Shopcart';
import ShopFilters from '../ShopFilters/ShopFilters';
import ShopItems from '../ShopItems/ShopItems';

import './Shop.css';

const Shop = () => {
    return (
        <div>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <img src={logo} alt="My logo" />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/classes'>
                        Classes
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        Contact
                    </Link>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                </div>
            </div>
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