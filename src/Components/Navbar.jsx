import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { authContext } from './AuthProvider';
import { useTheme } from '../Hooks/useTheme';
import avatarImg from '../assets/Img/placeholder.jpg'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import logo from '../assets/Logo/icons8-movie-94.png'
const Navbar = () => {
  const {user,singOutUser}=useContext(authContext)
  const { changeTheme,mode } =useTheme()
    const links=<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/allmovies'>All Movies</NavLink></li>
    <li><NavLink to='/addmovie'>Add Movies</NavLink></li>
    <li><NavLink to='/profile'>My Profile</NavLink></li>
    <li><NavLink to='/favorite'>My Favorites</NavLink></li>
    <li><NavLink to='/about'>About</NavLink></li>
    
    </>

const handleSingOut=()=>{
  singOutUser();
  then((result)=>{
    
  })
  .catch(error=>{
   
    
  })
} 
// #1E2A47
    return (
        <div className="navbar bg-[#1E2A47] sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              // tabIndex={0}
              // className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              tabIndex={0}
              className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${
                mode === "dark" ? "bg-[#121212] text-white" : "bg-base-100"
              }`}>
              {links}
            </ul>
          </div>
          <div className='flex justify-center items-center'>
            <img className='w-12' src={logo} alt="" />
         
          <h3 className="text-xl font-bold text-white text-center">SS-Movies</h3>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div> */}
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
  {mode === "dark" ? (
    <MdOutlineLightMode />
  ) : (
    <MdDarkMode />
  )}
</button>


         {user ? (
  <div className="flex items-center gap-3">
    <img
      src={user.photoURL}
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