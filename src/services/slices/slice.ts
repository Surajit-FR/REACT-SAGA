// slice.ts
import { createSlice } from '@reduxjs/toolkit';
import { DataState } from '../../types/types';

const initialState: DataState = {
    data: [],
    loading: false,
    error: null,
    type: '',
};

const ProductSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        fetchDataRequest: (state) => {
            state.loading = true;
        },
        fetchDataSuccess: (state, { payload }) => {
            state.loading = false;
            state.data = payload.data;
        },
        fetchDataFailure: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } = ProductSlice.actions;

export default ProductSlice.reducer;
