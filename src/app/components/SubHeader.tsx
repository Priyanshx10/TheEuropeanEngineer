import React from 'react';

const SubHeader = () => {
  return (
    <div className="bg-white border-t border-gray-200 py-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-center space-x-8">
          <a
            href="/"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/About"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="/Jobs"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            Euro Top Tech Jobs
          </a>
          <a
            href="/Money"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            Euro Top Money
          </a>
          <a
            href="/Archive"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            Archive
          </a>

          <a
            href="/Csv"
            className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
          >
            Tech Latest
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SubHeader;