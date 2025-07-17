import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attrition-report',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './attrition-report.component.html',
  styleUrls: ['./attrition-report.component.css']
})
export class AttritionReportComponent {
  searchText: string = '';
  displayedColumns: string[] = ['name', 'jobTitle', 'department', 'email', 'phone', 'employeeId', 'contactDate'];
  
  constructor(
    public dialogRef: MatDialogRef<AttritionReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { attritionData: any[] }
  ) {}

  applyFilter() {
    // Filter logic will be applied to dataSource in template
  }

  closeDialog() {
    this.dialogRef.close();
  }
}