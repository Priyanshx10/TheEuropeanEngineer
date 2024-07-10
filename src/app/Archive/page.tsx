import React from 'react';

const ArchivePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Archive</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render archive items here */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Title</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies
              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Title</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies
              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Article Title</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies
              lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read More
            </a>
          </div>
          {/* Add more archive items as needed */}
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;