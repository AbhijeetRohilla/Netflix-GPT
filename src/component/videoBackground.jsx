import React from 'react'
import useGetTrailer from '../helper/hooks-custom/useGetTrailer';
import { useSelector } from 'react-redux';
import { YOUTUBE_URL } from '../utils/constant';

function VideoBackground({ data }) {
  const id = data?.[0]?.id;
  let val;
  if (id) {
    useGetTrailer(id);
    const movieTrailerData = useSelector((store) => store?.movies?.trailerData);
    console.log("trailerData", movieTrailerData?.results);
    val = movieTrailerData?.results?.find((item) => item?.type === "Trailer");
    console.log("val", val);
  }


  return (
    <div>
      {id && 
      <iframe className='w-screen h-screen'
       src={`${YOUTUBE_URL}${val?.key}`}
        title="YouTube video player" frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
           allowFullScreen></iframe>
      }

    </div>
  )
}

export default VideoBackground;
