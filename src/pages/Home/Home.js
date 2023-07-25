import React from "react";
import Hero from "./Hero";
import FeatureProducts from "./FeatureProducts";
import Faq from "./Faq";
import Testimonials from "./Testimonials";

const Home = () => {
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
