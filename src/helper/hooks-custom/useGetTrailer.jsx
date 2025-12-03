import React, { useEffect } from 'react';
import { MOVIES_OPTION } from '../../utils/constant';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { trailerDetails } from '../../redux/moviesSlice';

const useGetTrailer = async (id) => {
    const dispatch = useDispatch();
    const GET_VIDEO_URL = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const getVideos = async () =>{
        const video= await axios.get(GET_VIDEO_URL, MOVIES_OPTION);        
        await dispatch(trailerDetails(video.data))
    }    
    useEffect(()=>{
        getVideos();               
    }, []   )    
}

export default useGetTrailer
