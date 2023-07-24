import React from "react";

const FilterBar = () => {
  return (
    <section className="filter">
      <div
        id="drawer-disable-body-scrolling"
        className={`fixed z-40 h-screen p-5 overflow-y-auto bg-white w-72 dark:bg-gray-800 transition-transhtmlForm left-0 top-0 transhtmlForm-none`}
        tabIndex="-1"
      >
        <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
          Filter
        </h5>
      </div>
    </section>
  );
};

export default FilterBar;
