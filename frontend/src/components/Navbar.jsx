import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent py-5 px-6 md:px-10 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-orange-600 tracking-tight">
        Aina
      </h1>

      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
        <a href="#about" className="hover:text-orange-600 transition">
          About
        </a>
        <a href="#features" className="hover:text-orange-600 transition">
          Features
        </a>
        <a href="#contact" className="hover:text-orange-600 transition">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
