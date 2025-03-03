import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { GoogleMapsModule } from '@angular/google-maps'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MapService, Shipment } from '../../services/map.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, MatCardModule, MatIconModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {

  // Default center (India)
  center = { lat: 20.5937, lng: 78.9629 }; 
  zoom = 5;

  shipments: Shipment[] = [];
  selectedLocation = this.center;
  polylinePath: { lat: number; lng: number }[] = [];

  constructor(private mapService: MapService) {}

  ngOnInit() {
    this.mapService.getShipments().subscribe((data) => {
      this.shipments = data;
      this.polylinePath = data.map(({ lat, lng }) => ({ lat, lng }));
    });
  }

  highlightLocation(lat: number, lng: number) {
    this.selectedLocation = { lat, lng };
  }
}
