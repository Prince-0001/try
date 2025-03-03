import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Shipment {
  id: number;
  name: string;
  lat: number;
  lng: number;
  orderId: string;
  date: string;
}

export interface ShipmentList{
  shipmentId: string;
  shipperName: string;
  phone: string;
  status: string;
  product: string;
  supplier: string;
  quantity: number;
  price: number;
  deliveryDate: string;
  consignee: string;
  destination: string;
  connection: string;
  task: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private dataUrl = 'assets/data/shipments.json'; // Path to JSON file

  constructor(private http: HttpClient) {}

  getShipments(): Observable<Shipment[]> {
    return this.http.get<Shipment[]>(this.dataUrl);
  }

  getShipmentsList():Observable<ShipmentList[]>{
    return this.http.get<ShipmentList[]>('assets/data/shipmentsList.json')
  }
}
