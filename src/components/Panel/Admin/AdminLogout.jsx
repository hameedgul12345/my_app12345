import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const AdminLogout = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="w-14 h-14 bg-gray-900 text-white flex items-center justify-center text-xl font-bold rounded-full shadow-md">
            LV
          </div>
          <h1 className="text-2xl font-bold mt-4">LocalVerse</h1>
          <p className="text-sm text-gray-500">Admin Portal</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="admin@localverse.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                defaultValue="********"
                className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign in to Admin Portal
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-6">
          Secure admin access for LocalVerse platform
        </p>
      </div>
    </div>
  );
};

export default AdminLogout;
