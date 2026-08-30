import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 10,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    increament: (state) => {
      state.count++;
    },

    decreament: (state) => {
      state.count--;
    },

    increamentMultiplied: (state, action) => {
      state.count += action.payload;
    },

    decreamentMultiplied: (state, action) => {
      state.count -= action.payload;
    },
  },
});

export const {
  increament,
  decreament,
  increamentMultiplied,
  decreamentMultiplied,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
