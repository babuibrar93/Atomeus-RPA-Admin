import { useEffect, useState } from "react";
import Card from "../../components/dashboard/card/card";
import Chart from "../../components/dashboard/charts/chart";
import { DashboardWrapper } from "./style";
import Sidebar from "../../common/sidebar/sidebar";
import Navbar from "../../common/navbar/navbar";

function Dashboard() {
  const [layout, setLayout] = useState("");

  const handburger = (arg) => {
    setLayout(arg);
  };

  return (
    <div className={layout ? "mainWrapper collapsed-layout" : "mainWrapper"}>
      <DashboardWrapper>
        <div></div>
        <div>
          <Navbar />
          <Sidebar action={handburger} />
          <Card />
          <Chart />
        </div>
      </DashboardWrapper>
    </div>
  );
}

export default Dashboard;
