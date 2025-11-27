import React from 'react'
import { Images } from '../assets/images';

function Header() {
  return (
    <div className="absolute w-screen py-8 px-4 bg-gradient-to-b from-black z-10">
      <img className="w-46" src={Images.LOGO} alt="Netflix Logo" />
    </div>
  )
}

export default Header;
