import { createSlice } from '@reduxjs/toolkit';

const personSlice = createSlice({
    name: "person",
    initialState: {
        status: "idle",
        profile: null,
        cast: null,
    },

    reducers: {
        fetchPersonPending: state => {
            state.status = "pending";
        },
        fetchPersonSuccess: (state, { payload: profile }) => {
            state.status = "success";
            state.profile = profile;
        },
        fetchCastCrewSuccess: (state, { payload: cast }) => {
            state.castCrew = cast;
        },
        fetchCrewSuccess: (state, { payload: crew }) => {
            state.castCrew = crew;
        },
        fetchPersonError: state => {
            state.status = "error";
        },
    }
});

export const {
    fetchPersonPending,
    fetchPersonSuccess,
    fetchPersonError,
    fetchCastCrewSuccess,
    fetchCrewSuccess,

} = personSlice.actions;

export const selectProfileState = state => state.profileId;
export const selectStatus = state => selectProfileState(state).status;
export const selectProfile = state => selectProfileState(state).profile;

export const selectCastCrewState = state => state.profileId.castCrew;
export const selectCast = state => selectCastCrewState(state).cast;
export const selectCrew = state => selectCastCrewState(state).crew;
export default personSlice.reducer;