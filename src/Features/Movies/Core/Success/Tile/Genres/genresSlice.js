import { createSlice } from '@reduxjs/toolkit';

const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    status: "pending",
    genres: [""],
  },
  reducers: {
    fetchGenresPending: state => {
      state.status = "pending";
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres.genres;
      state.status = "success";

    },
    fetchGenresError: state => {
      state.status = "error";
    }
  }
});

export const {
  fetchGenresPending,
  fetchGenresSuccess,
  fetchGenresError
} = genresSlice.actions;

export const selectGenresState = state => state.genres;
export const selectStatus = state => selectGenresState(state).status;
export const selectGenres = state => selectGenresState(state).genres;

export default genresSlice.reducer;