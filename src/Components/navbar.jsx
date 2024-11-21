import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {UserContext } from "../context/UserContext";


const Navbar = () => {;
  const { user, login, logout } = useContext(UserContext) ;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      logout(); t
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between py-4 md:py-6 px-6 text-blue-400 ">
      <div className="text-2xl lg:text-3xl font-bold lg:py-3 lg:px-3 flex flex-row-reverse">
        <Link className="pl-6 md:pl-2 md:pr-2" to="/">
          Eco-Friendly Adventures
        </Link>
        <div className="block md:hidden">
          <label className=" btn-circle swap swap-rotate">
            <input
              type="checkbox"
              className="hidden"
              onChange={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            <svg
              className={`swap-off fill-current ${
                isDropdownOpen ? "hidden" : "block"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg
              className={`swap-on fill-current ${
                isDropdownOpen ? "block" : "hidden"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
      <div className="hidden md:flex space-x-4 text-lg font-medium text-gray-400 py-2 px-4 hover:text-green-600">
        <NavLink to="/" className="lg:pr-4">
          Home
        </NavLink>
        <NavLink to="/userProfile" className="lg:pr-4">
          User Profile
        </NavLink>
        <NavLink to="/updateProfile" className="lg:pr-4">
          Update Profile
        </NavLink>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-20 left-0 bg-white shadow-lg z-10 md:hidden w-full p-4">
          <NavLink
            to="/"
            className="block text-lg text-gray-800 hover:bg-gray-200 py-2"
            onClick={() => setIsDropdownOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/userProfile"
            className="block text-lg text-gray-800 hover:bg-gray-200 py-2"
            onClick={() => setIsDropdownOpen(false)}
          >
            User Profile
          </NavLink>
          <NavLink
            to="/updateProfile"
            className="block text-lg text-gray-800 hover:bg-gray-200 py-2"
            onClick={() => setIsDropdownOpen(false)}
          >
            Update Profile
          </NavLink>
        </div>
      )}

      <div className="flex items-center space-x-4">
        {user ? (
          <div className="relative group">
            <img
              src={user.photo || "/default-profile.png"}
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
            <div className="absolute hidden group-hover:block top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-700 text-sm font-medium py-1 px-3 rounded shadow-lg">
              {user.name}
            </div>
          </div>
        ) : null}

        <button
          onClick={handleAuthClick}
          className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-xl hover:bg-green-300 hover:text-black focus:outline-none"
        >
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
