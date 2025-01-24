import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 border-b border-gray-300 p-5">
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
          <Dropdown label="English" />
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

// Dropdown Component
const Dropdown = ({ label }) => {
  return (
    <div className="relative group">
      <button className="text-white flex items-center space-x-1 hover:underline">
        <span>{label}</span>
        <i className="fas fa-chevron-down text-sm"></i> {/* Arrow Icon */}
      </button>
      {/* Dropdown Menu */}
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 z-10">
        <ul className="py-2">
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Option 1</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Option 2</a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <a href="#">Option 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
