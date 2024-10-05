import { configureStore } from "@reduxjs/toolkit";
import TableSlice from "./tSlice";

const store = configureStore({
  reducer: {
    tableApp: TableSlice,
  },
});

export default store;
