import React, { useState,useRef, useMemo, useEffect } from 'react'
import { Validation } from '../utils/validation';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
    const [signIn,setSignIn]= useState(true);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const [result,setResult]=useState({});    

    const handleOnSubmit=()=>{
     const validationResult = Validation(emailRef?.current?.value,passwordRef?.current?.value);
     setResult(validationResult);     
     if(!result.valid){      
        return;
     }
     if(!signIn){
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setResult({valid:false , message:errorCode +"-" +errorMessage });
  });
     }
     else{
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

    }
    }
    
    
  return (
    <div className='absolute z-10 bg-black opacity-80 mx-auto left-0 right-0 top-1/4 w-96 p-8 text-white rounded-md'>
        <form >
            <h3 className='font-bold text-2xl pb-4'>{signIn? "Sign In" : "Sign Up"}</h3>
           {!signIn && <input className='p-2 my-4 mx-2 bg-gray-700 w-full rounded-sm' type="text" placeholder='Full Name'/>}           
       <input className='p-2 my-4 mx-2 bg-gray-700 w-full rounded-sm' type="text" placeholder='Email Address' ref={emailRef}/>       
        <input className='p-2 my-4 mx-2 bg-gray-700 w-full rounded-sm' type="password" placeholder='Password' ref={passwordRef}/><br/>
        <p>{result?.failedValidation ? <span className='text-red-500 font-bold text-md p-2'>{result.message}</span> : null}</p>
        <button className='my-4 mx-2 w-full bg-red-600 py-2 px-4 rounded' onClick={(e)=>{e.preventDefault(); handleOnSubmit();}}>{signIn? "Sign In" : "Sign Up"}</button>
        <p className='text-sm cursor-pointer' onClick={()=>{setSignIn(!signIn);setResult({})}}>{signIn ? "New to Netflix ? " : "Already have an account ? "} <span >{signIn ? "Sign up now" : "Sign in now"}</span></p>
      </form>
    </div>
  )
}

export default LoginForm
