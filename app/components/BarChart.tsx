import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {

  const data = {
    labels: [
       "Won", "Committed", "Best case", "Qualified", "Lead"
    ],
    datasets: [
      {
        label: '', // Hide label text
        data: [81000000, 8000000, 7000000, 3000000, 75000000],
        backgroundColor: "#325BC9",
        borderColor: "#325BC9",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow dynamic resizing
    aspectRatio: 2, // Control the width-to-height ratio (try different values like 2, 1.5, 3)
    plugins: {
      legend: {
        display: false, // Hide the legend box
      },
      tooltip: {
        callbacks: {
          labelTextColor: () => "#fff", // Set tooltip text color
        },
        backgroundColor: "#333", // Set tooltip background color
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Optionally hide the x-axis grid lines for a cleaner look
        },
        ticks: {
          color: '#2C445D' // X-axis labels color
        },
      },
      y: {
        beginAtZero: true, // Ensure the y-axis starts at 0
        ticks: {
          color: '#2C445D' // Y-axis labels color
        },
      },
    },
  };

  return (
    <div className="w-full mt-5 bg-white h-96 border rounded-md p-2 shadow-sm"> 
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
