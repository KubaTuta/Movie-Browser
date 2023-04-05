import { createSlice } from '@reduxjs/toolkit';

const profileSlice = createSlice({
    name: "profileId",
    initialState: {
        status: "pending",
        profile: [""],
    },

    reducers: {
        fetchProfilePending: state => {
            state.status = "pending";
        },
        fetchProfileSucces: (state, { payload: profile }) => {
            state.status = "success";
            state.profile = profile;
        },
        fetchProfileError: state => {
            state.status = "error";
        },
    }
});

export const {
    fetchProfilePending,
    fetchProfileSucces,
    fetchProfileError,
} = profileSlice.actions;

export const selectProfileState = state => state.profileId;
export const selcetStatus = state => selectProfileState(state).status
export const selectProfile = state => selectProfileState(state).profile;

export default profileSlice.reducer;