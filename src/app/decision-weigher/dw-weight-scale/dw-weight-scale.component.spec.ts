import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwWeightScaleComponent } from './dw-weight-scale.component';

describe('WeightScaleComponent', () => {
  let component: DwWeightScaleComponent;
  let fixture: ComponentFixture<DwWeightScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwWeightScaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwWeightScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
