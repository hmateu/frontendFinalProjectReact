import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        credentials: {
            token: "",
        },
        data: {
            name: "",
            role: "",
            id:""
        },
    },
    reducers: {
        login: (state, action) => {
            let { payload } = action;
            (state.credentials = {
                token: payload.token,
            }),
                (state.data = {
                    name: payload.name,
                    role: payload.role,
                    id: payload.id
                });
        },
        logout: (state) => {
            return {
                ...state,
                credentials: {
                    token: "",
                },
                data: {
                    name: "",
                    role: "",
                    id: ""
                },
            };
        },
    },
});

export const userData = (state) => state.user;
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;