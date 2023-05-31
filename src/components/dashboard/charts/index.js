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
      title: {
        display: true,
        text: 'Number of users'
      }
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

export const options_NPS = {
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
      title: {
        display: true,
        text: 'Month'
      }
    },
    y: {
      stacked: true,
      grid: {
        color: "#99A2AC",
      },
      title: {
        display: true,
        text: 'Responses'
      }
    },
    y2: {
      stacked: true,
      position: "right",
      ticks: {
        min: 20,
        max: 18,
        beginAtZero: false,
        // stepSize: 2, /* total/4 shows 0, 25%, 50%, 75%, 100% */
        callback: function (value) {
          return ((value / this.max) * 100).toFixed(0) + "%"; // convert it to percentage
        },
        // format: {
        //     style: 'percent'
        // }
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

const labels_NPS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export const data_FTE = {
  labels,
  datasets: [
    {
      label: "Users",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      backgroundColor: "#77B8D0",
      borderRadius: 7,
    },
    {
      label: "Bots",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800 })),
      backgroundColor: "#3287A7",
      borderRadius: 7,
    },
  ],
};

export const data_NPS = {
  labels: labels_NPS,

  datasets: [
    {
      label: "Promoters",
      data: labels_NPS.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#77B8D0",
      borderRadius: 7,
    },
    {
      label: "Passive",
      data: labels_NPS.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#3287A7",
      borderRadius: 7,
    },
    {
      label: "Detractors",
      data: labels_NPS.map(() => faker.datatype.number({ min: 0, max: 50 })),
      backgroundColor: "#B7EBFE",
      borderRadius: 7,
    },
  ],
};
