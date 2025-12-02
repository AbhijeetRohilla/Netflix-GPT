import React from 'react'
import { useSelector } from 'react-redux'
import { LANGUAGE_CONSTANTS } from '../../utils/constant'

function GptSearch() {
    const lang=useSelector(store=>store.lang)
    const objForLang= LANGUAGE_CONSTANTS.filter((currentLang)=>lang==currentLang.code);  
    console.log(objForLang)  
  return (
    <div className='z-40'>
        <h1>dscvdfvffff</h1>
        <button>hhhhhhhhhhhhhhhhhhhhhhhhh</button>
      <input type='text' placeholder={objForLang?.[0]?.placeholder}></input>
      <button className='bg-black text-4xl text-white w-screen'>{objForLang?.[0]?.search}</button>
    </div>
  )
}

export default GptSearch
