import React, { useState } from 'react'

function Login() {
  const [role, setRole] = useState('customer');
  return (
   
<div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
     

      <div className="bg-white shadow-md rounded-lg px-10 py-8 w-full max-w-md">
        

        {/* Sign In Header */}
        <h2 className="text-center text-xl font-semibold mb-6">Sign In to Your Account</h2>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Login As</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">👁️</span>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-green-500 hover:underline">Forgot Password?</a>
        </div>

        {/* Sign In Button */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md"
          onClick={() => {
            // Placeholder: Add your actual login logic here
            alert(`Logging in as: ${role}`);
          }}
        >
          Sign In
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?
          <a href="#" className="text-green-500 font-medium ml-1 hover:underline">Sign Up</a>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-400">© 2024 Eco-Village. All rights reserved.</p>
    </div>


  )
}

export default Login