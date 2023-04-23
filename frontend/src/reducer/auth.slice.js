import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import parseJwt from "../utils/authUtils";
import axiosInstance from "../api/axios.js";
import { API_LOGIN,API_SIGNUP } from "../api/auth";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const data = await API_LOGIN(credentials);
      return data;
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

export const signup = createAsyncThunk(
    "auth/signup",
    async (credentials, thunkAPI) => {
      try {
        const data = await API_SIGNUP(credentials);
        return data;
      }
      catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
      }
    }
  );


const initialState = { 
  loading: false,
  isLogedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state, action){
      state.isLogedIn = false;
      state.user = null;
    },
    setUser(state, action) {
      state.isLogedIn = true;
      state.user = action.payload;
    },
    resetUser(state) {
      state.isLogedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      // console.log(action)
      const token = action.payload.data.token;
      localStorage.setItem('token', token);
      axiosInstance.defaults.headers.common["authorization"] = token;
      const user = parseJwt(token);
      // console.log(user)
      state.user = user
      state.isLogedIn = true;
      state.loading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(signup.fulfilled, (state, action) => {
        
        state.isLogedIn = false;
        state.loading = false;
     });
    builder.addCase(signup.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(signup.rejected, (state, action) => {
        state.loading = false
      });
   
  },
});

export const { setUser, resetUser,logout } = authSlice.actions;
export default authSlice.reducer;