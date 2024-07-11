import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-white py-20 shadow-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Blog</h1>
            <p className="text-gray-600 text-lg mb-8">Discover the latest insights and trends in our blog.</p>
            <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
              Read More
            </a>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://via.placeholder.com/500x300"
              alt="Blog Hero"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;