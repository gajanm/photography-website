import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Naresh from "../naresh.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const [text] = useTypewriter({
    words: ['buildings', 'sunsets', 'city scapes', 'portraits', 'nature', 'night skies'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-photo-black to-photo-gray-900">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-photo-black/40 z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-0">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-6"
          >
            <h2 className="text-photo-gold-300 font-inter text-lg font-medium tracking-wide">
              Welcome to My Portfolio
            </h2>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Hi, I am Naresh
            </h1>
            <p className="text-lg md:text-xl text-gray-200 font-inter leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A New Jersey-based high school photographer with a passion for capturing
              moments and a dream of becoming a commercial photographer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <Link
                to="/portfolio"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2 border-photo-gold-300 rounded-full text-white"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-photo-gold-300 group-hover:translate-x-0 ease">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                  View Portfolio
                </span>
                <span className="relative invisible">View Portfolio</span>
              </Link>

              <div className="font-inter text-lg text-white">
                Specializing in{' '}
                <span className="text-photo-gold-300">
                  {text}
                  <Cursor cursorStyle="_" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={Naresh}
                alt="Naresh"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-photo-black/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
