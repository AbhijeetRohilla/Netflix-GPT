import { createSlice } from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        isGpt:false},
        reducers:{
            toggleGpt:(state)=>{
                console.log(state.isGpt,"Abhijeet")
                  state.isGpt=!state.isGpt;
            }
        }
})
export const {toggleGpt} =gptSlice.actions;
export default gptSlice.reducer;