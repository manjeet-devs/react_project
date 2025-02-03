import React from "react";
import { Link } from "react-router-dom";


function Header(){
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-auto" />
          <Link to="/" className="hover:text-gray-400"><h1 className="text-2xl font-semibold">My Website</h1></Link>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-full py-2 pl-8 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
             {/* Search icon */}
          </span>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
