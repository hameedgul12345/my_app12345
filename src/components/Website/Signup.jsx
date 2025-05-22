import React, { useState } from 'react'

function Signup() {
   const [role, setRole] = useState('customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle sign-up logic here (API call or Firebase etc.)
    alert(`Signing up as ${role}\nName: ${name}\nEmail: ${email}`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
     

      <div className="bg-white shadow-md rounded-lg px-10 py-8 w-full max-w-md">
      

        {/* Sign Up Header */}
        <h2 className="text-center text-xl font-semibold mb-6">Create a New Account</h2>

        {/* Role Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Sign Up As</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Sign Up Button */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md"
          onClick={handleSignUp}
        >
          Sign Up
        </button>

        {/* Sign In Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?
          <a href="#" className="text-green-500 font-medium ml-1 hover:underline">Sign In</a>
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-gray-400">© 2024 Eco-Village. All rights reserved.</p>
    </div>
  );
}

export default Signup

