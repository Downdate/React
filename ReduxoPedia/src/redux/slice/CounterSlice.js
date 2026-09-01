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
    counterReset: (state) => {
      state.count = 10;
    },
  },
});

export const {
  increament,
  decreament,
  increamentMultiplied,
  decreamentMultiplied,
  counterReset,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
