import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { APP_SERVER } from "../../App";
import Service from "./Service";

const TopServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`${APP_SERVER}/services`)
      .then(res => res.json())
      .then(data => {
        setServices(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section>
      <div className="">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 pb-4 text-center text-gray-900">
          Top Services
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map(service => (
            <Service key={service._id} service={service} />
          ))}
        </div>
        <div className="text-center pt-8">
          <Link
            to="/services"
            className="inline-flex text-white bg-indigo-500 border-0 p-6 focus:outline-none hover:bg-indigo-600 rounded text-xl">
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopServices;
