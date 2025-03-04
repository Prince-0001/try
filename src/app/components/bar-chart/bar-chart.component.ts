import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {
  title = 'ng2-charts-demo';
  selectedFilter: string = 'month'; // Default filter (Month)
  
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar' | 'line'>['data'] = {
    labels: [],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar' | 'line'>['options'] = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 110
      }
    }
  };

  // ✅ Sample JSON data
  jsonData = [
    { date: '2024-11-30T09:15:00Z', activeOrders: 50, inactiveOrders: 30 },
    { date: '2024-12-01T10:00:00Z', activeOrders: 80, inactiveOrders: 50 },
    { date: '2024-12-05T12:30:00Z', activeOrders: 30, inactiveOrders: 20 },
    { date: '2024-12-10T14:00:00Z', activeOrders: 60, inactiveOrders: 40 },
    { date: '2024-12-15T15:45:00Z', activeOrders: 90, inactiveOrders: 70 },
    { date: '2024-12-20T17:30:00Z', activeOrders: 70, inactiveOrders: 60 }
  ];

  ngOnInit() {
    this.filterData();
  }

  // ✅ Function to filter data
  filterData() {
    const now = new Date();
  
    // Define the type explicitly
    let filteredData: { date: string; activeOrders: number; inactiveOrders: number }[] = [];
  
    if (this.selectedFilter === 'year') {
      filteredData = this.jsonData.filter(d => new Date(d.date).getFullYear() === now.getFullYear());
    } else if (this.selectedFilter === 'month') {
      filteredData = this.jsonData.filter(d => new Date(d.date).getMonth() === now.getMonth());
    } else if (this.selectedFilter === 'lastWeek') {
      const lastWeek = new Date();
      lastWeek.setDate(now.getDate() - 7);
      filteredData = this.jsonData.filter(d => new Date(d.date) >= lastWeek);
    }
  
    // ✅ Update chart data
    this.barChartData = {
      labels: filteredData.map(d => new Date(d.date).toLocaleDateString()),
      datasets: [
        {
          type: 'bar',
          data: filteredData.map(d => d.activeOrders),
          label: 'Active Orders',
          backgroundColor: 'rgba(54, 162, 235, 0.6)'
        },
        {
          type: 'line',
          data: filteredData.map(d => d.inactiveOrders),
          label: 'Inactive Orders',
          borderColor: 'rgba(211, 211, 211, 1)',
          backgroundColor: 'rgba(211, 211, 211, 0.6)',
          fill: false
        }
      ]
    };
  }
  onFilterChange(event: any) {
    this.selectedFilter = event.target.value;
    this.filterData();
  }
}  
