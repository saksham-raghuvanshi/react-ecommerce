import React from "react";
import Hero from "./Hero";
import FeatureProducts from "./FeatureProducts";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
  useTitle("Home");
  return (
    <main>
      <Hero />
      <FeatureProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};

export default Home;
