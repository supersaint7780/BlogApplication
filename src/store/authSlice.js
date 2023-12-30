import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, 
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export default authSlice.reducer;

// all function defined inside reducers are actions
// and are directly accessible from authSlice.actions
export const {login, logout} = authSlice.actions;