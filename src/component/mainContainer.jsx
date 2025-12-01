import React from 'react'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle';
import useGetMovies from '../helper/hooks-custom/useGetMovies';
import { useSelector } from 'react-redux';


function MainContainer() {
 useGetMovies();  
  const data=useSelector((store)=>store?.movies?.moviesList?.results);    
  console.log("ABhi",data)  
    
    
  return (
    <div>
        <VideoBackground data={data} />
        <VideoTitle/>
      
    </div>
  )
}

export default MainContainer
