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
export const getItemTypes = createAsyncThunk("types/getTypes", async () => {
  const response = await fetch(`${API_URL}items`).catch((e) => {
    alert(e, "Bir Sorun Oluştu");
  });
  const data = await response.json();
  return [...new Set(data.map((item) => item.itemType))];
});
const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    filteredItems: [],
    companies: [],
    itemTypes: [],
  },
  reducers: {
    onTypeSelect: (state, { payload }) => {
      const filtered = state.items.filter((item) => {
        return item.itemType === payload;
      });
      state.filteredItems = filtered;
    },
  },
  extraReducers: {
    [getItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },
    [getCompanies.fulfilled]: (state, { payload }) => {
      state.companies = payload;
    },
    [getItemTypes.fulfilled]: (state, { payload }) => {
      state.itemTypes = payload;
    },
  },
});
export const { onTypeSelect } = dataSlice.actions;
export const selectAllItems = (state) => state.data.items;
export const selectFilteredItems = (state) => state.data.filteredItems;
export const selectAllCompanies = (state) => state.data.companies;
export const selectAllItemTypes = (state) => state.data.itemTypes;

export default dataSlice.reducer;
