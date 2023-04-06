import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: "profileId",
    initialState: {
        status: "pending",
        profile: [""],
        cast: [""],


    },

    reducers: {
        fetchPending: state => {
            state.status = "pending";
        },
        fetchProfileSuccess: (state, { payload: profile }) => {
            state.status = "success";
            state.profile = profile;
        },
        fetchCastCrewSuccess: (state, { payload: cast }) => {
            state.castCrew = cast;
        },
        fetchCrewSuccess: (state, { payload: crew }) => {
            state.castCrew = crew;
        },
        fetchError: state => {
            state.status = "error";
        },
    }
});

export const {
    fetchPending,
    fetchProfileSuccess,
    fetchError,
    fetchCastCrewSuccess,
    fetchCrewSuccess,

} = profileSlice.actions;

export const selectProfileState = state => state.profileId;
export const selcetStatus = state => selectProfileState(state).status;
export const selectProfile = state => selectProfileState(state).profile;

export const selectCastCrewState = state => state.profileId.castCrew;
export const selectCast = state => selectCastCrewState(state).cast;
export const selectCrew = state => selectCastCrewState(state).crew;
export default profileSlice.reducer;