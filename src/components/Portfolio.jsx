import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import buildingsThumbnail from './Images/thumbnails/building.jpg'; // Import thumbnail images for each category
import sunsetsThumbnail from './Images/thumbnails/sunsets.jpg';
import nightskyThumbnail from './Images/thumbnails/night-skies.jpg';
import natureThumbnail from './Images/thumbnails/natures.jpg';
import portraitThumbnail from './Images/thumbnails/portraits.jpg';
import cityScapesThumbnail from './Images/thumbnails/city-scapes.jpg';

const categories = [
  { path: 'buildings', title: 'Buildings', image: buildingsThumbnail },
  { path: 'sunsets', title: 'Sunsets', image: sunsetsThumbnail },
  { path: 'city-scapes', title: 'City Scapes', image: cityScapesThumbnail },
  { path: 'portraits', title: 'Portraits', image: portraitThumbnail },
  { path: 'nature', title: 'Nature', image: natureThumbnail },
  { path: 'night-skies', title: 'Night Skies', image: nightskyThumbnail },
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-photo-black to-photo-gray-900 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-300 font-inter max-w-2xl mx-auto">
            Explore my photography collections across different categories
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.path}
              variants={itemVariants}
              className="group relative"
            >
              <Link to={`/portfolio/${category.path}`}>
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-square">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-photo-black/80 via-photo-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-photo-gold-300 font-inter text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      View Collection →
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;