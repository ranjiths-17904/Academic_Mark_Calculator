import React from 'react';
import { Line } from 'react-chartjs-2';

const ResultChart = ({ semesters }) => {
  const data = {
    labels: semesters.map(s => `Sem ${s.semester}`),
    datasets: [
      {
        label: 'SGPA',
        data: semesters.map(s => s.sgpa),
        borderColor: 'rgba(255, 215, 0, 1)',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        fill: true,
      },
    ],
  };

  return <Line data={data} />;
};

export default ResultChart;
