import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 fixed top-0 z-50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent"
            tabIndex={0}
          >
            Aina
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 font-medium text-base lg:text-lg px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                tabIndex={0}
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/login"
              className="ml-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-600 text-white rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium text-base lg:text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              tabIndex={0}
            >
              Get Started
            </Link>
            {/* Theme Toggle Button */}
            <button
              className="ml-2 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              tabIndex={0}
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-orange-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center">
            {/* Theme Toggle Button (mobile) */}
            <button
              className="mr-2 p-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              tabIndex={0}
            >
              {theme === "dark" ? (
                <FiSun className="w-5 h-5 text-orange-400" />
              ) : (
                <FiMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors duration-300"
              aria-label="Toggle menu"
              tabIndex={0}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white/95 dark:bg-gray-900/95 shadow-lg transition-colors duration-500 ${
          isOpen ? "block" : "hidden"
        }`}
        style={{ zIndex: 49 }}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-6 pb-8 space-y-3 flex flex-col">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/login"
            className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-white bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-600 shadow hover:shadow-md transition-all duration-300 mt-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
