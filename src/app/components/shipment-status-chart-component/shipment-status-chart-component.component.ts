import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-shipment-status-chart-component',
  standalone: true,
  imports: [NgChartsModule,NgFor,NgStyle],
  templateUrl: './shipment-status-chart-component.component.html',
  styleUrl: './shipment-status-chart-component.component.scss'
})
export class ShipmentStatusChartComponentComponent implements OnChanges {
  @Input() shipments: any[] = [];
  @Input() chartColors: string[] = ['#4CAF50', '#FFC107', '#F44336', '#2196F3']; // Default colors

  totalShipments: number = 0;
  doughnutChartData: ChartData<'doughnut'> = {
    labels: ['Completed', 'In-Transit', 'Failed', 'Pending'],
    datasets: [{ data: [], backgroundColor: [] }]
  };
  doughnutChartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    cutout: '70%', // Creates the donut effect
    plugins: {
      tooltip: { enabled: true }
    }
  };

  ngOnChanges() {
    this.updateChart();
  }

  private updateChart() {
    const statusCounts = { completed: 0, 'in-transit': 0, failed: 0, pending: 0 };
    this.totalShipments = this.shipments.length;

    this.shipments.forEach((shipment) => {
      statusCounts[shipment.status.toLowerCase() as keyof typeof statusCounts]++;
    });

    this.doughnutChartData.datasets[0].data = Object.values(statusCounts);
    this.doughnutChartData.datasets[0].backgroundColor = this.chartColors; // Set dynamic colors
  }
}
