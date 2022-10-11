import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import dataSlice from "./dataSlice";
import shoppingCartSlice from "./shoppingCartSlice";
import toggleSlice from "./toggleSlice";

export default configureStore({
  reducer: {
    data: dataSlice,
    pagination: paginationSlice,
    shoppingCart: shoppingCartSlice,
    toggle: toggleSlice,
  },
});
