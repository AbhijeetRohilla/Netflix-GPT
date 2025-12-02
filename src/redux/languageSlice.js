import { createSlice } from "@reduxjs/toolkit";

const languageSlice= createSlice({
    name:"lang",
    initialState:"en",
    reducers:{
        changeLang:(state,action)=>{
         return action.payload            
        }
    }
})

export const{changeLang}=languageSlice.actions;
export default languageSlice.reducer;