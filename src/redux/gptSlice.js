import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        isGpt:false},
        reducers:{
            toggleGpt:(state)=>{                
                  state.isGpt=!state.isGpt;
            }
        }
})
export const {toggleGpt} =gptSlice.actions;
export default gptSlice.reducer;