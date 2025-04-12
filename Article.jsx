import React from "react";
import CountUp from "react-countup";
import { FaRegLightbulb } from "react-icons/fa"; // Example icon
import img1 from "../assets/img 1.jpg";

const ArticlePage = () => {
  return (
    <div className="relative">
      {/* Full-Page Slanted Background */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-blue-200 -z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)", // Adjusted for left-to-right slope
        }}
      ></div>

      {/* Section with Two Images */}
      <div className="px-5 py-10">
        <div className="relative flex justify-center items-center">
          {/* First Image */}
          <img
            src={img1}
            alt="Creative Agency"
            className="w-[30%] h-[65vh] rounded-lg shadow-lg transform translate-x-4 translate-y-4"
          />
          {/* Second Image */}
          <img
            src={img1}
            alt="Creative Agency"
            className="w-[30%] h-[65vh] rounded-lg shadow-lg absolute top-0 left-0"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <h1 className="text-4xl font-bold text-gray-900">Creative Agency</h1>
        <h2 className="text-xl font-light text-gray-700">We help your business grow</h2>
        <p className="text-lg text-gray-600">
          Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia.
        </p>

        <h3 className="text-3xl font-bold flex items-center space-x-2 text-gray-800 mt-8">
          <FaRegLightbulb className="text-orange-500" />
          <span>Creative Design</span>
        </h3>
        <p className="text-lg text-gray-600 mt-4">
          Natus error sit voluptatem accus antium doloremque.
        </p>

        <div className="mt-8">
          <h3 className="text-3xl font-bold text-gray-800">Endless Possibilities</h3>
          <p className="text-lg text-gray-600 mt-4">
            Sit voluptatem accus antium doloremque laudan.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="mt-16">
          <h4 className="text-2xl font-bold text-gray-900">Our Success in Numbers</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 mt-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                <CountUp start={0} end={98} duration={3} />+
              </p>
              <p className="text-lg text-gray-700">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                <CountUp start={0} end={65} duration={3} />+
              </p>
              <p className="text-lg text-gray-700">People</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                <CountUp start={0} end={10} duration={3} />+
              </p>
              <p className="text-lg text-gray-700">Years</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gray-900">
                <CountUp start={0} end={15} duration={3} />+
              </p>
              <p className="text-lg text-gray-700">Awards</p>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-orange-500 text-white text-xl rounded-lg hover:bg-orange-600 transition duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;