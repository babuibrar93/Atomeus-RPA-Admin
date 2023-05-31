import { styled } from "styled-components";

export const ChartWrapper = styled.div`
  padding: 0 32px 32px 32px;
  .containerClass {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .chartBorder {
    border: 1px solid #99a2ac;
    padding: 41px 25px;
    border-radius: 8px;
    height: 100%;
    background: #212036;
    .graph {
    width: 100%;
      /* display: grid;
grid-template-columns: 10% calc(100% - 10%); */
      canvas {
        width: 100%;
        height: 410px;
      }
    }
  }

  .top-side {
    display: flex;
    justify-content: space-between;
  }

  .btn-primary {
    border: 1px solid #99a2ac;
    border-radius: 8px;
    background: #212036;
    width: 141px;
  }

  .dropdown-class {
    display: flex;
    position: relative;
  }

  .calendar-icon {
    position: absolute;
    z-index: 1;
    width: 16px;
    height: 16px;
    top: 11px;
    left: 11px;
  }

  .btn-primary:hover {
    border: 1px solid #99a2ac;
    border-radius: 8px;
    background: #212036;
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
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #99a2ac;
    padding: 32px;
    gap: 32px;
    border-radius: 8px;
    background: #212036;

    .leftPart {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .nps {
        font-size: 18px;
        line-height: 120%;
        color: #f4f6f8;
      }
    }
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #2c2b41;
    border: 28px solid #2c2b41;
  }

  .CircularProgressbar .CircularProgressbar-path {
    stroke: #45e8e1 !important;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: #f4f6f8;
  }

  .bottom-graph {
    width: 72%;
    padding: 0 120px;
  }

  .response-text {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #99a2ac;
    transform: rotate(-90deg);
  }

  .graph-content {
    display: flex;
    justify-content: center;
  }

  .month-text {
    margin-top: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: #99a2ac;
  }

  .arrow-down-icon {
    position: absolute;
    z-index: 1;
    width: 16px;
    height: 16px;
    top: 11px;
    right: 11px;
  }

  .dropdown-toggle::after {
    display: none;
  }

  @media (max-width: 1200px) {
    .progressBar {
      padding-top: 0 !important;
    }
    .bottom-graph {
      width: 80% !important;
      padding: 0 0 !important;
    }
  }
  @media (max-width: 900px) {
    .chartBorder-two {
      display: flex;
      flex-direction: column !important;
      justify-content: space-between;
      border: 1px solid #99a2ac;
      padding: 32px;
      gap: 42px;
      border-radius: 8px;
      background: #212036;
      align-items: center;
    }

    .bottom-graph {
      width: 100% !important;
      padding: 0 0 !important;
    }

    .graph-content {
      canvas {
        width: 100% !important;
      }
    }
  }
`;
