'use client';
import React from "react";

// Dropdown Component
const Dropdown = ({ label }: { label: string }) => {
  return (
    <div className="relative group">
      <button className="text-white flex items-center space-x-1 hover:underline">
        {label} <span className="ml-1">▼</span>
      </button>
      {/* Dropdown Menu */}
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2">
        <ul className="py-2">
         
         
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-blue-400 border-b border-gray-300 p-5">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://www.unesco.org/themes/custom/bunesco8/assets/images/logo/logo.svg" // Replace with your logo path
            alt="UNESCO Logo"
            className="h-8"
          />
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Dropdown label="Expertise" />
          <Dropdown label="Impact" />
          <Dropdown label="Publications" />
          <Dropdown label="Watch & Listen" />
          <Dropdown label="Get Involved" />
          <a href="#" className="text-white hover:underline">
            Press Corner
          </a>
          <a href="#" className="text-white hover:underline">
            Data Center
          </a>
          <a href="#" className="text-white hover:underline">
            Governance
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            {/* Replace with a search icon */}
            <span role="img" aria-label="search">
              🔍
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
