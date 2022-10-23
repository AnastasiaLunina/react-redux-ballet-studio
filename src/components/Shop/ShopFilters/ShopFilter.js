import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedCategory, filterCategory } from '../../../redux/shopItemsSlice';

import './ShopFilters.css';

const ShopFilter = ({ category }) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();

    return (
        <div>
            <p onClick={() => {dispatch(filterCategory(category))}}
               className={selectedCategory === category ? 'category-button-selected' : 'category-button'}>
                {category}
            </p>
        </div>
    );
};

export default ShopFilter;