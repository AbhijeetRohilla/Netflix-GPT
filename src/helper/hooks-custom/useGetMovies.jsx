import React,{useEffect,useState} from 'react'
import { MOVIES_OPTION } from '../../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { nowPlayingMovies,popularMovies } from '../../redux/moviesSlice';

const useGetMovies = () => {

    const dispatch = useDispatch();
    const nowPlayingMovieURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const popularMovieURL='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

    async function fetchMovies() {
        try {
            const response = await axios.get(nowPlayingMovieURL, MOVIES_OPTION);
            await dispatch(nowPlayingMovies(response.data));                      
        }        
        catch (error) {
            console.error("Error fetching movies: ", error);
        }
        try {
            const response = await axios.get(popularMovieURL, MOVIES_OPTION);
            await dispatch(popularMovies(response.data));                      
        }        
        catch (error) {
            console.error("Error fetching movies: ", error);
        }
    }

    useEffect(() => {
        fetchMovies();        
    }, [])
}

export default useGetMovies
