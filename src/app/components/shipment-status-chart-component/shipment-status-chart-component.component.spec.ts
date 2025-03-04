import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentStatusChartComponentComponent } from './shipment-status-chart-component.component';

describe('ShipmentStatusChartComponentComponent', () => {
  let component: ShipmentStatusChartComponentComponent;
  let fixture: ComponentFixture<ShipmentStatusChartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentStatusChartComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipmentStatusChartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
