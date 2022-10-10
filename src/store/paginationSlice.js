import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    currentPage: 1,
    itemLimit: 16,
  },
  reducers: {
    onClickNext: (state) => {
      state.currentPage += 1;
    },
    onClickPrev: (state) => {
      state.currentPage -= 1;
    },
    onNumberClick: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});
export const { onClickNext, onClickPrev, onNumberClick } =
  paginationSlice.actions;
export const selectCurrentPage = (state) => state.pagination.currentPage;
export const selectItemLimit = (state) => state.pagination.itemLimit;

export default paginationSlice.reducer;
