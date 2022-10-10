import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import dataSlice from "./dataSlice";
import shoppingCartSlice from "./shoppingCartSlice";

export default configureStore({
  reducer: {
    data: dataSlice,
    pagination: paginationSlice,
    shoppingCart: shoppingCartSlice,
  },
});
