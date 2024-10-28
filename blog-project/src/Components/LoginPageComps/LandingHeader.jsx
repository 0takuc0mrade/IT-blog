import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../HomePageComps/ThemeToggle';

export default function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="relative top-0 left-0 right-0 flex justify-between w-full items-center p-4 bg-transparent">
      <div className="text-2xl font-bold text-white">Logo</div>
      <div className="flex space-x-4">
        <div className="hidden sm:flex space-x-4">

        <Link to="/login">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 rounded-md transition duration-150 ease-in-out"
          >
            Login
          </button>
        </Link>
          
          <Link
            to="/signup"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-150 ease-in-out"
          >
            Create Account
          </Link>
          <ThemeToggle />
        </div>
        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-500  rounded-md shadow-lg py-1">
                
        <Link to="/login">
          <button className="w-20 ml-7 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-700 rounded-md transition duration-150 ease-in-out"
          >
            Login
          </button>
        </Link>
             
              <Link
                to="/signup"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-150 ease-in-out"
              >
                Create Account
              </Link>
              <div className="px-4 py-2 dark:bg-gray-500 dark:text-white transition-colors duration-200">
                <ThemeToggle />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
