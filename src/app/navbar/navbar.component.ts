import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // Navbar state
  activeDropdown: string | null = null;
  isMobileMenuOpen = false;
  
  // Employee search
  employeeName: string = '';
  showDashboard: boolean = false;
  isLoading: boolean = false;

  // Dashboard data
  dashboardCategories = [
    {
      name: 'HR Dashboard',
      items: [
        'Ht Recruitment Dashboard',
        'Imvoice Dashboard',
        'Task Board Dashboard',
        'Support Ticket Dashboard',
        'Payroll Dashboard',
        'Performance Dashboard'
      ]
    }
  ];

  currentProjects = [
    {
      name: 'Nomadurchan Project',
      details: [
        { label: 'Vendor No.', value: 'No Vendor...' },
        { label: 'Client Name', value: 'No Client' },
        { label: 'Start Date', value: '2025-03-17' },
        { label: 'TimeNext Tip', value: 'Weekly' }
      ]
    },
    {
      name: 'Memelous Limited_State...',
      details: [
        { label: 'Max Now I.L..', value: '' }
      ]
    }
  ];

  myPayalips = {
    title: 'My Payalips',
    date: 'Feb 17, 2025 - 01:08',
    expenses: 'My Expenses'
  };

  keyLabels = Array.from({length: 20}, (_, i) => `1.${i}`);

  constructor(private router: Router) {}

  searchEmployee(): void {
    if (!this.employeeName.trim()) return;
    
    this.isLoading = true;
    this.showDashboard = false;

    // Simulate API call
    setTimeout(() => {
      this.isLoading = false;
      this.showDashboard = true;
      
      // Scroll to dashboard
      setTimeout(() => {
        const dashboard = document.querySelector('.dashboard-container');
        dashboard?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }, 800);
  }

  closeDashboard(): void {
    this.showDashboard = false;
    this.employeeName = '';
  }

  // Existing navbar methods...
  toggleDropdown(menuName: string): void {
    this.activeDropdown = this.activeDropdown === menuName ? null : menuName;
  }

  navigateTo(link: string): void {
    this.router.navigateByUrl(link)
      .then(() => {
        this.activeDropdown = null;
        this.isMobileMenuOpen = false;
      })
      .catch(err => console.error('Navigation error:', err));
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) {
      this.activeDropdown = null;
    }
  }
}