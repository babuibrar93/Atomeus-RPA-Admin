import { styled } from "styled-components";

export const ChartWrapper = styled.div`
  padding: 34px;
  float: right;
  display: grid;
  grid-template-columns: 1120px calc(100% - 1120px);
  
  .containerClass {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .chartBorder {
    border: 1px solid #99a2ac;
    padding: 50px;
    border-radius: 8px;
  }
  
  .heading-one {
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #f4f6f8;
  }

  .chartBorder-two {
    display: flex;
    flex: direction: row;
    justify-content: space-between;
    border: 1px solid #99a2ac;
    padding: 50px;
    align-items: center;
    border-radius: 8px;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    // stroke: #2C2B41;
    // border: 28px solid red !important;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: #45E8E1 !important;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: #F4F6F8;
  }

  .bottom-graph {
    width: 65%;
  }

  .response-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #99A2AC;
    transform: rotate(-90deg);
  }

  .graph-content {
    display: flex;
    justify-content: end;
  }

  .month-text {
    margin-top: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #99A2AC;
  }
`;
