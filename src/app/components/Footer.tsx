import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <p className="text-gray-400 mb-4">
              The European Engineer is a newsletter dedicated to helping tech professionals thrive in their careers across Europe.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Learn More
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Money
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Archive
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400 mb-4">
              Have a question or feedback? Get in touch with us:
            </p>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@theeuropeanengineer.com" className="text-gray-400 hover:text-white">
                  info@theeuropeanengineer.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nicolaamadio" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} The European Engineer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;