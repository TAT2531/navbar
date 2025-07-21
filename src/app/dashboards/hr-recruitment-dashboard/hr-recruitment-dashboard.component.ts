import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-hr-recruitment-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hr-recruitment-dashboard.component.html',
  styleUrls: ['./hr-recruitment-dashboard.component.css']
})
export class HrRecruitmentDashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createPieChart();

    this.createBarChart();

    this.createApplicationsByCountryChart();

    this.createApplicationsByMonthChart();

    this.createApplicationsBySourceChart();

  }

  createPieChart() {
    Chart.register(...registerables);

    const ctx = document.getElementById('positionsByCountryChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [{
          data: [5, 2, 5],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'chartArea',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.label}: ${context.raw}`;
              }
            }
          }
        }
      }
    });
  }

  createBarChart() {
    Chart.register(...registerables);

    const ctx = document.getElementById('positionsByMonthChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['April', 'May'],
        datasets: [{
          label: 'Number of Positions',
          data: [10, 2],
          backgroundColor: '#0780f1',
          borderColor: '#0780f1',
          borderWidth: 1,
          barPercentage: 0.4,
          categoryPercentage: 0.4
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            min: 2,
            max: 12, // Sets upper limit to show above highest bar (10)
            title: {
              display: true,
              text: 'Number of Positions',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              stepSize: 2,
            },

          },
          x: {
            title: {
              display: true,
              text: 'Months',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `Positions: ${context.raw}`;
              }
            }
          },
          // This plugin displays values on top of bars
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: (value) => value,
            font: {
              weight: 'bold'
            }
          }
        }
      },
      plugins: [{
        id: 'datalabels',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const data = dataset.data[index];
              ctx.fillStyle = '#333';
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              ctx.font = 'bold 12px Arial';
            });
          });
        }
      }]
    });
  }


  createApplicationsByCountryChart() {
    Chart.register(...registerables);

    const ctx = document.getElementById('applicationsByCountryChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {

        datasets: [{
          data: [],
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Applications',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
              drawOnChartArea: true,
              drawTicks: true,
              lineWidth: 1
            }
          },
          x: {
            title: {
              display: true,
              text: 'Countries',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `Applications: ${context.parsed.y}`;
              }
            }
          }
        }
      },
      plugins: [{
        id: 'datalabels',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const data = dataset.data[index];
              if (data !== null && data !== undefined) {
                ctx.fillStyle = '#333';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.font = 'bold 12px Arial';
                ctx.fillText(data.toString(), bar.x, bar.y - 5);
              }
            });
          });
        }
      }]
    });
  }

  createApplicationsByMonthChart() {
    Chart.register(...registerables);

    const ctx = document.getElementById('applicationsByMonthChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          data: [],
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Applications',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
            ticks: {
              stepSize: 0.1,
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
              // drawBorder: true,
              drawOnChartArea: true,
              drawTicks: true,
              lineWidth: 1
            }
          },
          x: {
            title: {
              display: true,
              text: 'Months',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `Applications: ${context.parsed.y.toFixed(1)}`;
              }
            }
          }
        }
      },
      plugins: [{
        id: 'datalabels',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const data = dataset.data[index];
              if (data !== null && data !== undefined) {
                ctx.fillStyle = '#333';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'bottom';
                ctx.font = 'bold 12px Arial';
              }
            });
          });
        }
      }]
    });
  }

  createApplicationsBySourceChart() {
    Chart.register(...registerables);

    const ctx = document.getElementById('applicationsBySourceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Referral', 'Website', 'Job Boards', 'Social Media'], // Y-axis labels
        datasets: [{
          data: [], 
        }]
      },
      options: {
        indexAxis: 'y', 
        responsive: true,
        scales: {
          x: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Number of Applications',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
            min: -1.0,
            max: 1.0,
            ticks: {
              stepSize: 0.5,
            },
            
          },
          y: {
            title: {
              display: true,
              text: 'Sources',
              color: '#5c8fe3',
              font: {
                weight: 'bold'
              }
            },
            grid: {
              display: true
            }
          }
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `Applications: ${context.parsed.x.toFixed(1)}`;
              }
            }
          }
        }
      },
      plugins: [{
        id: 'datalabels',
        beforeDraw: (chart) => {
          const ctx = chart.ctx;
          chart.data.datasets.forEach((dataset, i) => {
            const meta = chart.getDatasetMeta(i);
            meta.data.forEach((bar, index) => {
              const data = dataset.data[index];
              if (data !== null && data !== undefined) {
                ctx.fillStyle = '#333';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.font = 'bold 12px Arial';
              }
            });
          });
        }
      }]
    });
  }

  
}