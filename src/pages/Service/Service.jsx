import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ReviewSection from "./ReviewSection";
import ServiceSection from "./ServiceSection";

const Service = () => {
  const service = useLoaderData();

  const { name } = service;
  useTitle(name);
  return (
    <section>
      <div className="grid lg:grid-cols-12 gap-8 my-24">
        <div className="lg:col-span-7">
          <ServiceSection />
        </div>

        <aside className="lg:col-span-5">
          <ReviewSection />
        </aside>
      </div>
    </section>
  );
};

export default Service;
