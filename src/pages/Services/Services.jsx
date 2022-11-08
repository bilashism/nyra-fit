import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Service from "../../components/Service";

const Services = () => {
  useTitle("Services");

  const services = useLoaderData();

  return (
    <main>
      <div className="">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 py-4 text-center text-gray-900">
          My Services
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map(service => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
