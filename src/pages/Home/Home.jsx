import React from "react";
import useTitle from "../../hooks/useTitle";
import Header from "./Header";

const Home = () => {
  useTitle("Nyra Fit - Your personal fitness trainer!");
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
