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
  activeDropdown: string | null = null;
  isMobileMenuOpen = false;
  showEmployeeModal = false;
  employeeName = '';

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

  openEmployeeDashboardModal(): void {
    this.showEmployeeModal = true;
    this.activeDropdown = null;
    this.isMobileMenuOpen = false;
  }

  closeEmployeeDashboardModal(): void {
    this.showEmployeeModal = false;
    this.employeeName = '';
  }

  navigateToEmployeeDashboard(): void {
    if (this.employeeName.trim()) {
      this.router.navigate(['/dashboards/employee'], { 
        queryParams: { name: this.employeeName.trim() } 
      });
      this.closeEmployeeDashboardModal();
    }
  }

  constructor(private router: Router) {}
}