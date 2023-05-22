import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { Container } from "react-bootstrap";
import { ChartWrapper } from "./style";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart - Stacked",
    // },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "July", "August", "September", "October", "November", "December"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#77B8D0",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#3287A7",
    },
  ],
};

const Chart = () => {
  return <ChartWrapper>
    <Container>
      <div className="chartBorder">
        <div className="heading-one">FTE per Bot per User</div>
        <Bar options={options} data={data} />
      </div>
    </Container>
  </ChartWrapper>;
};

export default Chart;
