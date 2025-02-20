import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00BAC8]">
      {/* Glassmorphic Card */}
      <div className="w-full max-w-md bg-[#001D31] rounded-lg shadow-xl p-8">
        {/* Header */}
        <h2 className="text-2xl font-bold text-[#00BAC8] text-center mb-2">
          Welcome!
        </h2>
        <p className="text-sm text-white text-center mb-6">
          Enter your username and password to activate your wearable.
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 bg-[#00344A] text-white rounded-lg shadow-md placeholder-white focus:outline-none focus:ring-2 focus:ring-[#00BAC8] transition"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 bg-[#00344A] text-white rounded-lg shadow-md placeholder-white focus:outline-none focus:ring-2 focus:ring-[#00BAC8] transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#00BAC8] text-[#001D31] font-bold rounded-lg shadow-md hover:bg-[#008F9E] focus:outline-none focus:ring-4 focus:ring-[#007D8A] transition"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <span className="text-white/70">Or sign up with</span>
          <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition shadow">
            <FcGoogle size="23" />
          </button>
          <button className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition shadow">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
              className="h-6"
            />
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-white/70 text-center mt-8">
          Already have an account?
          <a href="#login" className="text-pink-300 hover:text-pink-500">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
