import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Services = () => {
  useTitle("Services");

  const services = useLoaderData();
  console.log(services);

  return (
    <main>
      <h2 className="">Services</h2>
      <div className=""></div>
    </main>
  );
};

export default Services;
