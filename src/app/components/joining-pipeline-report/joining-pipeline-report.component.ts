// Angular Core
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material Components
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-joining-pipeline-report',
  standalone: true,
  imports: [
    // Angular Modules
    CommonModule,
    FormsModule,
    
    // Material Modules
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './joining-pipeline-report.component.html',
  styleUrls: ['./joining-pipeline-report.component.css']
})
export class JoiningPipelineReportComponent {
  // Search Properties
  searchText: string = '';
  filteredData: any[] = [];
  
  // Table Properties
  displayedColumns: string[] = ['name', 'email', 'phone', 'status', 'date'];
  
  // Pagination Properties
  pageSize = 100;
  pageIndex = 0;
  pageSizeOptions = [50, 100, 200];
  paginatedData: any[] = [];

  constructor(
    public dialogRef: MatDialogRef<JoiningPipelineReportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { joiningPipelineData: any[] }
  ) {
    this.initializeData();
  }

  // Initialization
  private initializeData(): void {
    this.filteredData = [...this.data.joiningPipelineData];
    this.updatePaginatedData();
  }

  // Filter Methods
  applyFilter(): void {
    this.filteredData = this.data.joiningPipelineData.filter(item => 
      Object.values(item).some(val => 
        val?.toString().toLowerCase().includes(this.searchText.toLowerCase())
      )
    );
    this.resetToFirstPage();
  }

  private resetToFirstPage(): void {
    this.pageIndex = 0;
    this.updatePaginatedData();
  }

  // Pagination Methods
  updatePaginatedData(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.filteredData.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePaginatedData();
  }

  onPreviousPage(): void {
    this.pageIndex--;
    this.updatePaginatedData();
  }

  onNextPage(): void {
    this.pageIndex++;
    this.updatePaginatedData();
  }

  goToFirstPage(): void {
    this.pageIndex = 0;
    this.updatePaginatedData();
  }

  goToLastPage(): void {
    this.pageIndex = Math.floor((this.filteredData.length - 1) / this.pageSize);
    this.updatePaginatedData();
  }

  // Dialog Methods
  closeDialog(): void {
    this.dialogRef.close();
  }

  // Detail View Methods
  showDetails(item: any): void {
    console.log('Item details:', item);
    // Implement detailed view logic here
  }
}