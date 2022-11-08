import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, description, imgFull, price } = service;
  return (
    <div className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-md ">
      <div className="max-w-md h-52">
        <img
          className="rounded-t-lg object-cover h-full"
          width={470}
          height={294}
          src={imgFull}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-start justify-between flex-grow gap-4 p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {name}
        </h3>
        <p className="mb-3 font-normal text-gray-700">
          {description.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
        <div className="flex flex-wrap gap-4 justify-between self-stretch">
          <p className="">Price: ${price}</p>
          <Link
            to={`/service/${_id}`}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
