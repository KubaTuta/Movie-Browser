import { createSlice } from '@reduxjs/toolkit';

const searchedPeopleSlice = createSlice({
  name: 'searchPeople',
  initialState: {
    status: "success",
    searchedPeople: [""],
    query: "",
  },
  reducers: {
    fetchSearchPeoplePending: (state, {payload: query}) => {
      state.status = "pending";
      state.query = query.query;
    },
    fetchSearchPeopleSuccess: (state, {payload: search}) => {
      state.searchedPeople = search.results;
      state.status = "success";
      state.page = search.page;
      state.total = search.total_pages;
      state.results = search.total_results;
    },
    fetchSearchPeopleError: state => {
      state.status = "error";
    }
  }
});

export const {
  fetchSearchPeoplePending,
  fetchSearchPeopleSuccess,
  fetchSearchPeopleError
} = searchedPeopleSlice.actions;

export const selectSearchedPeopleState = state => state.searchPeople;
export const selectSearchedPeopleStatus = state => selectSearchedPeopleState(state).status;
export const selectSearchedPeopleQuery = state => selectSearchedPeopleState(state).query;
export const selectSearchedPeople = state => selectSearchedPeopleState(state).searchedPeople;
export const selectSearchedPeoplePages = state => selectSearchedPeopleState(state).page;
export const selectSearchedPeopleTotalPages = state => selectSearchedPeopleState(state).total;
export const selectSearchedPeopleTotalFrazes = state => selectSearchedPeopleState(state).results;

export default searchedPeopleSlice.reducer;