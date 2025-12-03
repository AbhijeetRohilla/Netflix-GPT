import { createSlice } from "@reduxjs/toolkit";
const movieSlice =createSlice({
    name:"movies",
    initialState:{
        moviesList:[],
        trailerData:null,  
        popularMoviesList:[]      
    },
    reducers:{
        nowPlayingMovies:(state,action)=>{
            state.moviesList=action.payload;
        },
        trailerDetails:(state,action)=>{
            state.trailerData=action.payload;
        },   
        popularMovies:(state,action)=>{
            state.popularMoviesList=action.payload;
        }     
    }
})
export const {nowPlayingMovies, trailerDetails, popularMovies}=movieSlice.actions;
export default movieSlice.reducer;