import { LayoutGrid, Settings, BarChart2, RefreshCcw, Package, X, ChevronDown, ChevronRight, Boxes, List, Puzzle, User, Lock, Bell } from "lucide-react";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function SideBar({ open, setOpen }) {
  const location = useLocation();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (key) => {
    setExpanded((prev) => (prev === key ? null : key));
  };

  return (
    <aside
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 flex flex-col`}
    >
      {/* Close Button */}
      <button
        className="lg:hidden absolute top-4 right-4 text-gray-600 dark:text-gray-300"
        onClick={() => setOpen(false)}
      >
        <X className="h-6 w-6" />
      </button>

      {/* Logo */}
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 bg-purple-600 rounded-full mr-3"></div>
        <h1 className="text-xl font-bold">Dashy</h1>
      </div>

      {/* Navigation - Flex Grow for Pushing Button to Bottom */}
      <nav className="space-y-2 flex-1">
        <NavItem to="/admin" icon={<LayoutGrid className="mr-3 h-5 w-5" />} text="Dashboard" active={location.pathname === "/admin"} />
        
        {/* Settings Menu */}
        <div>
          <button
            onClick={() => toggleExpand("settings")}
            className={`flex items-center p-2 rounded-lg w-full text-left ${expanded === "settings" ? "bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
          >
            <Settings className="mr-3 h-5 w-5" /> Settings
            {expanded === "settings" ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />}
          </button>
          {expanded === "settings" && (
            <div className="ml-6 space-y-1">
              <NavItem to="/admin/settings/profile" icon={<User className="mr-3 h-5 w-5" />} text="Profile" active={location.pathname === "/admin/settings/profile"} />
              <NavItem to="/admin/settings/security" icon={<Lock className="mr-3 h-5 w-5" />} text="Security" active={location.pathname === "/admin/settings/security"} />
              <NavItem to="/admin/settings/notifications" icon={<Bell className="mr-3 h-5 w-5" />} text="Notifications" active={location.pathname === "/admin/settings/notifications"} />
            </div>
          )}
        </div>

        <NavItem to="/admin/analytics" icon={<BarChart2 className="mr-3 h-5 w-5" />} text="Analytics" active={location.pathname === "/admin/analytics"} />
        
        {/* Products Menu */}
        <div>
          <button
            onClick={() => toggleExpand("products")}
            className={`flex items-center p-2 rounded-lg w-full text-left ${expanded === "products" ? "bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400" : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
          >
            <Package className="mr-3 h-5 w-5" /> Products
            {expanded === "products" ? <ChevronDown className="ml-auto h-4 w-4" /> : <ChevronRight className="ml-auto h-4 w-4" />}
          </button>
          {expanded === "products" && (
            <div className="ml-6 space-y-1">
              <NavItem to="/admin/products" icon={<Boxes className="mr-3 h-5 w-5" />} text="All Products" active={location.pathname === "/admin/products"} />
              <NavItem to="/admin/prodlist" icon={<List className="mr-3 h-5 w-5" />} text="Product List" active={location.pathname === "/admin/prodlist"} />
              
            </div>
          )}
        </div>
        <NavItem to="/admin/extensions" icon={<Puzzle className="mr-3 h-5 w-5" />} text="Extensions" active={location.pathname === "/admin/extensions"} />      </nav>

      {/* Upgrade Button at Bottom */}
      <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 mt-auto">
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