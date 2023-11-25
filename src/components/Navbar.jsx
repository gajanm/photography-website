import React, { useState } from "react";
import '../index.css'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)

  }   

  return (
    <div className='z-10 flex fixed justify-between items-center h-24 w-[100%] mx-auto px-16 text-white #333333'>
        <h1 className='p-4 w-[75%] text-3xl font-bold text-white'>Naresh Photography</h1>
        <ul className = 'hidden md:flex '>
          <li className='p-4'><Link to='/'> Home </Link></li>
          <li className='p-4'><Link to='/portfolio'>Portfolio</Link></li>
          <li className='p-4'><Link to='/contact'>Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden' >
            {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} /> }
          
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#000000] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
          <h1 className='h-24 items-center justify-between px-16 p-4 w-[100%] text-3xl font-bold text-[#ffffff]'>Naresh Photography</h1>
          <ul className='uppercase pl-16 mt-16 text-white  '>
            <li className='p-4 border-b border-gray-300'>Home</li>
            <li className='p-4 border-b border-gray-300'>Portfolio</li>
            <li className='p-4'>Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
