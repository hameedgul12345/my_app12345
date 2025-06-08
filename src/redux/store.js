import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productslice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
