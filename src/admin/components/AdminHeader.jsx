// import { Link } from "react-router-dom";
{/* <Link to="/admin">Dashboard</Link> */}
import React, { useState } from 'react';

const AdminHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState('Admin'); // Default role

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="w-full bg-green-900 text-white p-4 shadow-md flex justify-between items-center ">
      {/* Left: Logo */}
      <div className="flex items-center space-x-3">
        <img
          src="https://via.placeholder.com/50"
          alt="Logo"
          className="w-12 h-12"
        />
        <span className="text-2xl font-bold">Dashboard</span>
      </div>

      {/* Right: Profile and Role Dropdown */}
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-2 bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700"
        >
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span>{userRole}</span>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-md w-40 z-10">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <button
                  onClick={() => setUserRole('Admin')}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Admin
                </button>
              </li>
              <li>
                <button
                  onClick={() => setUserRole('Editor')}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Editor
                </button>
              </li>
              <li>
                <button
                  onClick={() => setUserRole('Viewer')}
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                >
                  Viewer
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;

