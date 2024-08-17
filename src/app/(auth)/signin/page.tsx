"use client"

import Link from 'next/link';
import React, { useState } from 'react';


export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading,setLoading]=useState(false);
  const [showPass,setShowPass]=useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    try {
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data=await response.json();
      if (!response.ok) {
        setError(data.error);
        setLoading(false);
        return ;
      }
      setError('');
      setLoading(false);
    } catch (error) {
      setError('Failed to login');
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-600">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center  text-indigo-600">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-indigo-600 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type={showPass ?'text':'password'}
              id="password"
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 text-indigo-600  py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
