import React from "react";
import { IoMdAnalytics } from "react-icons/io";
import { GiHealing } from "react-icons/gi";
import { TbRotate360 } from "react-icons/tb";
import { Link } from "react-router-dom";

const DiverseProgrammes = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            A diverse suite of health & wellness programmes
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Partnering with Pavelka on your corporate wellness programme gives
            your people a wide selection of tools that can improve their working
            experience and their life.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gradient-to-tr from-blue-300 to-indigo-200">
              <TbRotate360 className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-xl text-gray-900">
                A 360° Strategy of Wellbeing for your people
              </h2>
              <p className="leading-relaxed"></p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gradient-to-tr from-blue-300 to-indigo-200">
              <GiHealing className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-xl text-gray-900">
                An inclusive and universal ‘How To’ for health
              </h2>
              <p className="leading-relaxed"></p>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg bg-gradient-to-tr from-blue-300 to-indigo-200">
              <IoMdAnalytics className="text-indigo-500 w-12 h-12 mb-3 inline-block" />
              <h2 className="title-font font-medium text-xl text-gray-900">
                A comprehensive system of impact tracking
              </h2>
              <p className="leading-relaxed"></p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8">
          <Link
            to="/services"
            className="inline-flex text-white bg-blue-500 border-0 py-4 px-8 focus:outline-none hover:bg-indigo-600 rounded text-xl">
            Visit programmes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DiverseProgrammes;
