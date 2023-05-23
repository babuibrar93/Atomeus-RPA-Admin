import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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
import { ChartWrapper } from "./style";
import { data_FTE, data_NPS, options } from "./index";
import { Container } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const value = 0.40;

  return (
    <ChartWrapper>
<Container>

      <div className="containerClass">
        <div className="chartBorder">
          <div className="heading-one">FTE per Bot per User</div>
          <div className="graph">

          <span className="response-text">Number of users</span>

          <Bar options={options} data={data_FTE} />
          </div>
        </div>

        <div className="chartBorder-two">
          <div style={{ width: 252, height: 252 }}>
            <CircularProgressbar
              value={value}
              maxValue={1}
              text={`${value * 100}%`}
            />
          </div>
          <div className="bottom-graph">
            <div className="heading-one">NPS Over Time</div>
            <div className="graph-content">
            <span className="response-text">Responses</span>
              <Bar options={options} data={data_NPS} />
              </div>
            <div className="month-text">Month</div>
          </div>
        </div>
      </div>
</Container>
    </ChartWrapper>
  );
};

export default Chart;
