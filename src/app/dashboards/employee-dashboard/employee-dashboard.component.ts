

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  employeeName: string = '';
  keyLabels: string[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.employeeName = params['name'] || 'Unknown Employee';
    });

    // Generate key labels 1.0 through 1.150
    for (let i = 0; i <= 150; i++) {
      this.keyLabels.push(`1.${i}`);
    }
  }
}