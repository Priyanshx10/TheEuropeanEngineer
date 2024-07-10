import React from 'react';

const MoneyPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Money and Finance</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render money-related articles here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Invest in the Stock Market</h2>
            <p className="text-gray-600 mb-4">
              Discover the basics of investing in the stock market and how to get started.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Finance Tips for Tech Professionals</h2>
            <p className="text-gray-600 mb-4">
              Learn how to manage your finances effectively as a tech professional.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">The Benefits of Budgeting</h2>
            <p className="text-gray-600 mb-4">
              Explore the advantages of creating a budget and how to stick to it.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          {/* Add more money-related articles as needed */}
        </div>
      </div>
    </div>
  );
};

export default MoneyPage;