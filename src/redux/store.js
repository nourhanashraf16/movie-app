import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/moviesSlice";

export const store = configureStore({
  reducer: {
    moviess: moviesSlice.reducer,
  },
});
console.log(store);
