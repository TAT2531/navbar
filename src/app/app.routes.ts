import { Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './dashboards/employee-dashboard/employee-dashboard.component';
import { HrDashboardComponent } from './dashboards/hr-dashboard/hr-dashboard.component';
import { HrRecruitmentDashboardComponent } from './dashboards/hr-recruitment-dashboard/hr-recruitment-dashboard.component';
import { InvoiceDashboardComponent } from './dashboards/invoice-dashboard/invoice-dashboard.component';
import { TaskBoardDashboardComponent } from '../app/dashboards/task-board-dashboard/task-board-dashboard.component';


export const routes: Routes = [
    {
        path: 'dashboards/employee',
        component: EmployeeDashboardComponent
    },
    {
        path: 'hr-dashboard',
        component: HrDashboardComponent
    },

    {
        path: 'dashboards/hr-recruitment',
        component: HrRecruitmentDashboardComponent
    },

    {
        path: 'dashboards/invoice',
        component: InvoiceDashboardComponent,
        data: { title: 'Invoice Dashboard' }
    },

    {
        path: 'dashboards/task-board',
        component: TaskBoardDashboardComponent
    }
];