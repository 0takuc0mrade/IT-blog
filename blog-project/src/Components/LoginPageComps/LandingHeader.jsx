import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between w-full items-center p-4 bg-transparent">
      <div className="text-2xl font-bold text-white">Logo</div>
      <div className="flex space-x-4">
        <Link
          to="/home"
          className="px-4 py-2 text-sm font-medium text-white hover:bg-white hover:bg-opacity-20 rounded-md transition duration-150 ease-in-out"
        >
          Sign In
        </Link>
        <Link
          to="/home"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-150 ease-in-out"
        >
          Create Account
        </Link>
      </div>
    </nav>
  );
}
