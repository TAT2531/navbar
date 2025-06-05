import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems = [
    { name: 'ESS', subItems: ['My Profile', 'Time Off', 'Documents'] },
    { name: 'Manager', subItems: ['Team Dashboard', 'Approvals', 'Reporting'] },
    { name: 'Admin', subItems: ['System Settings', 'User Management', 'Audit Logs'] },
    { name: 'HR', subItems: ['Recruitment', 'Onboarding', 'Employee Records'] },
    { name: 'Account Manager', subItems: ['Client Accounts', 'Billing', 'Contracts'] },
    { name: 'Organization', subItems: ['Structure', 'Departments', 'Locations'] },
    { name: 'IT Admin', subItems: ['Devices', 'Access Control', 'Support Tickets'] },
    { name: 'Dashboards', subItems: ['HR Analytics', 'Performance', 'Financial'] },
    { name: 'Reports', subItems: ['Monthly', 'Quarterly', 'Annual'] },
    { name: 'India Payroll Reports', subItems: ['Salary Reports', 'Tax Reports', 'Compliance'] },
    { name: 'Immigration', subItems: ['Visa Status', 'Documentation', 'Compliance'] }
  ];

  activeDropdown: string | null = null;

  toggleDropdown(menuName: string): void {
    this.activeDropdown = this.activeDropdown === menuName ? null : menuName;
  }
}