import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
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
  const value = 0.4;

  return (
    <ChartWrapper>
      <div className="containerClass">
        <div className="chartBorder">
          <div className="top-side">
            <div className="heading-one">FTE per Bot per User</div>
            <div className="dropdown-class">
              <img
                src="/assets/images/dashboard/calendar.svg"
                className="calendar-icon"
              />
              <DropdownButton id="dropdown-basic-button" title="Monthly">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>

              <img
                src="/assets/images/dashboard/arrow-down.svg"
                className="arrow-down-icon"
              />
            </div>
          </div>
          <div className="graph">
            {/* <span className="response-text">Number of users</span> */}

            <Bar options={options} data={data_FTE} />
          </div>
        </div>

        <div className="chartBorder-two">
          <div className="leftPart">
            <div className="nps">NPS For Organization</div>

            <div style={{ width: 252, height: 252, paddingTop: "60px" }}>
              <CircularProgressbar
                value={value}
                maxValue={1}
                text={`${value * 100}%`}
              />
            </div>
          </div>
          <div className="bottom-graph">
            <div className="heading-one">NPS Over Time</div>
            <div className="graph-content">
              {/* <span className="response-text">Responses</span> */}
              <Bar options={options} data={data_NPS} />
            </div>
            <div className="month-text">Month</div>
          </div>
        </div>
      </div>
    </ChartWrapper>
  );
};

export default Chart;
