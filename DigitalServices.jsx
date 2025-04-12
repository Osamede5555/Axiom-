import React from "react";
import { FaCode, FaPaintBrush, FaBullhorn, FaChartLine, FaMobileAlt, FaSearch } from "react-icons/fa";
import img1 from "../assets/img 1.jpg"; // Assuming img 1
import img2 from "../assets/img 1.jpg"; // Assuming img 1


const DigitalServices = () => {
  return (
    <div className="px-6 py-16 bg-white">
      {/* Top Section - Left and Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
          <h3 className="text-2xl text-gray-700">We provide best digital services</h3>
          <p className="text-gray-600">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition">
            Discover Now
          </button>
        </div>

        {/* Right Side */}
        <div className="relative w-full h-full">
          <img
            src={img1}
            alt="Top Image"
            className="rounded-xl shadow-xl w-3/4 absolute top-0 left-10 z-20"
          />
          <img
            src={img2}
            alt="Bottom Image"
            className="rounded-xl shadow-xl w-3/4 absolute top-12 left-20 z-10"
          />
        </div>
      </div>

      {/* Icon Section */}
      <div className="mt-32 flex flex-wrap justify-center gap-10 text-orange-500 text-3xl">
        <FaCode title="Web Development" />
        <FaPaintBrush title="Design" />
        <FaBullhorn title="Marketing" />
        <FaChartLine title="Analytics" />
        <FaMobileAlt title="App Dev" />
        <FaSearch title="SEO" />
      </div>
    </div>
  );
};

export default DigitalServices;
