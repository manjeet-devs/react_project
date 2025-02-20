import { LayoutGrid, Settings, BarChart2, RefreshCcw, Package, X } from "lucide-react";
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar({ open, setOpen }) {
  const location = useLocation(); // Get current route

  return (
    <aside
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      <button
        className="lg:hidden absolute top-4 right-4 text-gray-600 dark:text-gray-300"
        onClick={() => setOpen(false)}
      >
        <X className="h-6 w-6" />
      </button>
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full mr-3"></div>
        <h1 className="text-xl font-bold">Dashy</h1>
      </div>
      <nav className="space-y-2">
        <NavItem to="/admin" icon={<LayoutGrid className="mr-3 h-5 w-5" />} text="Dashboard" active={location.pathname === "/admin"} />
        <NavItem to="/admin/settings" icon={<Settings className="mr-3 h-5 w-5" />} text="Settings" active={location.pathname === "/admin/settings"} />
        <NavItem to="/admin/analytics" icon={<BarChart2 className="mr-3 h-5 w-5" />} text="Analytics" active={location.pathname === "/admin/analytics"} />
        <NavItem to="/admin/updates" icon={<RefreshCcw className="mr-3 h-5 w-5" />} text="Updates" badge="14" active={location.pathname === "/admin/updates"} />
        <NavItem to="/admin/products" icon={<Package className="mr-3 h-5 w-5" />} text="Products" badge="14+" active={location.pathname === "/admin/products"} />
      </nav>
      <button className="w-full mt-auto bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-200">
        Upgrade Plan
      </button>
    </aside>
  );
}

function NavItem({ to, icon, text, active, badge }) {
  return (
    <Link
      to={to}
      className={`flex items-center p-2 rounded-lg ${
        active
          ? "bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {icon}
      {text}
      {badge && (
        <span className="ml-auto bg-purple-600 text-white text-xs font-medium px-2 py-1 rounded-full">{badge}</span>
      )}
    </Link>
  );
}
