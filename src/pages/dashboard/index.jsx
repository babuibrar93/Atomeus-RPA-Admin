import Card from "../../components/dashboard/card/card";
import Chart from "../../components/dashboard/charts/chart";
import {DashboardWrapper}  from "./style";

function Dashboard() {
  return (
    <DashboardWrapper>
      <div>
        {/* sidebar */}
      </div>
      <div>
      <Card />
      <Chart />

      </div>
    </DashboardWrapper>
  );
}

export default Dashboard;
