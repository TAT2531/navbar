// src/app/components/dashboards/task-board-dashboard/task-board-dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface PriorityData {
  priority: string;
  count: number;
  color: string;
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

interface HoursChartData {
  week: string;
  planned: number;
  utilized: number;
}

interface ProjectProgressData {
  name: string;
  progress: number;
  color: string;
}

type MediumCardData = 
  | { type: 'priority', title: string, data: PriorityData[] }
  | { type: 'hours', title: string, data: HoursData }
  | { type: 'projectTasks', title: string, data: ProjectTaskData[] };

type LargeCardData = 
  | { type: 'hoursChart', title: string, data: HoursChartData[] }
  | { type: 'projectProgress', title: string, data: ProjectProgressData[] };

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
  startDate = '05/01/2025';
  endDate = '05/01/2025';

  // Card data
  smallCards = [
    { title: 'Total Resources', value: 12 },
    { title: 'Overall Task Completion Rate', value: '75.50%' },
    { title: 'Total Tasks', value: 48 },
    { title: 'Task Open', value: 12 },
    { title: 'Task Closed', value: 36 }
  ];

  mediumCards: MediumCardData[] = [
    { 
      type: 'priority', 
      title: 'Task by Priority', 
      data: [
        { priority: 'High', count: 8, color: '#FF5252' },
        { priority: 'Medium', count: 20, color: '#FFC107' },
        { priority: 'Low', count: 20, color: '#4CAF50' }
      ]
    },
    { 
      type: 'hours', 
      title: 'Total Utilized Work Hours', 
      data: { estimated: 320, actual: 280 }
    },
    { 
      type: 'projectTasks', 
      title: 'Outstanding Task Based on Project', 
      data: [
        { project: 'Project Alpha', completed: 15, total: 20 },
        { project: 'Project Beta', completed: 8, total: 12 },
        { project: 'Project Gamma', completed: 5, total: 8 },
        { project: 'Project Delta', completed: 8, total: 8 }
      ]
    }
  ];

  largeCards: LargeCardData[] = [
    { 
      type: 'hoursChart', 
      title: 'Planned hours vs Utilized Hours', 
      data: [
        { week: '0.1', planned: 40, utilized: 35 },
        { week: '0.2', planned: 40, utilized: 38 },
        { week: '0.3', planned: 40, utilized: 32 },
        { week: '0.4', planned: 40, utilized: 42 },
        { week: '0.5', planned: 40, utilized: 37 },
        { week: '0.6', planned: 40, utilized: 45 },
        { week: '0.7', planned: 40, utilized: 30 },
        { week: '0.8', planned: 40, utilized: 35 },
        { week: '0.9', planned: 40, utilized: 28 }
      ]
    },
    { 
      type: 'projectProgress', 
      title: 'Project', 
      data: [
        { name: 'Project Alpha', progress: 75, color: '#4285F4' },
        { name: 'Project Beta', progress: 67, color: '#EA4335' },
        { name: 'Project Gamma', progress: 100, color: '#FBBC05' },
        { name: 'Project Delta', progress: 62, color: '#34A853' }
      ]
    }
  ];

  fetchData() {
    console.log('Fetching data with filters:', {
      boardName: this.boardName,
      project: this.project,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  clearFilters() {
    this.boardName = 'All';
    this.project = 'All';
    this.startDate = '05/01/2025';
    this.endDate = '05/01/2025';
  }
}