import React,{useEffect,useState} from 'react'
import { MOVIES_OPTION } from '../../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { allMovies } from '../../redux/moviesSlice';

const useGetMovies = () => {

    const dispatch = useDispatch();
    const movieURL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

    async function fetchMovies() {
        try {
            const response = await axios.get(movieURL, MOVIES_OPTION);
            await dispatch(allMovies(response.data));                      
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
