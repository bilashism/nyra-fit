import React from "react";
import useTitle from "../../hooks/useTitle";
import Header from "./Header";
import Statistics from "./Statistics";
import TopServices from "./TopServices";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <Statistics />
      <TopServices />
    </>
  );
};

export default Home;
