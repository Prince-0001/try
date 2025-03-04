import { Component } from '@angular/core';
import { BarChartComponent } from "../../components/bar-chart/bar-chart.component";
import { ShipmentStatusChartComponentComponent } from "../../components/shipment-status-chart-component/shipment-status-chart-component.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShipmentStatusChartComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  shipmentList = [
    { id: 1, product: 'Laptop', supplier: 'Dell', status: 'Completed' },
    { id: 2, product: 'Phone', supplier: 'Apple', status: 'In-Transit' },
    { id: 3, product: 'Tablet', supplier: 'Samsung', status: 'Failed' },
    { id: 4, product: 'Monitor', supplier: 'LG', status: 'Pending' }
  ];
}
