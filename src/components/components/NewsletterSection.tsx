import React from 'react'

const NewsletterSection = () => {
    return (
        <div className="bg-gray-800 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Get the latest updates and insights delivered to your inbox.
                </p>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <form className="flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-700 text-white py-3 px-4 rounded-l-lg focus:outline-none flex-1"
                  />
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-r-lg">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NewsletterSection

