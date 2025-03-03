import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import { CommonModule } from '@angular/common';
import { MapService, ShipmentList } from '../../services/map.service';

@Component({
  selector: 'app-shipment-tracking',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './shipment-tracking.component.html',
  styleUrl: './shipment-tracking.component.scss'
})
export class ShipmentTrackingComponent {

  shipments: ShipmentList[] = [];

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.getShipmentsList().subscribe((data) => {
      this.shipments = data;
    });
  }
}
