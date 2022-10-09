import { configureStore } from "@reduxjs/toolkit";
import paginationSlice from "./paginationSlice";
import dataSlice from "./dataSlice";

export default configureStore({
  reducer: { data: dataSlice, pagination: paginationSlice },
});
