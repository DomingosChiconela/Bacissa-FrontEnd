import React from 'react';
import { Line as LineChart, Bar as BarChart, Pie as PieChart } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

// Registre os componentes necessários do Chart.js
ChartJS.register(
  Title, Tooltip, Legend,
  LineElement, PointElement,
  BarElement,
  CategoryScale, LinearScale,
  ArcElement
);

// Dados para o gráfico de barras (Novas Propostas e Publicações Feitas)
const newBarData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Novas Propostas',
      data: [45, 55, 65, 75, 85, 95, 105],
      backgroundColor: 'rgba(253, 227, 167, 0.6)',
      borderColor: 'rgba(253, 227, 167, 1)',
      borderWidth: 1
    },
    {
      label: 'Publicações Feitas',
      data: [25, 35, 45, 55, 65, 75, 85],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }
  ]
};

// Dados para o gráfico de linhas (Desempenho Mensal)
const newLineData = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
  datasets: [
    {
      label: 'Desempenho Mensal',
      data: [45, 70, 65, 75, 85, 70, 105],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(253, 227, 167, 0.6)',
      tension: 0.1
    }
  ]
};

// Dados para o gráfico de pizza (Distribuição de Recursos)
const newPieData = {
  labels: ['Segmento A', 'Segmento B', 'Segmento C', 'Segmento D'],
  datasets: [
    {
      data: [40, 20, 20, 20],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1
    }
  ]
};

// Dados para uma tabela de resumo
const adminSummaryData = [
  { label: 'Usuários Registrados', value: '2000' },
  { label: 'Tarefas Pendentes', value: '50' },
  { label: 'Mensagens Recebidas', value: '300' },
  { label: 'Alertas Críticos', value: '12' }
];

export const AdminDashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard Administrativo</h1>

      {/* Gráficos */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg lg:text-2xl font-semibold mb-4 text-center">Novas Propostas e Publicações Feitas</h2>
          <BarChart data={newBarData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg lg:text-2xl font-semibold mb-4 text-center">Desempenho Mensal</h2>
          <LineChart data={newLineData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg lg:text-2xl font-semibold mb-4 text-center">Distribuição de Recursos</h2>
          <PieChart data={newPieData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>

      {/* Tabela de Resumo */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg lg:text-2xl font-semibold mb-4 text-center">Resumo Administrativo</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valor</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {adminSummaryData.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.label}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
