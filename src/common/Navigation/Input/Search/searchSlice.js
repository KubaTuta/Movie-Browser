import { createSlice } from '@reduxjs/toolkit';

const searchedMoviesSlice = createSlice({
  name: 'searchMovie',
  initialState: {
    status: "idle",
    searchedMovies: [""],
  },
  reducers: {
    fetchSearchPending: (state) => {
      state.status = "pending";
    },
    fetchSearchSuccess: (state, {payload: search}) => {
      state.searchedMovies = search.results;
      state.status = "success";
      state.page = search.page;
      state.total = search.total_pages;
      state.results = search.total_results;
    },
    fetchSearchError: state => {
      state.status = "error";
    }
  }
});

export const {
  fetchSearchPending,
  fetchSearchSuccess,
  fetchSearchError
} = searchedMoviesSlice.actions;

export const selectSearchedMoviesState = state => state.searchMovie;
export const selectSearchedStatus = state => selectSearchedMoviesState(state).status;
export const selectSearchedMovies = state => selectSearchedMoviesState(state).searchedMovies;
export const selectSearchedPages = state => selectSearchedMoviesState(state).page;
export const selectSearchedTotalPages = state => selectSearchedMoviesState(state).total;
export const selectSearchedTotalFrazes = state => selectSearchedMoviesState(state).results;

export default searchedMoviesSlice.reducer;