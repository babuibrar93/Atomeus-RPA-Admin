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
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  responsive: true,
  legend: { position: "top" },
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

export const data_FTE = {
  labels,
  datasets: [
    {
      label: "Users",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "#77B8D0",
      parsing: {
        yAxisKey: "cogs",
      },
    },
    {
      label: "Bots",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "#3287A7",
    },
  ],
};

export const data_NPS = {
  labels,

  datasets: [
    {
      label: "Promoters",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "#77B8D0",
    },
    {
      label: "Passive",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "#3287A7",
    },
    {
      label: "Detractors",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      backgroundColor: "#B7EBFE",
    },
  ],
};
