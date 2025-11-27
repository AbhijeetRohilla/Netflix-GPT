import React, { useState } from 'react'
import Header from './header'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";

function Browse() {   
const handleSignOut = () =>{
signOut(auth).then(() => {
  // Sign-out successful.  
}).catch((error) => {
  // An error happened.
  console.log("Error signing out: ", error);
});
}
  return (
    <div className="w-full h-screen relative">
      <Header />
      <button
        onClick={handleSignOut}
        className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 "
      >
        Sign out
      </button>
    </div>
  )
}

export default Browse


