import React from 'react';
import { Carousel } from 'flowbite-react';

const SubscriptionSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Top Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Subscribe for the exclusive updates!
        </h1>
        <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md mb-2 md:mb-0 md:mr-2"
          />
          <button className="w-full md:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Privacy Policy Agreement */}
      <div className="flex items-center mb-6">
        <input type="checkbox" id="privacy" className="mr-2" />
        <label htmlFor="privacy" className="text-sm text-gray-700">
          I agree to the privacy policy
        </label>
      </div>

      {/* Central Image */}
      <div className="mb-6">
        <img
          src="https://via.placeholder.com/400x200"
          alt="Central"
          className="rounded-md shadow-md"
        />
      </div>

      {/* Text Below Image */}
      <p className="text-center text-gray-700 mb-6">
        Explore our latest features and updates.
      </p>

      {/* Carousel */}
      <div className="w-full max-w-2xl">
        <Carousel>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Slide 1"
              className="rounded-md mb-4"
            />
            <p className="text-center text-gray-700">
              Discover our new collection of products.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Slide 2"
              className="rounded-md mb-4"
            />
            <p className="text-center text-gray-700">
              Learn more about our services and offerings.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Slide 3"
              className="rounded-md mb-4"
            />
            <p className="text-center text-gray-700">
              Stay updated with our latest news and events.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SubscriptionSection;
