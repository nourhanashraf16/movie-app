import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./slices/moviesSlice";
import { searchSlice } from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    moviess: moviesSlice.reducer,
    searchMoviess: searchSlice.reducer,
  },
});
console.log(store);
