import React from 'react';
import { NavLink } from 'react-router-dom'; // Optional if using React Router

const SideBar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '🏠', path: '/' },
    { name: 'Products', icon: '📦', path: '/products' },
    { name: 'Orders', icon: '🛒', path: '/orders' },
    { name: 'Users', icon: '👤', path: '/users' },
    { name: 'Settings', icon: '⚙️', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen shadow-lg">
      <div className="p-4 text-2xl font-bold text-center border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
