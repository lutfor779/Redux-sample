import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    allProducts: [],
    singleProduct: [],
    loading: true,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        value: initialStateValue,
    },
    reducers: {
        allProducts: (state, action) => {
            state.value.allProducts = action.payload;
        },
        singleProduct: (state, action) => {
            state.value.singleProduct = action.payload;
        },
        loading: (state, action) => {
            state.value.loading = action.payload;
        },
        removeProduct: state => {
            state.value.singleProduct = [];
        }
    },
});

export const { allProducts, singleProduct, loading, removeProduct } = productsSlice.actions;

export default productsSlice.reducer;