import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {

    const mockUser = {
        name: "Jane Doe",
        photo: "https://via.placeholder.com/150", // Replace with actual user profile image URL
    };
    return (
        <div className="mx-auto flex md:justify-around md:items-center py-4 md:py-6 px-2 md:px-5 ">
            <div className=" text-2xl md:text-3xl font-bold py-3 ">
                <NavLink to="/">

                Eco-Friendly Adventures</NavLink>
                <div className="block lg:hidden">
                        <button className="lg:hidden focus:outline-none focus:shadow-outline" aria-label="Menu"></button>
                </div>
            </div>
            <div className=" hidden lg:block space-x-5 text-lg font-medium">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/userProfile">User Profile</NavLink>
                <NavLink to="/updateProfile">Update Profile</NavLink>
            </div>
            {/* <div className="font-semibold py-4 px-6 md:px-2 text-lg "> 
                <NavLink to="/login">Login</NavLink>
            </div> */}

<div className="flex items-center space-x-4">
                {user ? (
                    <div className="relative group">
                        {/* User Profile Photo */}
                        <img
                            src={user.photo || "/default-profile.png"} // Use default image if no photo is provided
                            alt="User"
                            className="w-10 h-10 rounded-full border border-gray-300"
                        />
                        {/* User Name Tooltip */}
                        <div className="absolute hidden group-hover:block top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-700 text-sm font-medium py-1 px-3 rounded shadow-lg">
                            {user.name}
                        </div>
                    </div>
                ) : null}

                {/* Login/Logout Button */}
                <button
                    onClick={() => (user ? logout :login(mockUser))}
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 focus:outline-none"
                >
                    <NavLink to={!user ? "/login" : "/"}>{user ? "Logout" : "Login"}</NavLink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;