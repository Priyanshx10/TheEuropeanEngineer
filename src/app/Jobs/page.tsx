import React from 'react';

const JobsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Jobs and Careers</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render job-related articles here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Ace Your Next Tech Interview</h2>
            <p className="text-gray-600 mb-4">
              Discover the top strategies and techniques to prepare for and excel in your next tech job interview.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Rise of Remote Work in Europe</h2>
            <p className="text-gray-600 mb-4">
              Explore the growing trend of remote work opportunities in Europe and how to leverage them for your career.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Negotiating Salaries as a Tech Professional</h2>
            <p className="text-gray-600 mb-4">
              Learn effective strategies to negotiate higher salaries and better benefits in the European tech market.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          {/* Add more job-related articles as needed */}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;