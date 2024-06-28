import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightScaleComponent } from './weight-scale.component';

describe('WeightScaleComponent', () => {
  let component: WeightScaleComponent;
  let fixture: ComponentFixture<WeightScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightScaleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeightScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
