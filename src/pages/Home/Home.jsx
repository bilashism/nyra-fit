import React from "react";
import useTitle from "../../hooks/useTitle";
import Header from "./Header";
import Statistics from "./Statistics";

const Home = () => {
  useTitle("Nyra Fit - Your personal fitness trainer!");
  return (
    <>
      <Header />
      <Statistics />
    </>
  );
};

export default Home;
