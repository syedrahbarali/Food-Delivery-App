import { createSlice } from "@reduxjs/toolkit";

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState: false,
  reducers: {
    setLoginStatus: (state) => {
      return !state;
    },
  },
});

export const loginStatusActions = loginStatusSlice.actions;
export default loginStatusSlice;
