import { Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './dashboards/employee-dashboard/employee-dashboard.component';

export const routes: Routes = [
    {
        path: 'dashboards/employee', 
        component: EmployeeDashboardComponent 
    }

];