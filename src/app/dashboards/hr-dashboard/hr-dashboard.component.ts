// src/app/dashboards/hr-dashboard/hr-dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWrapperComponent } from '../../components/chart-wrapper/chart-wrapper.component';

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
    type: 'pie' as const,
    data: {
      labels: ['Canada', 'N/A', 'USA', 'India'],
      datasets: [{
        data: [3, 1, 19, 633],
        backgroundColor: ['#5c8fe3', '#4BC0C0', '#FFCE56', '#FF6384'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { boxWidth: 10, padding: 5, font: { size: 9 } }
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
      backgroundColor: ['#5c8fe3', '#4BC0C0', '#FFCE56', '#FF6384', '#9966FF', 'green', 'pink'],
      barThickness: 20
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: { 
        beginAtZero: true,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          font: {
            size: 9
          }
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 9
          },
          callback: (value: any, index: number) => {
            // Access labels directly from the component property
            const label = this.departmentChart.data.labels[index];
            if (label.includes(' ')) {
              const parts = label.split(' ');
              if (parts.length > 2) {
                return `${parts[0]} ${parts[1]}\n${parts.slice(2).join(' ')}`;
              }
            }
            return label;
          }
        }
      }
    }
  }
};

  // Card 3: HR Metrics
  hrMetrics = [
    { label: 'HR to Employee Ratio', value: '1.22%' },
    { label: 'Gender Diversity Ratio', value: '78.51%' },
    { label: 'Average Age', value: '28.14 years' },
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
          position: 'right',
          labels: { boxWidth: 10, padding: 5, font: { size: 8 } }
        }
      }
    }
  };
}