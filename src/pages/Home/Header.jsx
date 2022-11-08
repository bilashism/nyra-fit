import React from "react";
import headerImg from "../../images/photo-1.png";
const Header = () => {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={headerImg}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            BUILD A PERFECT
            <br class="hidden lg:inline-block" />
            HEALTH GROWTH
            <br class="hidden lg:inline-block" />
            <span className="text-xs">with</span> {""}
            <i className="italic ">
              <b className="font-bold text-purple-600">Nyra</b>
            </i>
          </h1>
          <p class="mb-8 leading-relaxed">
            “I am the creator of a Training Programs, personal coach and a
            writer. ” Being fit and living healthy is what I know and love.
            Fitness has always been a part of my life. I grew up in a fit
            family—my dad ran marathons, we had a home gym, and my parents
            always had gym memberships.
          </p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Join now
            </button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Services
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
