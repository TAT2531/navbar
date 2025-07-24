import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-invoice-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice-dashboard.component.html',
  styleUrls: ['./invoice-dashboard.component.css']
})
export class InvoiceDashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.createBarChart();

    this.createInvoiceTypeChart();

    this.createOutstandingInvoicesChart();

    this.createExpensesByStatusChart();
  }

  createBarChart() {

    Chart.register(...registerables, ChartDataLabels);

    const ctx = document.getElementById('departmentChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Confiscate tech', 'Macys Printed Limited'],
        datasets: [{
          data: [1, 4],
          backgroundColor: [
            'rgba(102, 129, 183, 0.7)',
            'voilet'
          ],
          borderColor: [
            'rgba(74, 107, 175, 1)',
            'rgb(20, 51, 176)'
          ],
          borderWidth: 1,
          barPercentage: 0.4,
          categoryPercentage: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          datalabels: {
            anchor: 'end',
            align: 'top',
            formatter: (value: number) => value.toFixed(1),
            font: {
              weight: 'bold'
            }
          }
        },
        scales: {
          y: {
            min: 1.0,
            max: 4.5,
            title: {
              display: true,
              text: 'Count',
              color: '#5c8fe3',
              font: { weight: 'bold', size: 12 }
            },
            ticks: {
              stepSize: 0.5,
              callback: function (value) {
                return value;
              }
            }
          },
          x: {
            title: {
              display: true,
              text: 'Departments',
              color: '#5c8fe3',
              font: { weight: 'bold', size: 12 }
            }
          }
        }
      }
    });
  }

  createInvoiceTypeChart() {
    Chart.register(...registerables, ChartDataLabels);

    const ctx = document.getElementById('invoiceTypeChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Monthly-2', 'customClient-2', 'custom-2'],
        datasets: [{
          data: [2, 2, 2],
          backgroundColor: [
            'rgba(232, 10, 114, 0.8)',
            'darkblue',
            'rgba(254, 166, 4, 0.95)',

          ],
          borderColor: '#ffffff',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: {
                size: 12
              },
              padding: 16,
              usePointStyle: true,
              pointStyle: 'rect'
            }
          },
          datalabels: {
            color: '#ffffff',
            font: {
              weight: 'bold',
              size: 0
            },
          }
        },
        cutout: '55%'
      }
    });
  }

  createOutstandingInvoicesChart() {
    Chart.register(...registerables, ChartDataLabels);

    const ctx = document.getElementById('outstandingInvoicesChart') as HTMLCanvasElement;

    const months = ['August', 'November', 'December', 'January'];
    const invoicedAmounts = [0, 14000, 12000, 1500000]; 
    const amountDue = [0, 14000, 12000, 1500000];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: months,
        datasets: [{
          label: 'InvoicedAmount',
          data: invoicedAmounts,
          backgroundColor: 'rgba(8, 131, 232, 0.98)',
          borderColor: 'rgb(43, 208, 226)',
          borderWidth: 1,
          barPercentage: 1,
          categoryPercentage: 0.33
        },
        {
          label: 'AmountDue', 
          data: amountDue,
          backgroundColor: 'rgba(45, 249, 147, 0.88)', 
          borderColor: 'rgb(65, 246, 168)',
          borderWidth: 1,
          barPercentage: 1,
          categoryPercentage: 0.33
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true, position: 'top',
            labels: {
              font: { size: 7},
              usePointStyle: true,
              pointStyle: 'rect'
            }
          },

          datalabels: {
            font: {
              size: 0
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            min:0,
            max:1600000,
            title: {
              display: true,
              text: 'Amount',
              color: '#5c8fe3',
              font: { weight: 'bold', size: 11 }
            },
          },
          x: {
            title: {
              display: true,
              text: 'Months',
              color: '#5c8fe3',
              font: { weight: 'bold', size: 11 }
            }
          }
        }
      }
    });
  }

  createExpensesByStatusChart() {
    Chart.register(...registerables, ChartDataLabels);

    const ctx = document.getElementById('expensesByStatusChart') as HTMLCanvasElement;

    const statusData = {
      labels: ['saved-39750', 'submitted-43575', 'approved-17350', 'rejected-26075', 'processed-0', 'invoiced-0', 'archived-20329'],
      datasets: [{
        data: [39750, 43575, 17360, 26015, 0, 0, 20320],
        backgroundColor: [
          'rgba(241, 9, 106, 0.7)', 
          'darkblue', 
          'rgba(236, 129, 8, 0.7)', 
          'rgba(11, 194, 194, 0.7)',  
          'rgba(246, 15, 3, 0.7)',  
          'rgba(7, 80, 226, 0.7)', 
          'rgba(243, 124, 6, 0.87)'  
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    };

    new Chart(ctx, {
      type: 'pie',
      data: statusData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: { size: 10 },
              padding: 10,
              usePointStyle: true,
              pointStyle: 'rect'
            }
          },
          datalabels: {
            color: '#ffffff',
            font: { weight: 'bold', size: 0 },
          }
        },
      }
    });
  }

}