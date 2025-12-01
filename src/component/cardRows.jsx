import React from 'react'
import { IMAGE_URL } from '../utils/constant';

function CardRows({data}) {
  return (
    <>    
    <div className='flex'>        
         {
                data?.map((item)=>{
                  return(
                    <>
                    <div className='flex w-36 h-48 '>
                        <img className='' src={`${IMAGE_URL+item?.poster_path}`}
                        /></div>
                    </>
                  )
                })}  
      
    </div>
    </>    
  )
}

export default CardRows;