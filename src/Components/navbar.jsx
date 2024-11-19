import { NavLink } from "react-router-dom";
import { useContext ,useState} from "react";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user, login, logout } = useContext(UserContext);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mockUser = {
    name: "Jane Doe",
    photo: "https://via.placeholder.com/150", // Replace with actual user profile image URL
  };
  return (
    <div className="flex md:justify-around  py-4 md:py-6 px-1 text-blue-400 hover:text-black">
      <div className=" text-2xl lg:text-3xl font-bold lg:py-3 lg:px-3 flex flex-row-reverse  ">
        <NavLink className={"pl-6 md:pl-2 md:pr-2"} to="/">Eco-Friendly Adventures</NavLink>
                <div className="block md:hidden">
                    <label className="btn btn-circle swap swap-rotate">
                        <input type="checkbox"   className="hidden "  onChange={() => setIsDropdownOpen(!isDropdownOpen)} />
                        <svg
                            className={`swap-off fill-current ${isDropdownOpen ? 'hidden' : 'block'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                        >
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>
                        <svg
                            className={`swap-on fill-current ${isDropdownOpen ? 'block' : 'hidden'}`}
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
      <div className=" hidden md:block text-lg font-medium text-gray-400 py-2 px-4 hover:text-green-600 items-center ">
        <NavLink className={"lg:pr-4 md:pr-2 py-4"} to="/">Home</NavLink>
        <NavLink className={"lg:pr-4 md:pr-2 py-4"}  to="/userProfile">User</NavLink>
        <NavLink className={"lg:pr-4 py-4"}  to="/updateProfile">Update-profile</NavLink>
      </div>
      

{isDropdownOpen && (
                <div className="absolute top-28 left-0 bg-white shadow-lg z-10 md:hidden">
                    <NavLink to="/" className="block lg:px-2 lg:py-2 text-lg  md:text-medium hover:bg-gray-200">Home</NavLink>
                    <NavLink to="/userProfile" className="block lg:px-2 lg:py-2 text-lg hover:bg-gray-200">User  Profile</NavLink>
                    <NavLink to="/updateProfile" className="block lg:px-2 lg:py-2 text-lg hover:bg-gray-200">Update Profile</NavLink>
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
          onClick={() => (user ? logout : login(mockUser))}
          className="bg-blue-500 text-white font-semibold rounded-xl hover:bg-green-300 hover:text-black focus:outline-none ml-2 md:px-6 md:py-4"
        >
          <NavLink to={!user ? "/login" : "/"}>
            {user ? "Logout" : "Login"}
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
