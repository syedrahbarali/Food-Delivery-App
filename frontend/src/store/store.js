import { configureStore } from "@reduxjs/toolkit";
import foodListSlice from "./slices/foodListSlice";

const store = configureStore({
  reducer: {
    foodList: foodListSlice.reducer,
  },
});

export default store;
