import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AutrhContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signout successful.");
      })
      .catch((err) => console.log(err));
  };

  const linkActive = ({ isActive }) =>
    isActive
      ? "relative bg-gradient-to-br from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-gradient-to-br after:from-[#632ee3] after:to-[#9f62f2] after:transition-all after:duration-300 after:w-full"
      : "";

  const link = (
    <>
      <li className=" mx-2">
        <NavLink className={linkActive} to={"/"}>
          Home
        </NavLink>
      </li>
      <li className=" mx-2">
        <NavLink className={linkActive} to={"/login"}>
          Login
        </NavLink>
      </li>
      <li className=" mx-2">
        <NavLink className={linkActive} to={"/register"}>
          Register
        </NavLink>
      </li>
      <li className=" mx-2">
        <NavLink className={linkActive} to={"/dashboard"}>
          Dashboard
        </NavLink>
      </li>
      {user && (
        <>
          <li className=" mx-2">
            <NavLink className={linkActive} to={"/orders"}>
              Orders
            </NavLink>
          </li>
          <li className=" mx-2">
            <NavLink className={linkActive} to={"/profile"}>
              Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <a onClick={handleSignOut} className="btn">
              Sign Out
            </a>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
