import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="bg-transparent text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Axiom Creative
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 font-medium">
          {["Home", "Pages", "Portfolio", "Blog"].map((text) => (
            <Link
              key={text}
              to={`/${text.toLowerCase()}`}
              className="hover:text-indigo-200 transition"
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-1.5 rounded-full bg-indigo-600 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white" />
          </div>

          {/* Phone */}
          <div className="hidden sm:flex items-center space-x-2">
            <FiPhoneCall className="text-lg" />
            <span className="text-sm">+1 (800) 123-4567</span>
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
             className="pl-10 pr-3 py-1.5 rounded-full bg-indigo-600 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
            Let’s Talk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;