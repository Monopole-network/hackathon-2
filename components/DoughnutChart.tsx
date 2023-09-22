import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { color } from 'framer-motion';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutProps {
Percent : number;
Color : string;
}
export function DoughnutChart({Percent, Color} : DoughnutProps) {
    const full = 100 - Percent;
    console.log(full);
    console.log(Percent);
    const data = {
      labels: [],
      datasets: [
        {
          label: '',
          data: [Percent, full],
          backgroundColor: [
            Color,
            'rgba(217, 217, 217, 0.12)',
          ],
          borderColor: [
            Color,
            'rgba(217, 217, 217, 0.50)',
          ],
          borderWidth: 1,
        },
      ],
    };
  return <Doughnut data={data} />;
}
