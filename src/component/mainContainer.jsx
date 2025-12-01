import React from 'react'
import VideoBackground from './videoBackground'
import VideoTitle from './videoTitle';
import useGetMovies from '../helper/hooks-custom/useGetMovies';
import { useSelector } from 'react-redux';
import SecondaryContainer from './secondaryContainer';


function MainContainer() {
 useGetMovies();  
  const data=useSelector((store)=>store?.movies?.moviesList?.results);        
    
  return (
      <div className=""> 
          <VideoBackground data={data} />
          <VideoTitle data={data} />
          <SecondaryContainer data={data} />
      </div>
  )
}

export default MainContainer
