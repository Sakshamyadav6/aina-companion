import React from "react";
import { FiMenu } from "react-icons/fi";

export default function TopBar({ onToggleSidebar }) {
  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or App Name */}
        <h1 className="text-2xl hidden md:block font-bold text-orange-600 tracking-tight">
          Aina
        </h1>
        {/* Hamburger button dispay on small screens */}
        <button className="md:hidden rounded hover:bg-gray-100">
          <FiMenu className="text-2xl" onClick={onToggleSidebar} />
        </button>

        {/* User Avatar / Profile */}
        <div className="flex items-center space-x-3">
          <span className="hidden md:inline text-sm text-gray-600">
            Welcome, User
          </span>
          <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
