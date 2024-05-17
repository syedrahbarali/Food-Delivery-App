import { configureStore } from "@reduxjs/toolkit";
import loginStatusSlice from "./slices/loginStatus.slice";

const store = configureStore({
  reducer: {
    loginStatus: loginStatusSlice.reducer,
  },
});

export default store;
