import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar' | 'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      { 
        type: 'bar',
        data: [50, 80, 30, 60, 90, 70], 
        label: 'Active Orders', 
        backgroundColor: 'rgba(54, 162, 235, 0.6)' 
      },
      { 
        type: 'line',
        data: [60, 70, 50, 65, 75, 60], 
        label: 'Inactive Orders', 
        borderColor: 'rgba(211, 211, 211, 1)',
        backgroundColor: 'rgba(211, 211, 211, 0.6)',
        fill: false
      }
    ]
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

  constructor() { }
}
