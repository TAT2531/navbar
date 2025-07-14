import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWrapperComponent } from '../../components/chart-wrapper/chart-wrapper.component';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';

// Register Chart.js components
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels.default
);

@Component({
  selector: 'app-hr-dashboard',
  standalone: true,
  imports: [CommonModule, ChartWrapperComponent],
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent {
  // Card 1: Employee Count By Country
 countryChart = {
  type: 'doughnut' as const,
  data: {
    labels: ['Canada - 3', 'NA - 1', 'USA - 19', 'India - 633'],
    datasets: [{
      data: [3, 1, 19, 633],
      backgroundColor: ['#5c8fe3', '#4BC0C0', '#FFCE56', '#FF6384'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'right' as const, // Fixed with type assertion
        align: 'start' as const,   // Fixed with type assertion
        labels: { 
          boxWidth: 12, 
          padding: 15, 
          font: { size: 10 } 
        }
      }
    }
  }
};

  // Card 2: Department Chart
departmentChart = {
  type: 'bar' as const,
  data: {
    labels: ['Macys Private Limited', 'Cochocasia Tech.', 'TCS', 'Drexler Limited', 'Toxicopteril Limited', 'No Department', 'No Department'],
    datasets: [{
      data: [156, 377, 3, 38, 15, 40, 27],
      backgroundColor: [
        '#5c8fe3', '#4BC0C0', '#FFCE56', 
        '#FF6384', '#9966FF', '#36A2EB', '#FF9F40'
      ],
      borderColor: '#fff',
      borderWidth: 1,
      barThickness: 30
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 30
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      },
      datalabels: {
        anchor: 'end' as const,
        align: 'top' as const,
        color: '#000',
        font: {
          weight: 'bold' as const,
          size: 12
        },
        formatter: (value: number) => value.toString(),
        offset: 4
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 400,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
          drawTicks: false
        },
        ticks: {
          stepSize: 50,
          color: '#5c8fe3',
          font: {
            weight: 'bold' as const
          }
        },
        title: {
          display: true,
          text: 'Employee Count',
          color: '#5c8fe3',
          font: {
            size: 12,
            weight: 'bold' as const
          },
          padding: { top: 0, bottom: 20 }
        }
      },
      x: {
        grid: {
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          color: 'rgba(0, 0, 0, 0.1)',
          lineWidth: 1
        },
        ticks: {
          color: '#333',
          font: {
            size: 10,
            weight: 'bold' as const
          },
          callback: (value: any, index: number) => {
            const label = this.departmentChart.data.labels[index];
            if (label.includes(' ')) {
              const parts = label.split(' ');
              if (parts.length > 2) {
                return `${parts[0]} ${parts[1]}\n${parts.slice(2).join(' ')}`;
              }
            }
            return label;
          }
        },
        // Added x-axis title configuration
        title: {
          display: true,
          text: 'Departments',
          color: '#5c8fe3',
          font: {
            size: 12,
            weight: 'bold' as const
          },
          padding: { top: 10 }
        }
      }
    }
  }
};

  // Card 3: HR Metrics
  hrMetrics = [
    { label: 'HR to Employee Ratio:', value: '1.22%' },
    { label: 'Gender Diversity Ratio:', value: '78.51%' },
    { label: 'Average Age:', value: '28.14 years' },
    { label: 'Avg. Experience', value: '1.81 year(s)' }
  ];

  // Card 4: Mining Progress
  miningProgress = [
    { category: 'Open Position', value: 120 },
    { category: 'Total Offered', value: 40 },
    { category: 'Joining Pipeline', value: '10%' }
  ];

  // Card 5: Employee Types
  employeeTypes = [
    { type: 'Full Time Employee', count: 88 },
    { type: 'Contractor', count: 17 },
    { type: 'Consultant', count: 32 },
    { type: 'Intern', count: 4 },
    { type: 'Other', count: 1 }
  ];

  // Card 6: Immigration Chart
  immigrationChart = {
  type: 'pie' as const,
  data: {
    labels: ['Citizen', 'Green Card', 'OPT', 'H1-B', 'Other'],
    datasets: [{
      data: [500, 1, 1, 15, 20],
      backgroundColor: ['#5c8fe3', '#4BC0C0', '#FFCE56', '#FF6384', '#9966FF'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const, // <-- Fixed by using 'as const'
        labels: { 
          boxWidth: 10, 
          padding: 5, 
          font: { size: 8 } 
        }
      }
    }
  }
};
}