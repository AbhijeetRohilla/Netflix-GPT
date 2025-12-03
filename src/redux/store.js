import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import moviesSlice from './moviesSlice';
import gptSlice from './gptSlice';
import languageSlice from './languageSlice';



const store = configureStore({
    reducer: {
        user: userSlice,
        movies: moviesSlice,
        gpt: gptSlice,
        lang:languageSlice
    }   
});

export default store;