import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent {
  displayedColumns: string[] = [
    'name', 'department', 'jobTitle', 'email',
    'mobile', 'joinDate', 'dob', 'experience',
    'age', 'gender'
  ];
  searchText: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EmployeeTableComponent>
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    // Implement your filtering logic here if needed
    this.searchText = filterValue;
  }
}