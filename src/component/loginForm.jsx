import React from 'react'

function LoginForm() {
  return (
    <div className='absolute z-10 bg-black opacity-80 mx-auto left-0 right-0 top-1/4 w-96 p-8 text-white rounded-md'>
        <form >
            <h3 className='font-bold text-2xl pb-4'>Sign In</h3>
        <input className='p-2 my-4 mx-2 bg-gray-700 w-full rounded-sm' type="email" placeholder='Email Address'/>
        <input className='p-2 my-4 mx-2 bg-gray-700 w-full rounded-sm' type="password" placeholder='Password'/><br/>
        <button className='my-4 mx-2 w-full bg-red-600 py-2 px-4 rounded'>Sign In</button>
        <p className='text-sm'>New to Netflix ? <span >Sign up now</span></p>
      </form>
    </div>
  )
}

export default LoginForm
