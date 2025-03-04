import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  shipmentChartData: any = null;
  taskChartData: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchShipmentData();
    this.fetchTaskData();
  }

  fetchShipmentData() {
    this.http.get<any[]>('API_URL_FOR_SHIPMENTS').subscribe(shipments => {
      const statusCounts = shipments.reduce((acc, { status }) => {
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      this.shipmentChartData = {
        labels: Object.keys(statusCounts),
        datasets: [{ data: Object.values(statusCounts) }]
      };
    });
  }

  fetchTaskData() {
    this.http.get<any[]>('API_URL_FOR_TASKS').subscribe(tasks => {
      const taskCounts = tasks.reduce((acc, { type }) => {
        acc[type] = (acc[type] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      this.taskChartData = {
        labels: Object.keys(taskCounts),
        datasets: [{ data: Object.values(taskCounts) }]
      };
    });
  }
}
