import React from 'react'

function VideoTitle({data}) {
  return (
    <div className='text-white absolute top-0 left-0 mx-0 space-y-6 w-screen h-screen bg-gradient-to-r from-black  '>
      <h1 className='text-4xl font-bold mt-40 mx-20 '>{data?.[0].original_title}</h1>

      <p className='mt-2 w-1/4 mx-20'>{data?.[0].overview}</p>
      <button className='opacity-100 ml-20 bg-gray-400 px-4 py-2 rounded-md font-semibold hover:bg-red-700 w-1/9 '> Play</button>
      <button className='opacity-60  bg-gray-400 px-4 py-2 rounded-md font-semibold hover:bg-gray-700 w-1/9 mx-2 '>More Info</button>
      
    </div>
  )
}

export default VideoTitle
