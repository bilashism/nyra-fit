import React from "react";
import useTitle from "../../hooks/useTitle";
import Contact from "./Contact";
import DiverseProgrammes from "./DiverseProgrammes";
import Header from "./Header";
import MyTeam from "./MyTeam";
import Newsletter from "./Newsletter";
import Statistics from "./Statistics";
import TopServices from "./TopServices";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Header />
      <Statistics />
      <TopServices />
      <DiverseProgrammes />
      <MyTeam />
      <Newsletter />
      <Contact />
    </>
  );
};

export default Home;
