import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-charts-demo';

  public doughnutChartLabels: string[] = [
    'Cash Management',
    'Financial Reporting',
    'Vendors & Contracts',
    'Advertising'
  ];

  public doughnutChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [60, 26, 9, 5], // Percentage values
        backgroundColor: ['#4A90E2', '#50E3C2', '#B8E986', '#D0021B'],
        hoverBackgroundColor: ['#3A78C2', '#40C3A2', '#A0D976', '#B0021B']
      }
    ]
  };

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    cutout: '70%', // Makes the inner circle
    plugins: {
      legend: {
        display: false // Hide legend since we have a custom one
      }
    }
  };

  constructor() { }
}
