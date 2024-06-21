import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { ProductList } from '../types';

interface DataState {
    products: ProductList;
    loading: boolean;
    error: string | null;
}

const initialState: DataState = {
    products: [],
    loading: false,
    error: null
}

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('public/stackline_frontend_assessment_data_2021.json');

    if (!response.ok) {
        throw new Error('No response from network');
    }

    const data = await response.json();
    return data as ProductList;
});

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchData.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message || 'Failed to fetch data';
        });
    },
});

export const selectProducts = (state: RootState) => state.data.products;
export const selectLoading = (state: RootState) => state.data.loading;
export const selectError = (state: RootState) => state.data.error;

export default dataSlice.reducer;