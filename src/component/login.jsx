import React from 'react';
import { Images } from '../assets/images';
import Header from './header';
import LoginForm from './loginForm';
import ErrorBoundary from '../ErrorHandling/ErrorBoundary';

function Login() {
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
