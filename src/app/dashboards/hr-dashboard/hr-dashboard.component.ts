import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartWrapperComponent } from '../../components/chart-wrapper/chart-wrapper.component';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import { EmployeeDataService } from '../../services/employee-data.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeTableComponent } from '../../components/employee-table/employee-table.component';
import { JoiningPipelineReportComponent } from '../../components/joining-pipeline-report/joining-pipeline-report.component';
import { AttritionReportComponent } from '../../components/attrition-report/attrition-report.component';


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
  headCount = 656; // Total head count

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeDataService
  ) { }

  openEmployeeTable() {
    this.dialog.open(EmployeeTableComponent, {
      width: '100%',
      maxWidth: '1300px',
      maxHeight: '100vh',
      data: {
        employees: this.employeeService.getEmployees()
      }
    });
  }

  openJoiningPipelineReport() {
    this.dialog.open(JoiningPipelineReportComponent, {
      width: '1200px',
      maxWidth: '95vw',
      height: '80vh',
      panelClass: 'joining-pipeline-dialog',
      data: {
        joiningPipelineData: this.getEnhancedPipelineData()
      }
    });
  }

  private getEnhancedPipelineData() {
    return [
      {
        name: 'Zara', email: 'elilta.meine@gmail.com', phone: '+1 202-666-8972', status: 'Pending', date: 'Apr 14, 2025'
      },
      { name: 'Janana ', email: 'juanmayan@mail.com', phone: '+1 650-866-0097', status: 'Pending', date: 'Apr 14, 2025' },
      { name: 'Suraba K', email: 'kual.crm@gmail.com', phone: '+1 469-753-0470', status: 'Pending', date: 'Apr 14, 2025' },
      { name: 'marone poretel', email: 'poreelhars@@gmail.com', phone: '+1 571-207-4145', status: 'Pending', date: 'Apr 14, 2025' },
      { name: 'sarreny klarener', email: 'sarreny.slarener@yahoo.co.uk', phone: '+1 737-206-5730', status: 'Pending', date: 'Apr 14, 2025' },
      { name: 'Smitha Pandey', email: 'smitha.handy@gmail.com', phone: '+91 432-534-5456', status: 'Pending', date: 'Apr 14, 2025' },
      { name: 'Santiago Tuzimelli', email: 'sandresputimelli@mailmaster.ca', phone: '+91 798-957-5533', status: 'Submitted', date: 'Feb 11, 2025' },
      { name: 'Savoy Pradep', email: 'savoyparibay@gmail.com', phone: '+91 987-678-9098', status: 'Pending', date: 'Feb 06, 2025' },
      { name: 'Zara', email: 'elilta.meine@gmail.com', phone: '+1 202-666-8972', status: 'Pending', date: 'Apr 14, 2025' }

    ];
  }
  openAttritionReport() {
    this.dialog.open(AttritionReportComponent, {
      width: '1200px',
      maxWidth: '95vw',
      height: '80vh',
      data: {
        attritionData: this.getAttritionData()
      }
    });
  }

  private getAttritionData() {
    return [
      {
        name: 'Deepak Sharma',
        jobTitle: 'Jina Developer',
        department: 'Mayo Printed Limited',
        email: 'deepa@gruni.com',
        phone: '+91 366 430 4643',
        employeeId: 'NICL1340191014058091',
        contactDate: 'Feb 26, 2025'
      },
      
      {
        name: 'Nikhil Saari',
        jobTitle: 'Timeline',
        department: 'Dexter Limited',
        email: 'Nikhilsaari@gruni.com',
        phone: '+91 366 480 4045',
        employeeId: 'NICL134022052319399',
        contactDate: 'Feb 26, 2025'
      },

      {
        name: 'Deepak Sharma',
        jobTitle: 'Jina Developer',
        department: 'Mayo Printed Limited',
        email: 'deepa@gruni.com',
        phone: '+91 366 430 4643',
        employeeId: 'NICL1340191014058091',
        contactDate: 'Feb 26, 2025'
      },
      
      {
        name: 'Nikhil Saari',
        jobTitle: 'Timeline',
        department: 'Dexter Limited',
        email: 'Nikhilsaari@gruni.com',
        phone: '+91 366 480 4045',
        employeeId: 'NICL134022052319399',
        contactDate: 'Feb 26, 2025'
      },

      {
        name: 'Deepak Sharma',
        jobTitle: 'Jina Developer',
        department: 'Mayo Printed Limited',
        email: 'deepa@gruni.com',
        phone: '+91 366 430 4643',
        employeeId: 'NICL1340191014058091',
        contactDate: 'Feb 26, 2025'
      },
      
      {
        name: 'Nikhil Saari',
        jobTitle: 'Timeline',
        department: 'Dexter Limited',
        email: 'Nikhilsaari@gruni.com',
        phone: '+91 366 480 4045',
        employeeId: 'NICL134022052319399',
        contactDate: 'Feb 26, 2025'
      },

      {
        name: 'Deepak Sharma',
        jobTitle: 'Jina Developer',
        department: 'Mayo Printed Limited',
        email: 'deepa@gruni.com',
        phone: '+91 366 430 4643',
        employeeId: 'NICL1340191014058091',
        contactDate: 'Feb 26, 2025'
      },
      
      {
        name: 'Nikhil Saari',
        jobTitle: 'Timeline',
        department: 'Dexter Limited',
        email: 'Nikhilsaari@gruni.com',
        phone: '+91 366 480 4045',
        employeeId: 'NICL134022052319399',
        contactDate: 'Feb 26, 2025'
      },

      {
        name: 'Nikhil Saari',
        jobTitle: 'Timeline',
        department: 'Dexter Limited',
        email: 'Nikhilsaari@gruni.com',
        phone: '+91 366 480 4045',
        employeeId: 'NICL134022052319399',
        contactDate: 'Feb 26, 2025'
      }
      
    ];
  }

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
          position: 'right' as const,
          align: 'start' as const,
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
  miningProgressChart = {
    type: 'bar' as const,
    data: {
      labels: ['Open Position', 'Total Offered', 'Joining Pipeline'],
      datasets: [{
        label: 'Count',
        data: [48, 120, 189],
        backgroundColor: [
          '#FFCE56',
          '#5c8fe3',
          '#4BC0C0'
        ],
        borderColor: '#fff',
        borderWidth: 1,
        barThickness: 40
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
          min: 40,
          max: 200,
          grid: {
            display: true,
            color: 'rgba(0, 0, 0, 0.1)',
            drawTicks: false
          },
          ticks: {
            stepSize: 20,
            color: '#5c8fe3',
            font: {
              weight: 'bold' as const
            }
          },
        },
        x: {
          grid: {
            display: false,
            drawOnChartArea: false,
            drawTicks: false
          },
          ticks: {
            color: '#333',
            font: {
              size: 12,
              weight: 'bold' as const
            }
          },
        }
      }
    }
  };

  // Card 5: Employee Types
  employeeTypeChart = {
    type: 'bar' as const,
    data: {
      labels: [
        '10PS',
        'Office Assistant',
        'Freshers',
        'Consultant',
        'House Keeping',
        'Full Time Employee',
        'CONTRACTOR',
        'Contractor',
        'Temporary',
        'C2C',
        'Consistent',
        'W-2',
        'W-2 Contract',
        'CORRELATION',
        'Office Assistant - Emission'
      ],
      datasets: [{
        label: 'Employees',
        data: [1, 12, 95, 16, 19, 382, 1, 83, 3, 17, 32, 4, 1, 2, 3],
        backgroundColor: [
          '#5c8fe3', '#4BC0C0', '#FFCE56', '#FF6384', '#9966FF',
          '#36A2EB', '#FF9F40', '#8A2BE2', '#7CFC00', '#FF4500',
          '#9370DB', '#00FA9A', '#1E90FF', '#FFD700', '#8B008B'
        ],
        borderColor: '#fff',
        borderWidth: 1,
        barThickness: 15
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          callbacks: {
            label: (context: any) => `${context.parsed.y} employees`
          }
        },
        datalabels: {
          anchor: 'end' as const,
          align: 'top' as const,
          color: '#000',
          font: {
            weight: 'bold' as const,
            size: 10
          },
          formatter: (value: number) => value.toString(),
          offset: 2
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: 450,
          grid: {
            display: true,
            color: 'rgba(0, 0, 0, 0.1)',
            drawTicks: false,
            lineWidth: 1
          },
          ticks: {
            stepSize: 50,
            color: '#5c8fe3',
            font: {
              size: 10
            }
          },
          title: {
            display: true,
            text: 'Employees',
            color: '#5c8fe3',
            font: {
              size: 12,
              weight: 'bold' as const
            }
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: '#333',
            font: {
              size: 8
            },
          },
          title: {
            display: true,
            text: 'Employee Type',
            color: '#5c8fe3',
            font: {
              size: 12,
              weight: 'bold' as const
            },
            padding: {
              top: 10
            }
          }
        }
      }
    }
  };

  // Card 6: Immigration Chart
  immigrationChart = {
    type: 'pie' as const,
    data: {
      labels: ['--137', '500', 'G.C - 1', 'OPT - 1', 'Green Card - 1', 'U.S.Citizen - 1', 'H1-B - 15'],
      datasets: [{
        data: [120, 490, 1, 1, 10],
        backgroundColor: ['rgb(239, 116, 64)', 'rgb(18, 154, 238)', 'yellow', 'purple', 'rgb(18, 238, 51)'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right' as const,
          align: 'start' as const,
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