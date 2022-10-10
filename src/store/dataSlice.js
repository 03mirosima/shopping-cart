import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3000/";

export const getItems = createAsyncThunk("items/getItems", async () => {
  const response = await fetch(`${API_URL}items`);
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
const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    filteredItems: [],
    companies: [],
    itemTypes: [],
    brands: [],
    tags: [],
  },
  reducers: {
    onTypeSelect: (state, { payload }) => {
      const filtered = state.items.filter((item) => {
        return item.itemType === payload;
      });
      state.filteredItems = filtered;
    },
    onSorting: (state, { payload }) => {
      switch (payload) {
        case "lowest":
          const lowestItems = state.items.sort((a, b) => a.price - b.price);
          state.filteredItems = lowestItems;
          return state;

        case "highest":
          const highestItems = state.items.sort((a, b) => b.price - a.price);
          state.filteredItems = highestItems;
          return state;
        case "newest":
          const newItems = state.items.sort((a, b) => b.added - a.added);
          state.filteredItems = newItems;
          return state;
        case "oldest":
          const oldItems = state.items.sort((a, b) => a.added - b.added);
          state.filteredItems = oldItems;
          return state;
        default:
          return state.items;
      }
    },
    onBrandSearch: (state, { payload }) => {
      if (payload != "") {
        const filtered = state.brands.filter((item) => {
          return item.toLowerCase().includes(payload.toLowerCase());
        });
        state.brands = filtered;
      } else return state.brands;
    },
  },

  extraReducers: {
    [getItems.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.itemTypes = [...new Set(payload.map((item) => item.itemType))];
      state.brands = state.items.flatMap((x) => x.manufacturer);
      state.tags = state.items.flatMap((x) => x.tags);
    },
    [getCompanies.fulfilled]: (state, { payload }) => {
      state.companies = payload;
    },
  },
});
export const { onTypeSelect, onSorting, onBrandSearch } = dataSlice.actions;
export const selectAllItems = (state) => state.data.items;
export const selectFilteredItems = (state) => state.data.filteredItems;
export const selectAllCompanies = (state) => state.data.companies;
export const selectAllItemTypes = (state) => state.data.itemTypes;

export default dataSlice.reducer;
