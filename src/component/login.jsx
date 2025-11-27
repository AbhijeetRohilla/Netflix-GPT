import React,{useEffect} from 'react';
import { Images } from '../assets/images';
import Header from './header';
import LoginForm from './loginForm';
import ErrorBoundary from '../ErrorHandling/ErrorBoundary';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';

function Login() {

  
  const dispatch=useDispatch();      

  return (
    <div>
        <ErrorBoundary>
        <Header />        
      <img className='absolute' src={Images.BACKGROUND_IMAGE} alt="Netflix Background" />   
      <LoginForm/>   
      </ErrorBoundary>
    </div>
  )
}

export default Login
