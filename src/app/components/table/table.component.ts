import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tableData: any[] = []; // Dynamic table data input
  displayedColumns: string[] = []; // Column headers
  pageSize = 9;
  pageIndex = 0;
  pagedData: any[] = [];

  ngOnInit(): void {
    this.initializeTable();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData']?.currentValue?.length > 0) {
      this.initializeTable();
    }
  }

  private initializeTable(): void {
    if (this.tableData.length > 0) {
      this.displayedColumns = Object.keys(this.tableData[0]);
    }
    this.updatePagedData();
  }

  updatePagedData(): void {
    const start = this.pageIndex * this.pageSize;
    this.pagedData = this.tableData.slice(start, start + this.pageSize);
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePagedData();
  }

  // ✅ Optimized status class function
  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      complete: 'status-complete',
      pending: 'status-pending',
      failed: 'status-failed',
      close: 'status-close'
    };
    return statusClasses[status.toLowerCase()] || 'status-default';
  }
}
