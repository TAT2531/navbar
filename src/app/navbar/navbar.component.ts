import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeDropdown: string | null = null;
  isMobileMenuOpen = false;

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

  constructor(private router: Router) {}
}