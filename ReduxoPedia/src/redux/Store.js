import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/DestinationSlice";
export const store = configureStore({
  reducer: {
    counterStore: counterReducer,
    destinationStore: destinationReducer,
  },
});
