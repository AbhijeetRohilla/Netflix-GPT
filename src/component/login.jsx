import React from 'react';
import { Images } from '../assets/images';
import Header from './header';
import LoginForm from './loginForm';

function Login() {
  return (
    <div>
        <Header />        
      <img className='absolute' src={Images.BACKGROUND_IMAGE} alt="Netflix Background" />   
      <LoginForm/>   
    </div>
  )
}

export default Login
