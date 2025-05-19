
import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { authContext } from './AuthProvider';
import { useTheme } from '../Hooks/useTheme';
import avatarImg from '../assets/Img/placeholder.jpg';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import logo from '../assets/Logo/icons8-movie-94.png';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const { user, singOutUser } = useContext(authContext);
  const { changeTheme, mode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleSingOut = () => {
    singOutUser()
      .then(() => {})
      .catch(error => {});
  };

  const links = (
    <>
      <li><NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink></li>
      <li><NavLink to='/allmovies' onClick={() => setIsOpen(false)}>All Movies</NavLink></li>
      <li><NavLink to='/addmovie' onClick={() => setIsOpen(false)}>Add Movies</NavLink></li>
      <li><NavLink to='/profile' onClick={() => setIsOpen(false)}>Dashboard</NavLink></li>
      <li><NavLink to='/favorite' onClick={() => setIsOpen(false)}>My Favorites</NavLink></li>
      <li><NavLink to='/about' onClick={() => setIsOpen(false)}>About</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-[#1E2A47] sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
           
             <AiOutlineMenu className="h-5 w-5 text-white" />
            
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow transition-all duration-200 ${
              isOpen ? 'block' : 'hidden'
            } ${mode === "dark" ? "bg-[#121212] text-white" : "bg-base-100"}`}
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-12" src={logo} alt="Logo" />
          {/* <h3 className="text-xl font-bold text-white text-center">SS-Movie Portal</h3> */}
          <h3 className="text-lg sm:text-xl font-bold text-white text-center">SS-Movie Portal</h3>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal px-1 ${mode === "light" ? "text-white" : ""}`}>
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <button
          onClick={changeTheme}
          aria-label="Toggle theme"
          className={`text-xl p-2 transition-colors duration-200 ${
            mode === "dark" ? "text-white hover:text-gray-300" : "text-white hover:text-black"
          }`}
        >
          {mode === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
        </button>

        {user ? (
          <div className="flex items-center gap-3">
            <img
              src={user.photoURL || avatarImg}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-[#1E2A47] hover:scale-105 transition-transform duration-200"
              title={user.displayName || 'User'}
            />
            <button
              onClick={handleSingOut}
              className="px-4 py-2 rounded-lg bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white transition-colors duration-200 shadow-md"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white transition-colors duration-200 shadow-md">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="px-4 py-2 rounded-lg bg-white text-[#1E2A47] hover:bg-[#1E2A47] hover:text-white transition-colors duration-200 shadow-md">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
