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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-lg px-10 py-8 w-full max-w-2xl">
        {/* Sign Up Header */}
        <h2 className="text-center text-2xl font-semibold mb-6">Create a New Account</h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full-width: Sign Up As */}
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium mb-1">Sign Up As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300"
            >
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          {/* Half-width: Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300"
            />
          </div>

          {/* Half-width: Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300"
            />
          </div>

          {/* Half-width: Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300"
            />
          </div>

          {/* Half-width: Confirm Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md border-gray-300"
            />
          </div>

          {/* Full-width: Button */}
          <div className="col-span-1 md:col-span-2">
            <button
              type="button"
              onClick={handleSignUp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md mt-2"
            >
              Sign Up
            </button>
          </div>

          {/* Full-width: Sign In Link */}
          <div className="col-span-1 md:col-span-2 text-center text-sm mt-2">
            Already have an account?
            <a href="#" className="text-green-500 font-medium ml-1 hover:underline">
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup

