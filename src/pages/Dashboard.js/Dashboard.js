import React, { useEffect, useState } from "react";
import DashboardCard from "./Components/DashboardCard";
import DashboardEmpty from "./Components/DashboardEmpty";
import useTitle from "../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([]);

  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    async function fetchOrder() {
      const response = await fetch(
        `http://localhost:8000/660/orders?user.id=${cbid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data);
    }
    fetchOrder();
  }, [cbid, token]);

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
