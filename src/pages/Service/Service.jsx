import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import TestimonialsSection from "./TestimonialsSection";
import ServiceSection from "./ServiceSection";

const Service = () => {
  const service = useLoaderData();

  const { _id, name } = service;
  useTitle(name);
  return (
    <section>
      <div className="grid lg:grid-cols-12 gap-8 my-24">
        <div className="lg:col-span-7">
          <ServiceSection />
        </div>

        <aside className="lg:col-span-5">
          <h2 className="sm:text-3xl text-2xl font-medium title-font mb-8 text-center text-gray-900">
            <span className="text-purple-600">{name}</span> Reviews
          </h2>
          <TestimonialsSection serviceId={_id} />
        </aside>
      </div>
    </section>
  );
};

export default Service;
