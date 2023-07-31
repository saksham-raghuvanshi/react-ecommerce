import React from "react";
import DashboardCard from "./Components/DashboardCard";
import DashboardEmpty from "./Components/DashboardEmpty";
import useTitle from "../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const orders = [{}, {}];
  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>
      <section>
        {orders.length &&
          orders.map((order) => (
            <DashboardCard key={order.key} order={order} />
          ))}
      </section>
      <section>{!orders.length && <DashboardEmpty />}</section>
    </main>
  );
};

export default Dashboard;
