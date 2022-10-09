import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import shoppingCartSlice from "./shoppingCartSlice";

export default configureStore({
  reducer: { shoppingCart: shoppingCartSlice, pagination: paginationSlice },
});
