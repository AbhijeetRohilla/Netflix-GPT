import { createSlice } from "@reduxjs/toolkit";
const movieSlice =createSlice({
    name:"movies",
    initialState:{
        moviesList:[],
        trailerData:null,        
    },
    reducers:{
        allMovies:(state,action)=>{
            state.moviesList=action.payload;
        },
        trailerDetails:(state,action)=>{
            state.trailerData=action.payload;
        },        
    }
})
export const {allMovies, trailerDetails}=movieSlice.actions;
export default movieSlice.reducer;