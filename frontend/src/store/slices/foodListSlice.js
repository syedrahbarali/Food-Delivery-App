import { createSlice } from "@reduxjs/toolkit";

const foodListSlice = createSlice({
  name: "foodList",
  initialState: [],
  reducers: {
    addFoodItems: (_, action) => {
      return action.payload;
    },
  },
});

export default foodListSlice;
export const foodListActions = foodListSlice.actions;
