import React from 'react';
import { Link } from 'react-router-dom'; // Optional if using React Router

const SideBar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: ' 🏠', path: '/admin' },
    { name: 'Products', icon: ' 📦', path: '/admin/products' },
    { name: 'Orders', icon: ' 🛒', path: '/admin/orders' },
    { name: 'Users', icon: ' 👤', path: '/admin/user' },
    { name: 'Static page', icon: '⚙️', path: '/admin/staticpage' },
    { name: 'Settings', icon: ' ⚙️', path: '/admin/settings' },
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
              <Link
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-700 rounded-lg ${
                    isActive ? 'bg-gray-700' : ''
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
