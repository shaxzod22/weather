import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('fetchData',async(url)=>{
    try {
        const response = await fetch(url)
        const dataJsoned = response.json()
        return dataJsoned
    } catch (error) {
        console.log(error);
    }
})

const WeatherSlice = createSlice({
    name:'weather',
    initialState:{
        data:[],
        loading:false,
        error:false,
    },
    extraReducers:(build)=>{
        build.addCase(fetchData.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchData.fulfilled,(state,action)=>{
            state.loading= false,
            state.data=action.payload
        })
        .addCase(fetchData.rejected,(state)=>{
            state.error=true
            state.data=[]
        })
    }
})

export default WeatherSlice.reducer
