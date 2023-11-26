import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Naresh from "../naresh.jpeg"
import { Link } from "react-router-dom"

const Hero = () => {
  const [text] = useTypewriter({
    words: ['buildings', 'sunsets', 'city scapes', 'portraits', 'nature', 'night skies'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <div className='md:flex md:overflow-hidden text-white '>
      <div className='w-full md:w-1/2 md:h-screen flex flex-col justify-center items-center'>
        <h1 className="text-xl font-bold p-2 mb-1 mt-24 md:mt-0"> Hi, I am Naresh </h1>
        <h3 className='md:text-3xl sm:text-2xl text-lg items-center text-center font-bold flex w-[75%] h-[25%] md:py-[100px]'>A New Jersey-based high schooler with a passion for photography and a desire to become a commercial photographer.</h3>
        <div className='mt-4 hover:bg-black/5 rounded-full border-2 border-white'>
            <button className='md:p-6 p-4  '>
            <Link to='/portfolio' className="md:text-4xl sm:text-2xl text-xl font-bold p-1">View my work in  
            <div>
            </div>
             {text}
             <Cursor/>
            
            </Link>
           
             
            
              
            
      
            </button>
        </div>
        
      </div>
      <div className='md:w-1/2 pt-24 md:h-screen'> 
        <img src={Naresh} alt='/'/>
      </div>
    </div>
  )
}

export default Hero
