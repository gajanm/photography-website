import React from 'react';
import { Link } from 'react-router-dom';
import buildingsThumbnail from './Images/thumbnails/building.jpg'; // Import thumbnail images for each category
import sunsetsThumbnail from './Images/thumbnails/sunsets.jpg';
import nightskyThumbnail from './Images/thumbnails/night-skies.jpg';
import natureThumbnail from './Images/thumbnails/natures.jpg';
import portraitThumbnail from './Images/thumbnails/portraits.jpg';
import cityScapesThumbnail from './Images/thumbnails/city-scapes.jpg';

const Portfolio = () => {
  return (
    

      <div className= "pt-24 p-8 h-screen text-white">


        <div className=" grid grid-cols-2 gap-4 ">
          <div className="w-100 flex flex-col items-center  ">
            <Link to="/portfolio/buildings">
              <div className="mb-2">
                <img className= "w-80 h-80 object-cover object-center rounded transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out" src={buildingsThumbnail} alt="Buildings" />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold text-center">Buildings</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/portfolio/sunsets">
              <div className="mb-2">
                {/* Thumbnail for sunsets */}
                <img className="w-80 h-80 object-cover  rounded transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out" src={sunsetsThumbnail} alt="Sunsets" />
              </div>
              <h3 className="text-xl  md:text-3xl font-semibold text-center">Sunsets</h3>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-8">
          <div className="flex flex-col items-center">
            <Link to="/portfolio/city-scapes">
              <div className="mb-2">
                <img className="w-80 h-80 object-cover rounded transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out" src={cityScapesThumbnail} alt="City Scapes" />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold text-center">City Scapes</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/portfolio/portraits">
              <div className="mb-2">
                {/* Thumbnail for sunsets */}
                <img className="w-80 h-80 object-cover rounded transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out" src={portraitThumbnail} alt="Portraits" />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold text-center">Portraits</h3>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-8">
          <div className="flex flex-col items-center">
            <Link to="/portfolio/nature">
              <div className="mb-2">
                <img className="w-80 h-80 object-cover rounded transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out" src={natureThumbnail} alt="Nature" />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold text-center">Nature</h3>
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <Link to="/portfolio/night-skies">
              <div className="mb-2">
                {/* Thumbnail for sunsets */}
                <img className="w-80 h-80 object-cover rounded transform-gpu hover:scale-105 transition-transform duration-300 ease-in-out" src={nightskyThumbnail} alt="Night skies" />
              </div>
              <h3 className="text-xl md:text-3xl font-semibold text-center">Night skies</h3>
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Portfolio;