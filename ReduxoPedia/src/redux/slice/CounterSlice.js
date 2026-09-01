import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";

const initialState = {
  count: 15,
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
  extraReducers: (builder) => {
    builder.addCase(resetReduxOPedia, (state, action) => {
      state.count = 15;
    });
  },
});

export const {
  increament,
  decreament,
  increamentMultiplied,
  decreamentMultiplied,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
