import React from "react";
import useTitle from "../../hooks/useTitle";
import Service from "../../components/Service";
import { useQuery } from "@tanstack/react-query";
import LoadingCircle from "../../components/ui/LoadingCircle";

const Services = () => {
  useTitle("Services");

  const { data: services = [], isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch(`${import.meta.env.VITE_APP_SERVER}/services`)
        .then(res => res.json())
        .then(data => data)
        .catch(err => console.error(err))
  });

  return (
    <main>
      <div className="">
        <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 py-4 text-center text-gray-900">
          My Services
        </h2>
        {isLoading && (
          <div className="mx-auto">
            <LoadingCircle />
          </div>
        )}
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
