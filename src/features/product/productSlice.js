import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./ProductAPI";
import { oldproducts } from "./components/ProductList";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    const response = await fetchAllProducts();

    return response.data;
  } 
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    products: (state) => {
      state.value += 1;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products += action.payload;
      });
  },
});

export const { products } = productSlice.actions;

export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;
