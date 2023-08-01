import React, { useEffect, useState } from "react";
import DashboardCard from "./Components/DashboardCard";
import DashboardEmpty from "./Components/DashboardEmpty";
import useTitle from "../../Hooks/useTitle";
import { getUserOrders } from "../../services/dataServices";
import { toast } from "react-toastify";

const Dashboard = () => {
  useTitle("Dashboard");
  const [orders, setOrders] = useState([]);

  const cbid = JSON.parse(sessionStorage.getItem("cbid"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  useEffect(() => {
    async function fetchOrder() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
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
