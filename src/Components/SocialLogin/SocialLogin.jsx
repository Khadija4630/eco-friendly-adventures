import React from "react";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = ({ onGoogleLogin }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-center mb-4">Login with Social Account</h2>
      <button
        onClick={onGoogleLogin}
        className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
      >
        <FaGoogle className="mr-2" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
