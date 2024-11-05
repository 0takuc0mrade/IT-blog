import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingBody() {
  return (
    <div className="flex justify-start items-center min-h-screen p-4 sm:p-8">
      <div className="max-w-full sm:max-w-2xl">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black mb-2 sm:mb-4 text-shadow-lg">
          Dive into the future
          <span className="text-white block sm:block lg:block">
            of the internet
          </span>
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl md:text-2xl text-shadow">
          Let's explore WEB 3.0
        </p>

        <Link to="/home">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
}
