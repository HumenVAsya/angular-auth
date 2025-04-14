import { GraphData } from '../models/graph.model';
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
);

declare global {
  interface HTMLCanvasElement {
    chart?: Chart;
  }
}

export function createBarChart(canvasId: string, data: GraphData): Chart {
  const ctx = document.getElementById(canvasId) as HTMLCanvasElement;

  if (ctx.chart) {
    ctx.chart.destroy();
  }

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Agreeableness', 'Drive', 'Luck', 'Openness'],
      datasets: [
        {
          label: 'Scores',
          data: [data.agreeableness, data.drive, data.luck, data.openness],
          backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2'],
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  ctx.chart = chart;

  return chart;
}
