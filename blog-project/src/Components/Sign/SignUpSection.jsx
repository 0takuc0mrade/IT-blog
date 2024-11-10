import React, { useState } from 'react';

function SignUpSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignUp = (e) => {
    e.preventDefault();
    alert(`Signing up with Email: ${email}`);
    setEmail('');
    setPassword('');
  };

  const handleGoogleSignUp = () => {
    alert('Signing up with Google');
  };

  const handleAppleSignUp = () => {
    alert('Signing up with Apple');
  };

  return (
    <div className="items-center justify-center w-screen  flex h-screen">
      <div className="flex flex-col items-center justify-center p-6 w-full max-h-screen md:max-h-screen max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleEmailSignUp} className="w-full space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
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

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-3xl hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-6 space-y-2 w-full">
          <button
            onClick={handleGoogleSignUp}
            className="w-full bg-red-500 text-white py-2 rounded-3xl hover:bg-red-600 transition"
          >
            Sign Up with Google
          </button>

          <button
            onClick={handleAppleSignUp}
            className="w-full bg-black text-white py-2 rounded-3xl hover:bg-gray-800 transition"
          >
            Sign up with apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUpSection;
