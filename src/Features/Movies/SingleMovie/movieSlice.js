import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    status: "pending",
    movie: [""],
    credits: [""],
    movieId: null,

  },
  reducers: {
    fetchMoviePending: state => {
      state.status = "pending";
    },
    fetchMovieSuccess: (state, { payload: movie }) => {
      state.movie = movie;
      state.status = "success";
    },
    fetchMoviesError: state => {
      state.status = "error";
    },
    setMovieId: (state, { payload: id }) => {
      state.movieId = id;
    },
  }
});

export const {
  fetchMoviePending,
  fetchMovieSuccess,
  fetchMovieError,
  setMovieId
} = movieSlice.actions;

export const selectMovieState = state => state.movie;
export const selectStatus = state => selectMovieState(state).status;
export const selectMovie = state => selectMovieState(state).movie;
export const selectId = state => selectMovieState(state).movieId;
export const selectCredits = state => selectMovieState(state).credits;


export default movieSlice.reducer;

