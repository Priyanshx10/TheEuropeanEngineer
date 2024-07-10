/* eslint-disable @next/next/no-img-element */
import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-800">About The European Engineer</h1>
            <img
              src="https://via.placeholder.com/100"
              alt="Author"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
          <p className="text-xl font-semibold text-gray-600 mb-4">
            Number 1 Newsletter on Tech Careers in Europe
          </p>
          <p className="text-gray-600 mb-4">
            I am Nicola Amadio, a Big Tech Software Engineer based in Zurich, Switzerland, with over 7 years of experience working across Europe
            (Switzerland, Poland, Germany, Spain, and Italy). Through this newsletter, I aim to share my learnings and experiences to help
            tech professionals thrive in their careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Talk About</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Maximizing Your Income, Savings, and Wealth</li>
              <li>Navigating Europes Tech Market</li>
              <li>Geo-Maximizing Europe</li>
              <li>The Future of Software Engineering Careers</li>
              <li>Big Tech and FAANG Careers</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe for Free</h2>
            <p className="text-gray-600 mb-4">
              Every article is free. Get my latest insights delivered straight to your inbox by subscribing with your email. For daily updates, check out my LinkedIn.
            </p>
            <input
              type="email"
              placeholder="Type your email..."
              className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md w-full">
              Subscribe
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upgrade Your Subscription</h2>
          <p className="text-gray-600 mb-4">
            For only 5 euros a month, gain access to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
            <li>Over 4000 top tech jobs in Europe, updated weekly.</li>
            <li>Detailed salary and saving rates data.</li>
            <li>Direct links to job applications and analytics derived from the data.</li>
          </ul>
          <div className="flex space-x-2">
            <a href="/upgrade" className="text-blue-500 hover:underline">
              Upgrade your subscription here
            </a>
            <a href="/job-board" className="text-blue-500 hover:underline">
              Visualize the job board here
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join My Coaching Program</h2>
          <p className="text-gray-600">
            I offer a Coaching Program where I personally guide a small, carefully selected group of individuals to maximize their earnings and lifestyle as tech workers in Europe. The program is currently sold out, but you can apply to join the waiting list.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Community Collaboration</h2>
          <p className="text-gray-600 mb-4">
            Be part of our free salary and saving rates sharing document:
          </p>
          <div className="space-y-2">
            <a href="/learn-more" className="text-blue-500 hover:underline">
              Learn more about it here
            </a>
            <a href="/contribute" className="text-blue-500 hover:underline">
              Contribute via Google Form
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Stay Up-to-Date</h2>
          <p className="text-gray-600">
            Stay informed on all things Software Engineering in Europe:
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Job markets, locations, salaries, taxes, trends, technologies, interview strategies, and more.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mt-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Meet the Author</h2>
              <p className="text-gray-600">
                Nicola Amadio
                <br />
                @NICOLAAMADIO
                <br />
                Big Tech Software Engineer based in Zurich, Switzerland.
                <br />
                Over 7 years of experience working in multiple European countries.
                <br />
                Passionate about sharing knowledge and experiences to help others succeed.
              </p>
            </div>
            <a href="https://www.linkedin.com" className="text-blue-500 hover:underline">
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;