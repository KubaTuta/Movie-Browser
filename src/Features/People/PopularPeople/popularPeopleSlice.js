import { createSlice } from '@reduxjs/toolkit';

const popularPeopleSlice = createSlice({
    name: "popularPeople",
    initialState: {
      status: "pending",
      person: null,
    },

    reducers: {
        fetchPeoplePending: state => {
          state.status = "pending";
        },
        fetchPeopleSuccess: (state, { payload: person }) => {
          state.person = person.results;
          state.status = "success";
          state.page = person.page;
          state.name = person.name;
          state.total = person.total_pages;
        },
        fetchPeopleError: state => {
          state.status = "error";
        }
      }
    });

    export const {
        fetchPeoplePending,
        fetchPeopleSuccess,
        fetchPeopleError,
      } = popularPeopleSlice.actions;

export const selectPeopleState = state => state.popularPeople;
export const selectStatus = state => selectPeopleState(state).status;
export const selectPeople = state => selectPeopleState(state).person;
export const selectPages = state => selectPeopleState(state).page;
export const selectName = state => selectPeopleState(state).name;
export const selectTotalPages = state => selectPeopleState(state).total;


     
export default popularPeopleSlice.reducer;