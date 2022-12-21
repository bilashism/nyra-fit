import React from "react";
import useTitle from "../../hooks/useTitle";
import Service from "../../components/Service";
import { useQuery } from "@tanstack/react-query";
import LoadingCircle from "../../components/ui/LoadingCircle";
import { useState } from "react";

const Services = () => {
  useTitle("Services");
  const [page, setPage] = useState(0);
  const itemsPerPage = 6;
  const { data: { count = 0, result: services = [] } = {}, isLoading } =
    useQuery({
      queryKey: ["services", page, itemsPerPage],
      queryFn: () =>
        fetch(
          `${
            import.meta.env.VITE_APP_SERVER
          }/services?page=${page}&itemsPerPage=${itemsPerPage}`
        )
          .then(res => res.json())
          .then(data => data)
          .catch(err => console.error(err))
    });
  const pageNumber = Math.ceil(count / itemsPerPage);

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
        <div className="flex flex-wrap gap-4 mt-12 justify-center">
          {[...Array(pageNumber).keys()].map(num => (
            <button
              key={`page-${num}`}
              aria-label={`load page no ${num + 1}`}
              type="button"
              className={`${
                page === num ? "bg-green-300" : "bg-slate-300"
              } p-2 rounded font-bold w-10 h-10 aspect-square`}
              onClick={() => setPage(num)}>
              {num + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
