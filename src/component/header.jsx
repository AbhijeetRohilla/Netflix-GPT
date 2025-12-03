import React,{useEffect} from 'react'
import { Images } from '../assets/images';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

function Header() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
   useEffect(()=>{    
const unsubscribe = onAuthStateChanged(auth, (user) => {  
  const { email, uid, displayName } = user || {};
  if (user) {            
    dispatch(addUser({email,uid,displayName}))     
    navigate('/browse');          
    // ...
  } else {
    // User is signed out
      console.log("User is signed out");
    dispatch(removeUser())    
    navigate('/');
    // ...
  }
});
return () => unsubscribe();
  },[])

  return (
    <div className="absolute w-screen py-8 px-4 bg-gradient-to-b from-black z-10">
      <img className="w-46" src={Images.LOGO} alt="Netflix Logo" />
    </div>
  )
}

export default Header;
