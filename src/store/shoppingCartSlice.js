import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000/";

export const getItems = createAsyncThunk("items/getItems", async () => {
  const response = await fetch(`${API_URL}items`).catch((e) => {
    alert(e, "Bir Sorun Oluştu");
  });
  const data = await response.json();
  return data;
});
export const getCompanies = createAsyncThunk(
  "companies/getCompanies",
  async () => {
    const response = await fetch(`${API_URL}/companies`);
    const data = await response.data;
    return data;
  }
);

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    items: [],
    companies: [],
  },
  reducers: {},
  extraReducers: {
    [getItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },
    [getCompanies.fulfilled]: (state, { payload }) => {
      state.companies = payload;
    },
  },
});
export const selectAllItems = (state) => state.shoppingCart.items;
export const selectAllCompanies = (state) => state.shoppingCart.companies;

export default shoppingCartSlice.reducer;
