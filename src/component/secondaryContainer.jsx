import React from 'react'
import CardRows from './cardRows';

function SecondaryContainer({data}) {
  console.log("SecondaryContainer data", data);
  return (
    <>
      {data&& <h1 className='text-2xl font-bold'>Now Playing.</h1> } 
    <div className='flex overflow-x-scroll '>     
        <CardRows data={data}/>    
    </div>
    </>
  )
}

export default SecondaryContainer
