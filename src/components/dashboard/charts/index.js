import faker from "faker";

export const options = {
  type: "bar",
  plugins: {
    // title: {
    //   display: true,
    //   text: "Chart.js Bar Chart - Stacked",
    // },
  },
  layout: {
    borderRadius: "10px"
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
      borderRadius: "10px",
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
