import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import Naresh from "../naresh.jpeg"

const Hero = () => {
  const [text] = useTypewriter({
    words: ['buildings', 'sunsets', 'city scapes', 'portraits', 'nature', 'night skies'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <div className='flex overflow-hidden'>
      <div className='w-1/2 h-screen flex flex-col justify-center items-center'>
        <h1 className="text-xl font-bold p-2 mb-1"> Hi, I am Naresh </h1>
        <h3 className='md:text-3xl sm:text-2xl text-xl items-center text-center font-bold flex w-[75%] h-[25%] py-[100px]'>A New Jersey-based high schooler with a passion for photography and a desire to become a commercial photographer.</h3>
        <div className='mt-4 rounded-full border-2 border-black'>
            <button className='p-6 '>
            <p className='md:text-4xl sm:text-2xl text-xl font-bold p-1'>View my work in</p>
             <span className = "md:text-4xl sm:text-2xl text-xl font-bold p-1">
             {text}
             <Cursor/>
             </span> 
            
              
            
      
            </button>
        </div>
        
      </div>
      <div className='w-1/2 pt-24 h-screen'> 
        <img src={Naresh} alt='/'/>
      </div>
    </div>
  )
}

export default Hero
