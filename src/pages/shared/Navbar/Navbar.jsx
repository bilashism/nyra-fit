import React, { useContext, useState } from "react";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useRef } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const photoUrlRef = useRef();
  const { user, userLogOut, authLoading } = useContext(AuthContext);
  // console.log(user);
  // const { photoURL, displayName } = user;
  const errorPhotoUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' viewBox='0 0 500 500' style='enable-background:new 0 0 500 500;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bclip-path:url(%23SVGID_2_);%7D .st1%7Bfill:%238A8B8A;%7D .st2%7Bfill:%23FFFFFF;%7D %3C/style%3E%3Cg%3E%3Cdefs%3E%3Ccircle id='SVGID_1_' cx='250' cy='249' r='243'/%3E%3C/defs%3E%3CclipPath id='SVGID_2_'%3E%3Cuse xlink:href='%23SVGID_1_' style='overflow:visible;'/%3E%3C/clipPath%3E%3Cg id='Page-1' class='st0'%3E%3Cg id='avatar-unknown'%3E%3Crect id='Rectangle' x='-3' y='-1' class='st1' width='500' height='500'/%3E%3Ccircle id='Oval' class='st2' cx='252' cy='211' r='98'/%3E%3Ccircle id='Oval_1_' class='st2' cx='250' cy='502.9' r='185.2'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <nav className="bg-white py-2.5  sticky w-full z-20 top-0 left-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="text-center flex flex-col items-center">
          <img
            src={logo}
            className="w-16 h-16"
            width={64}
            height={64}
            alt="logo"
            title="logo"
          />
          <span className="flex gap-1 text-sm">
            <b className="text-blue-700">Nyra</b>
            <b className="text-purple-700">Fit</b>
          </span>
        </Link>
        <div className="flex md:order-2">
          {authLoading ? (
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin: auto; background: none; display: block; shape-rendering: auto;' width='78px' height='78px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Ccircle cx='50' cy='50' fill='none' stroke='%23ebbc50' stroke-width='10' r='35' stroke-dasharray='164.93361431346415 56.97787143782138'%3E%3CanimateTransform attributeName='transform' type='rotate' repeatCount='indefinite' dur='1s' values='0 50 50;360 50 50' keyTimes='0;1'%3E%3C/animateTransform%3E%3C/circle%3E%3C/svg%3E"
              alt="loading"
              className="w-10 h-10"
            />
          ) : user?.uid ? (
            <div className="group relative flex ">
              <button
                type="button"
                title={user?.displayName}
                className=" w-10 h-10 rounded">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName}
                  className="rounded-full ring-2 w-10 h-10 aspect-square object-cover"
                  width="40"
                  height="40"
                  ref={photoUrlRef}
                  loading="lazy"
                  decoding="async"
                  fetchpriority="low"
                  onError={() => (photoUrlRef.current.src = errorPhotoUrl)}
                />
              </button>
              <nav className="border bg-white invisible border-gray-800 w-40 absolute right-0 top-full transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      to="/myReviews"
                      className="block px-4 py-2 hover:bg-gray-100">
                      My reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/addService"
                      className="block px-4 py-2 hover:bg-gray-100">
                      Add service
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={userLogOut}
                      type="button"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 ">
              Login
            </Link>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div
          className={`${
            menuOpen ? "" : "hidden"
          } justify-between items-center w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
                aria-current="page">
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    ">
                About
              </a>
            </li>
            <li>
              <Link
                to="/services"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    ">
                Services
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    ">
                Contact
              </a>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0    ">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
