import React, { useEffect,useState,useRef } from 'react'
import Header from './header'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";

import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';
import { useDispatch,useSelector } from 'react-redux';
import { toggleGpt } from '../redux/gptSlice';
import GptPage from './GPT/gptPage';
import { LANGUAGE_CONSTANTS } from '../utils/constant';
import { supportedLanguages } from '../utils/languageContants';
import { changeLang } from '../redux/languageSlice';

function Browse() {      
        const dispatch=useDispatch();
        let inputRef=useRef("en");
        const toggleState=useSelector((store)=>store.gpt.isGpt);        
const handleSignOut = () =>{
signOut(auth).then(() => {
  // Sign-out successful.  
}).catch((error) => {
  // An error happened.
  console.log("Error signing out: ", error);
});
}
const handleGpt=()=>{
  dispatch(toggleGpt())
}
const handleLang=(e)=>{  
  inputRef=e.target.value;  
  dispatch(changeLang(inputRef))  
}

  return (
    <div className="w-full h-screen relative ">
      <Header />
      <button className='absolute top-4 right-30 z-20 bg-purple-500 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer'
      onClick={handleGpt}
      >GPT</button>
      <select className='absolute top-4 right-50 z-30 bg-green-500 hover:bg-green-900 w-16 text-sm text-white font-semibold rounded-lg cursor-pointer' onChange={handleLang} >
          {supportedLanguages?.map((item,index)=>{
            return (
              <option key={index} value={item.code} >{item.name}</option>
            )
          })}
          </select>  
      <button
        onClick={handleSignOut}
        className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4  rounded-lg cursor-pointer"
      >
        Sign out
      </button>  
      {
        toggleState ?
        <>              
        <GptPage/>
        </>
        :
        <>
         <MainContainer  />
      <SecondaryContainer/>  
        </>
      }
             
    </div>
  )
}

export default Browse


