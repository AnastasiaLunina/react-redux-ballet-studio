import { createSlice } from '@reduxjs/toolkit';

export const shopItemsSlice = createSlice({
    name: 'items',
    initialState: {
        selectedCategory: "women"
    }, 
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state => state.items.selectedCategory;
export const { filterCategory } = shopItemsSlice.actions;
export default shopItemsSlice.reducer;