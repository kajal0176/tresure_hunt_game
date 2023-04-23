import {configureStore} from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import authSlice from "./reducer/auth.slice";
import userSlice from "./reducer/user.slice";



const store = configureStore({
    reducer : {
       auth:authSlice,
       user:userSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
      }),
})

export default store;