import React from "react";
import Admin from "/asset/images/admin";

const Testimonials = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">
        About FrontendGyaan
      </h1>
      <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p className="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img className="w-9 h-9 rounded-full" src={Admin} alt="user" />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Saksham Raghuvanshi</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Frontend Developer
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p className="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
              alt="user"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Saksham Raghuvanshi</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Frontend Developer
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p className="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://instagram.fluh1-1.fna.fbcdn.net/v/t51.2885-19/327691653_5803924299721124_3660100612289096249_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fluh1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=yMnjwmmNGpQAX9hMUvY&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBuMkUWYH9fEQEV43Oqexmaz478vxYG-F4k99rK0_yhCA&oe=64BFA577&_nc_sid=8b3546"
              alt="user"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Saksham Raghuvanshi</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Frontend Developer
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Very easy this was to integrate
            </h3>
            <p className="my-4 font-light">
              If you care for your time, I hands down would go with this."
            </p>
          </blockquote>
          <figcaption className="flex justify-center items-center space-x-3">
            <img
              className="w-9 h-9 rounded-full"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50"
              alt="user"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Saksham Raghuvanshi</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Frontend Developer
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
