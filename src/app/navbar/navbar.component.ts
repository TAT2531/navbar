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
    { 
      name: 'ESS', 
      subItems: ['ESS Subitem 1', 'ESS Subitem 2', 'ESS Subitem 3'] 
    },
    { 
      name: 'Manager', 
      subItems: ['Manager Subitem 1', 'Manager Subitem 2'] 
    },
    { 
      name: 'Admin', 
      subItems: ['Admin Subitem 1', 'Admin Subitem 2'] 
    },
    { 
      name: 'HR', 
      subItems: ['HR Subitem 1', 'HR Subitem 2'] 
    },
    { 
      name: 'Account Manager', 
      subItems: ['Account Subitem 1', 'Account Subitem 2'] 
    },
    { 
      name: 'Organization', 
      subItems: ['Org Subitem 1', 'Org Subitem 2'] 
    },
    { 
      name: 'IT Admin', 
      subItems: ['IT Subitem 1', 'IT Subitem 2'] 
    },
    { 
      name: 'Dashboards', 
      subItems: ['Dashboard 1', 'Dashboard 2'] 
    },
    { 
      name: 'Reports', 
      subItems: ['Report 1', 'Report 2'] 
    },
    { 
      name: 'India Payroll Reports', 
      subItems: ['Payroll 1', 'Payroll 2'] 
    },
    { 
      name: 'Immigration', 
      subItems: ['Immigration 1', 'Immigration 2'] 
    }
  ];

  activeDropdown: string | null = null;

  toggleDropdown(menuName: string): void {
    this.activeDropdown = this.activeDropdown === menuName ? null : menuName;
  }
}