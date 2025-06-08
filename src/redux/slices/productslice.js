import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeProducts: (state, action) => {
      state.selectedProduct = action.payload; // Only update the selected product
    },
    clearProducts: (state) => {
      state.products = [];
      state.selectedProduct = null;
    },
  },
});

export const { storeProducts, clearProducts } = productSlice.actions;

export default productSlice.reducer;
