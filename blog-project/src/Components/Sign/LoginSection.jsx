import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with Email: ${email}`);
    setEmail('');
    setPassword('');
  };

  const handleGoogleLogin = () => {
    alert('Logging in with Google');
  };

  const handleAppleLogin = () => {
    alert('Logging in with Apple');
  };

  return (
    <div className="items-center justify-center w-screen  flex h-screen">
          <div className="flex flex-col items-center p-6 w-full max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={handleEmailLogin} className="w-full space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded mt-1 focus:outline-none focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>


        <Link to="/home">
        <button type="submit"  className="w-full bg-blue-500 text-white py-2 rounded-3xl hover:bg-blue-600 transition mt-4"
        >
        Login
        </button>
        </Link>

      </form>

      <div className="mt-6 space-y-2 w-full">
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-2 rounded-3xl hover:bg-red-600 transition"
        >
          Login with Google
        </button>

        <button
          onClick={handleAppleLogin}
          className="w-full bg-black text-white py-2 rounded-3xl hover:bg-gray-800 transition"
        >
          Login with Apple
        </button>
      </div>
    </div>
    </div>

  );
}

export default LoginSection;
