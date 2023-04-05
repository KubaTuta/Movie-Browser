import { createSlice } from '@reduxjs/toolkit';

const castCrewSlice = createSlice({
    name: "castCrew",
    initialState: {
        status: "pending",
        profile: [""],
    },

    reducers: {
        fetchCastCrewPending: state => {
            state.status = "pending";
        },
        fetchCastCrewSucces: (state, { payload: castCrewPerson }) => {
            state.status = "success";
            state.castCrew = castCrewPerson;
        },
        fetchCastCrewError: state => {
            state.status = "error";
        },
    }
});

export const {
    fetchCastCrewPending,
    fetchCastCrewSucces,
    fetchCastCrewError,
} = castCrewSlice.actions;

export const selectCastCrewState = state => state.castCrew;
export const selectCastCrew = state => selectCastCrewState(state).castCrewPerson;

export default castCrewSlice.reducer;