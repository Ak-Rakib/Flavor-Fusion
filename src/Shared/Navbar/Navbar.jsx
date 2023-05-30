import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 fixed z-20 max-w-6xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#7FD8BE]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/menu">
                  <a>Menu</a>
                </Link>
              </li>
              <li>
                <Link to="/shop">
                  <a>Shop</a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-4xl text-[#7FD8BE]">F</span>lavor-Fusion
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <a>Menu</a>
              </Link>
            </li>
            <li>
                <Link to="/shop">
                  <a>Shop</a>
                </Link>
              </li>
            <li>
                <Link to="/login">
                  <a>Login</a>
                </Link>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#7FD8BE] border-0">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
