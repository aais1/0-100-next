"use client";

import React, { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading,setLoading]=useState(false);
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Basic client-side validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required');
      setSuccess('')
      setLoading(false)
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false)
      setSuccess('')
      return;
    }

    try {
      // Example of handling signup (you would typically make a request to your API here)
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      

      const data=await response.json();
      console.log(data)
      if (!response.ok) {
        setError(data.error)
        setLoading(false)
        setSuccess('');
        return;
      }

      // Handle successful signup
      setSuccess('Signup successful! You can now login.');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setLoading(false)
      setError('');
    } catch (error) {
      setError('Failed to sign up');
      setLoading(false)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-600">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">Sign Up</h2>
        {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border text-indigo-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type={showPass ? 'text' : 'password'}
              id="password"
              value={password}
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border text-indigo-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input
              type={showPass ? 'text' : 'password'}
              id="confirmPassword"
              placeholder='Enter Password Confirmation'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border text-indigo-600 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="showPass"
              checked={showPass}
              onChange={() => setShowPass(!showPass)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="showPass" className="ml-2 text-sm text-gray-600">Show Password</label>
          </div>
          {error && <p className="text-red-500 mb-4 text-left text-sm font-semibold">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-80 disabled:cursor-not-allowed"
            disabled={loading}
          >
           { loading ? 'Loading..' : 'Login'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/signin" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
