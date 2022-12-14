import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Service from "../../components/Service";
import LoadingCircle from "../../components/ui/LoadingCircle";
const APP_SERVER = import.meta.env.VITE_APP_SERVER;

const TopServices = () => {
  const [services, setServices] = useState([]);
  const [servicesLoading, setServicesLoading] = useState(true);
  const itemsLimit = 3;

  useEffect(() => {
    fetch(`${APP_SERVER}/services?itemsLimit=${itemsLimit}`)
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setServicesLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section>
      <div className="">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 pb-4 text-center text-gray-900">
          Top Services
        </h2>

        {servicesLoading ? (
          <LoadingCircle />
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map(service => (
              <Service key={service._id} service={service} />
            ))}
          </div>
        )}
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
