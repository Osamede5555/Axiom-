import React from 'react';
import img1 from "../assets/img 1.jpg"; // Import the image from the assets folder

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
      className="bg-indigo-700 text-white shadow-md flex items-center justify-center"
    >
      <div className="max-w-4xl px-6 text-center">
        <h1 className="text-7xl font text-gray-500 mb-4">Turning Creative Ideas into Success</h1>
        <h6 className="text-1xl text-gray-600 mb-6">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
          dolore magna aliqua quis nostrud exerc.
        </h6>

        <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
          Discover Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;