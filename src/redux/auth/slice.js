import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register } from "./operations";


const initialState ={
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
          .addCase(register.pending, state => {
            state.isRefreshing = true;
          })
          .addCase(register.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = true;
            state.isRefreshing = false;
          })
          .addCase(register.rejected, (state, action) => {
            state.isRefreshing = false;
            state.error = action.payload;
          })
          .addCase(logIn.pending, state => {
            state.isRefreshing = true;
          })
          .addCase(logIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthorized = true;
            state.isRefreshing = false;
          })
          .addCase(logIn.rejected, (state, action) => {
            state.isRefreshing = false;
            state.error = action.payload;
          })
          .addCase(logOut.pending, state => {
            state.isRefreshing = true;
          })
          .addCase(logOut.fulfilled, state => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isAuthorized = false;
            state.isRefreshing = false;
          })
          .addCase(logOut.rejected, (state, action) => {
            state.isRefreshing = false;
            state.error = action.payload;
          })
          .addCase(refreshUser.pending, state => {
            state.isRefreshing = true;
          })
          .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isAuthorized = true;
            state.isRefreshing = false;
          })
          .addCase(refreshUser.rejected, (state, action) => {
            state.isRefreshing = false;
            state.error = action.payload;
          });
      },

    // extraReducers: {
    //     [register.fulfilled](state, action) {
    //         state.user = action.payload.user;
    //         state.token = action.payload.token;
    //         state.isLoggedIn = true;
    //     },
    //     [logIn.fulfilled](state, action) {
    //         state.user = action.payload.user;
    //         state.token = action.payload.token;
    //         state.isLoggedIn = true;
    //     },
    //     [logOut.fulfilled](state, action) {
    //         state.user = {name: null, email: null};
    //         state.token = null;
    //         state.isLoggedIn = false;
    //     },
    //     [refreshUser.pending](state) {
    //         state.isRefreshing = true;            
    //     },
    //     [refreshUser.fulfilled](state, action) {
    //         state.user = action.payload;
    //         state.isLoggedIn = true;
    //         state.isRefreshing = false;
    //     },
    //     [refreshUser.rejected](state) {
    //         state.isRefreshing = false;
    //     }
    // }
});

export const authReducer = authSlice.reducer;