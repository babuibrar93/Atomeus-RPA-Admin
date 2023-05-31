import faker from "faker";

export const options = {
  type: "bar",
  elements: {
    point: {
      radius: 18,
    },
    line: {
      borderColor: "green",
    },
    bar: {
      borderColor: "green",
    },
  },
  plugins: {
    legend: {
      display: true,
      usePointStyle: true,
      color: "rgb(255, 99, 132)",
      lineWidth: 10,
      labels: {
        boxHeight: 8,
        boxWidth: 8,
        borderRadius: 4,
        useBorderRadius: true,
      },
    },
  },
  layout: {
    borderRadius: "10px",
  },
  responsive: true,
  barThickness: 32,
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        color: "#99A2AC",
      },
    },
  },
  responsive: true,
  legend: { position: "top" },
  annotation: {
    annotations: [
      {
        type: "line",
        mode: "horizontal",
        scaleID: "y-axis-0",
        value: 1,
        borderColor: "red",
        borderWidth: 1,
        label: {
          enabled: false,
          content: "Test label",
        },
      },
    ],
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const labels_NPS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
];

export const data_FTE = {
  labels,
  datasets: [
    {
      label: "Users",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      backgroundColor: "#77B8D0",
      borderRadius: 10,
    },
    {
      label: "Bots",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      backgroundColor: "#3287A7",
      borderRadius: 10,
    },
  ],
};

export const data_NPS = {
  labels:labels_NPS,

  datasets: [
    {
      label: "Promoters",
      data: labels_NPS.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#77B8D0",
      borderRadius: 10,
    },
    {
      label: "Passive",
      data: labels_NPS.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#3287A7",
      borderRadius: 10,
    },
    {
      label: "Detractors",
      data: labels_NPS.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#B7EBFE",
      borderRadius: 10,
    },
  ],
};
