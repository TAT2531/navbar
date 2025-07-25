// src/app/components/dashboards/task-board-dashboard/task-board-dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PriorityData {
}

interface HoursData {
  estimated: number;
  actual: number;
}

interface ProjectTaskData {
  project: string;
  completed: number;
  total: number;
}
interface TaskProgressData {
  planned: number;
  completed: number;
}

interface HoursChartData {
  week: string;  // Added week property
  planned: number;
  utilized: number;
}

type LargeCardData =
  | { type: 'taskProgress', title: string, data: TaskProgressData[] }
  | { type: 'hoursChart', title: string, data: HoursChartData[] };



type MediumCardData =
  | { type: 'priority', title: string, data: PriorityData[] }
  | { type: 'hours', title: 'Total Utilized Work Hours', data: { estimated: 320, actual: 280 } }
  | { type: 'projectTasks', title: string, data: ProjectTaskData[] };



@Component({
  selector: 'app-task-board-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-board-dashboard.component.html',
  styleUrls: ['./task-board-dashboard.component.css']
})
export class TaskBoardDashboardComponent {
  boardName = 'All';
  project = 'All';

  getTicks(max: number, step: number = 1): number[] {
    const ticks = [];
    for (let i = 0; i <= max; i += step) {
      ticks.push(i);
    }
    return ticks;
  }

  // small cards
  smallCards = [
    { title: 'Total Resources', value: 12 },
    { title: 'Overall Task Completion Rate', value: '75.50%' },
    { title: 'Total Tasks', value: 48 },
    { title: 'Task Open', value: 12 },
    { title: 'Task Closed', value: 36 }
  ];

  // medium cards
  mediumCards: MediumCardData[] = [
    {
      type: 'priority',
      title: 'Task by Priority',
      data: [
      ]
    },
    {
      type: 'hours',
      title: 'Total Utilized Work Hours',
      data: { estimated: 320, actual: 280 }
    },
    {
      type: 'projectTasks',
      title: 'Tasks by Status',
      data: [
      ]
    }
  ];

  // large cards
largeCards: LargeCardData[] = [
  {
    type: 'taskProgress',
    title: 'Outstanding Task Based on Project',
    data: [
      { planned: 0.8, completed: 0.6 },
      { planned: 0.6, completed: 0.4 },
      { planned: 0.4, completed: 0.3 },
      { planned: 0.3, completed: 0.2 }
    ]
  },
  {
    type: 'hoursChart',
    title: 'Planned hours vs Utilized Hours',
    data: [
      { week: '0.1', planned: 80, utilized: 70 },
      { week: '0.2', planned: 70, utilized: 60 },
      { week: '0.3', planned: 60, utilized: 50 },
      { week: '0.4', planned: 50, utilized: 45 },
      { week: '0.5', planned: 45, utilized: 40 }
    ]
  }
];


  fetchData() {
    console.log('Fetching data with filters:', {
      boardName: this.boardName,
      project: this.project,

    });
  }

  clearFilters() {
    this.boardName = 'All';
    this.project = 'All';
  }
}