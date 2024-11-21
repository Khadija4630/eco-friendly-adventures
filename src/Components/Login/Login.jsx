import React, { useState } from "react";
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, db } from "../../firebase_init";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const provider = new GoogleAuthProvider();

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
    if (!error) {
      toast.success("Login Successful!");
      navigate(from, { replace: true });
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
    await sendPasswordResetEmail(email);
    toast.success("Password reset email sent!");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      toast.success(`Welcome ${result.user.displayName}!`);
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Google Sign-In Error:", err.message);
      toast.error("Google login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-black">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error.message}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-black block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" text-gray-800 w-full border rounded-md px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 text-black " htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className=" text-gray-800 w-full border rounded-md px-4 py-2"
            />
          </div>
          <div className="text-right">
            <button
              type="button"
              onClick={handleResetPassword}
              className=" bg-blue-500 text-sm hover:underline "
            >
              Forgot Password?
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          > 
            {loading ? "Loading..." : "Login"}
          </button>
        </form>
        <div className="mt-4 flex justify-around items-center ">
          <p className="text-blue-700 ">
            New to Eco-Adventures?{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center bg-green-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;

