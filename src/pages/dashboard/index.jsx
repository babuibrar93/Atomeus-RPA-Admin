import Card from "../../components/dashboard/card/card";
import Chart from "../../components/dashboard/charts/chart";
import {DashboardWrapper}  from "./style";

function Dashboard() {
  return (
    <DashboardWrapper>
      <Card />
      <Chart />
    </DashboardWrapper>
  );
}

export default Dashboard;
