import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter();

console.log(productsAdapter)

const initialState = [];

export const fetchProducts = createAsyncThunk("/products/fetch", async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products"
  ).then((res) => res.json());
  return response;
});

const postsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      if (state.length === 0) {
        state.push(action.payload);
      }
    });
  }
});

export default postsSlice.reducer;
