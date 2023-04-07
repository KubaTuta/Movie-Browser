import { createSlice } from '@reduxjs/toolkit';

const popularMoviesSlice = createSlice({
  name: 'popularMovies',
  initialState: {
    status: "pending",
    movies: [""],
  },
  reducers: {
    fetchMoviesPending: state => {
      state.status = "pending";
    },
    fetchMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.status = "success";
      state.page = movies.page;
      state.total = movies.total_pages;

    },
    fetchMoviesError: state => {
      state.status = "error";
    }
  }
});

export const {
  fetchMoviesPending,
  fetchMoviesSuccess,
  fetchMoviesError
} = popularMoviesSlice.actions;

export const selectMoviesState = state => state.popularMovies;
export const selectStatus = state => selectMoviesState(state).status;
export const selectMovies = state => selectMoviesState(state).movies;
export const selectPages = state => selectMoviesState(state).page;
export const selectTotalMovies = state => selectMoviesState(state).total;

export default popularMoviesSlice.reducer;

