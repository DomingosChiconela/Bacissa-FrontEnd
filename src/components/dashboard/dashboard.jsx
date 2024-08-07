import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Registre os componentes necessários do Chart.js
ChartJS.register(
  Title, Tooltip, Legend,
  LineElement, PointElement,
  BarElement,
  CategoryScale, LinearScale
);

// Dados para o gráfico de barras (Propostas Recebidas e Anúncios Publicados)
const barData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Propostas Recebidas',
      data: [50, 60, 70, 80, 90, 100, 110],
      backgroundColor: 'rgba(216,252,208)',
      borderColor: 'rgba(216,252,208)',
      borderWidth: 1
      
    },
    {
      label: 'Anúncios Publicados',
      data: [30, 40, 50, 60, 70, 80, 90],
      backgroundColor: 'rgba(153, 102, 255, 1)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1
    }
  ]
};

// Dados para o gráfico de linhas (Informações Mensais)
const lineData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Informações Mensais',
      data:  [50, 60, 70, 80, 90, 100, 110],
      fill: false,
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(216,252,208)',
      tension: 0.1
    }
  ]
};

export const Dashboard = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="mb-8">
        <h2 className=" text-lg lg:text-3xl md:text-2xl font-semibold mb-4 text-center">Propostas Recebidas e Anúncios Publicados</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>
      <div>
        <h2 className="text-lg lg:text-3xl md:text-2xl font-semibold mb-4 text-center">Informações Mensais</h2>
        <div className="bg-white shadow-md rounded-lg p-4">
          <Line data={lineData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>
    </div>
  );
};
