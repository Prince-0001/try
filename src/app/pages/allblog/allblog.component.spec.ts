import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllblogComponent } from './allblog.component';

describe('AllblogComponent', () => {
  let component: AllblogComponent;
  let fixture: ComponentFixture<AllblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllblogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
