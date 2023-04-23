import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import parseJwt from "../utils/authUtils";
import axiosInstance from "../api/axios.js";
import { API_GET_USERINFO,API_GET_ACTIVE_USER ,API_GET_REGISTERDUSER,API_POST_USERINFO,API_PUT_USERINFO} from "../api/user";



export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (thunkAPI) => {
    try {
      const data = await API_GET_USERINFO();
      return data;
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

export const getActiveUser = createAsyncThunk(
  "user/getActiveUser",
  async (id,thunkAPI) => {
    try {
      const data = await API_GET_ACTIVE_USER(id);
      return data;
    }
    catch (err) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

export const getRegisteredUser = createAsyncThunk(
    "user/getRegisteredUser",
    async (thunkAPI) => {
      try {
        const data = await API_GET_REGISTERDUSER();
        return data;
      }
      catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
      }
    }
  );

  export const postUserInfo = createAsyncThunk(
    "user/postRegisteredUser",
    async (data,thunkAPI) => {
      try {
        const __data = await API_POST_USERINFO(data);
        return __data;
      }
      catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
      }
    }
  );
  export const updateUserInfo = createAsyncThunk(
    "user/updateRegisteredUser",
    async (data,thunkAPI) => {
      try {
        const __data = await API_PUT_USERINFO(data);
        return __data;
      }
      catch (err) {
        return thunkAPI.rejectWithValue(err.response.data)
      }
    }
  );

const initialState = { 
  loading: false,
  userInfo: null,
  activeUser:null,
  registeredUser: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
     
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
    
      state.userInfo = action.payload.data.result
      
      state.loading = false;
    });
    builder.addCase(getUserInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.loading = false
    });
   

      builder.addCase(getRegisteredUser.fulfilled, (state, action) => {
          
        state.registeredUser = action.payload.data.result      
        state.loading = false;     
      });
      builder.addCase(getRegisteredUser.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getRegisteredUser.rejected, (state, action) => {
        state.loading = false
      });



      builder.addCase(postUserInfo.fulfilled, (state, action) => {   
     
        state.loading = false;     
      });
      builder.addCase(postUserInfo.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(postUserInfo.rejected, (state, action) => {
        state.loading = false;
      });


      builder.addCase(updateUserInfo.fulfilled, (state, action) => {  
       
        state.loading = false;     
      });
      builder.addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(updateUserInfo.rejected, (state, action) => {
        state.loading = false;
      });  

      builder.addCase(getActiveUser.fulfilled, (state, action) => {  
       
        state.activeUser = action.payload.data      
        state.loading = false;     
      });
      builder.addCase(getActiveUser.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getActiveUser.rejected, (state, action) => {
        state.loading = false;
      });  
  },

});


export default userSlice.reducer;