import React from "react";
import hero from "../../asset/images/hero.avif";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-cente">
      <div className="text my-5">
        <h1 className="text-5xl fi=ont-bold">The Ultimate eBook Store</h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          FrontendGyaan is the most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link
          to="/products"
          type="button"
          className="bg-blue-700 hover:bg-blue-800 focus:ring-4 p-2 text-white my-2 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <div className="visual my-5 lg:max-w-xl">
        <img className="rounded-lg max-h-full" src={hero} alt="frontendgyaan" />
      </div>
    </section>
  );
};

export default Hero;
