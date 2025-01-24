'use client';
import React, { useState } from "react";

// Dropdown Component
const Dropdown = ({ label, items }: { label: string; items: string[] }) => {
  return (
    <div className="relative group">
      <button className="text-white flex items-center space-x-1 hover:underline">
        {label} <span className="ml-1">▼</span>
      </button>
      {/* Dropdown Menu */}
      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 z-10">
        <ul className="py-2">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 border-b border-gray-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="https://www.unesco.org/themes/custom/bunesco8/assets/images/logo/logo.svg" // Replace with your logo path
            alt="UNESCO Logo"
            className="h-8"
          />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:items-center absolute md:static top-16 right-0 w-full  md:w-auto bg-blue-600 md:bg-transparent p-4 md:p-0 z-10 gap-4`}
        >
          <Dropdown label="Expertise" items={["Education", "Science", "Culture"]} />
          <Dropdown label="Impact" items={["Stories", "Achievements", "Milestones"]} />
          <Dropdown label="Publications" items={["Reports", "Articles", "E-books"]} />
          <Dropdown label="Watch & Listen" items={["Videos", "Podcasts", "Webinars"]} />
          <Dropdown label="Get Involved" items={["Volunteer", "Donate", "Events"]} />
          <a href="#" className="text-white hover:underline block mt-2 md:mt-0">
            Press Corner
          </a>
          <a href="#" className="text-white hover:underline block mt-2 md:mt-0">
            Data Center
          </a>
          <a href="#" className="text-white hover:underline block mt-2 md:mt-0">
            Governance
          </a>
        </nav>

        {/* Hamburger for small screens */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-2xl">☰</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
