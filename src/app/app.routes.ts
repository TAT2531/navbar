import { Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './dashboards/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './dashboards/hr-dashboard/hr-dashboard.component';

export const routes: Routes = [
    {
        path: 'dashboards/employee', 
        component: EmployeeDashboardComponent 
    },
    {
        path: 'hr-dashboard',
        component: HrDashboardComponent
    }
];