import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const apiImage = createAsyncThunk("api/Image",async () => {
    const res = await axios.get("https://picsum.photos/v2/list?page=1&limit=10") ;
    return res.data ;
})

const fetchApi = createSlice({
    name : "api" ,
    initialState : {
        data : [] ,
        loading : false ,
        error : false ,
        errorMessage : ""
    },
    extraReducers : (builder) => {
        builder
            .addCase(apiImage.pending,(state) => {
                state.loading = true ;
            })
            .addCase(apiImage.fulfilled,(state,action) => {
                state.loading = false ;
                state.error = false ;
                state.errorMessage = "" ;
                state.data = action.payload ;
            })
            .addCase(apiImage.rejected,(state,action) => {
                state.loading = false ;
                state.error = true ;
                state.errorMessage = action.error.message ;
            })
    }
})

export default fetchApi.reducer ;