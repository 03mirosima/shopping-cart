import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleSide: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleSide } = toggleSlice.actions;

export default toggleSlice.reducer;
