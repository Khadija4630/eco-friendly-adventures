import { async } from "@firebase/util";
import React, { useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] =
    useSendPasswordResetEmail(auth);

   const handleEmailBlur = (event) => {
     setEmail(event.target.value);
   };

   const handlePasswordBlur = (event) => {
     setPassword(event.target.value);
  };
  if (user) {
    navigate(from,{replace:true});
  }
  const resetPassword = async () => {
     
    await sendPasswordResetEmail(email);
    toast("Reset password mail has been sent.");

  }
  
  const handleUserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
    toast("Login Successful!")
   
  }

  return (
    <div className="form-container">
      <div>
        <h3 className="form-title">Please Login</h3>
        <form onSubmit={handleUserSignIn}>
          <div className="form-input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              required
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              required
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />

            {loading && <p>loading...</p>}
            {error && <p style={{ color: "red" }}>Your Password is wrong!</p>}
          </div>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to The Dentist Care?{" "}
          <Link className="form-link" to="/register">
            Create an account
          </Link>
        </p>
        <p>
          Forget Password?{" "}
          <Link to="" onClick={resetPassword} className="form-link">
            Forget Password
          </Link>
        </p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;