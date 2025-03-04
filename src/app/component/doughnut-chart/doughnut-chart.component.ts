import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [NgChartsModule,NgFor,NgStyle],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent implements OnChanges {
  @Input() chartTitle: string = ''; // Dynamic title
  @Input() data: { category: string; count: number }[] = []; // Dynamic data
  @Input() colors: string[] = ['#4CAF50', '#FFC107', '#F44336', '#2196F3']; // Default colors

  totalItems: number = 0;
  doughnutChartData: ChartData<'doughnut'> = { labels: [], datasets: [{ data: [], backgroundColor: [] }] };
  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%', // Creates a donut effect
    plugins: { tooltip: { enabled: true } }
  };

  ngOnChanges() {
    this.updateChart();
  }

  private updateChart() {
    this.totalItems = this.data.reduce((sum, item) => sum + item.count, 0);
    this.doughnutChartData = {
      labels: this.data.map(item => item.category),
      datasets: [{ data: this.data.map(item => item.count), backgroundColor: this.colors }]
    };
  }
}
