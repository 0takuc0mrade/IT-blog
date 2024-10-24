import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';


//code written by reuben

const SmallHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md p-4 lg:hidden md:hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
        <h1 className='head'><img src="#" alt="web3Bridge" /></h1>
        </div>
        {/* Hamburger menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 dark:text-white focus:outline-none"
          >
           <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </button>
        </div>
      </div>

      {/* Menu for small screens */}
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#"
            className="block px-4 py-2 text-gray-900 dark:text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-900 dark:text-white"
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-900 dark:text-white"
          >
            Single Post
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-900 dark:text-white"
          >
            Pages
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-900 dark:text-white"
          >
            Contact
          </a>
          <div className="px-4 py-2">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default SmallHeader;
