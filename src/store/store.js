import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./shoppingCartSlice";

export default configureStore({
  reducer: { shoppingCart: shoppingCartSlice },
});
