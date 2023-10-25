import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchSearchMovies = createAsyncThunk(
  "searchMovies/fetchSearchMovies",
  async (movieName) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=14bdd69ce887376edfafb09f23f78fe9&query=${movieName}`
    );
    console.log(response);
    console.log(response.data.results);
    return response.data.results;
  }
);

const initialState = {
  searchMovies: [],
};

// Then, handle actions in your reducers:
export const searchSlice = createSlice({
  name: "searchMovies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSearchMovies.fulfilled, (state, action) => {
      state.searchMovies = action.payload;
    });
  },
});
