import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    status: "idle",
    movie: null,
    credits: null,
    movieId: null,

  },
  reducers: {
    fetchSingleMoviePending: state => {
      state.status = "pending";
    },
    fetchSingleMovieSuccess: (state, { payload: movie }) => {
      state.movie = movie;
    },
    fetchCreditsSuccess: (state, { payload: credits }) => {
      state.credits = credits;
      state.status = "success";
    },
    fetchSingleMovieError: state => {
      state.status = "error";
    },
    setMovieId: (state, { payload: id }) => {
      state.movieId = id;
    },
    
  }
});

export const {
  fetchSingleMoviePending,
  fetchSingleMovieSuccess,
  fetchSingleMovieError,
  setMovieId,
  fetchCreditsSuccess,
} = movieSlice.actions;

export const selectMovieState = state => state.movie;
export const selectStatus = state => selectMovieState(state).status;
export const selectMovie = state => selectMovieState(state).movie;
export const selectId = state => selectMovieState(state).movieId;
export const selectCredits = state => selectMovieState(state).credits;

export default movieSlice.reducer;

