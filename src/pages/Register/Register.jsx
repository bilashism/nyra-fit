import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import registrationImg from "../../images/full-length-portrait.png";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
  useTitle("Register");
  const nameRef = useRef();
  const emailRef = useRef();
  const photoUrlRef = useRef();
  const passwordRef = useRef();
  const [feedback, setFeedback] = useState(`Your privacy is always protected.`);

  // handle User Login form
  const handleUserRegistration = ev => {
    ev.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <div>
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 py-8 text-center">
        Register
      </h2>

      <div className="grid lg:grid-cols-2 lg:items-center gap-16">
        {/* image section  */}
        <figure className="">
          <picture className="">
            <source srcSet={registrationImg} />
            <img
              src={registrationImg}
              alt="Login"
              className="lg:rotate-6 h-80 drop-shadow-lg object-contain lg:h-auto lg:object-cover mx-auto"
              loading="lazy"
              width="690"
              height="864"
              decoding="async"
              fetchpriority="low"
            />
          </picture>
        </figure>

        <div className="flex flex-col gap-8 ">
          <form onSubmit={handleUserRegistration}>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                autoComplete="username"
                ref={nameRef}
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                autoComplete="username"
                ref={emailRef}
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="url"
                name="photoUrl"
                id="photoUrl"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                ref={photoUrlRef}
              />
              <label
                htmlFor="photoUrl"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Photo URL
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                autoComplete="current-password"
                ref={passwordRef}
                minLength="6"
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your password
              </label>
            </div>

            <div className="pb-4 text-center text-slate-600">
              <p className="">{feedback}</p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   ">
                Register
              </button>
            </div>
          </form>
          <div className="text-center">
            <hr className="mb-8 w-1/2 mx-auto border-purple-600" />
            <div className="">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative inline-flex items-center gap-4 px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  <FaGoogle className="text-blue-600 group-hover:text-white transition" />{" "}
                  <span className="">Sign up with Google</span>
                </span>
              </button>
            </div>
            <p className="">or</p>
            <p className="">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-purple-600 font-bold hover:underline">
                Login Now
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
