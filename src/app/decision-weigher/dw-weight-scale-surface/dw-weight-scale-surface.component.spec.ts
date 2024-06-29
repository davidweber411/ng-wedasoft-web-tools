import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwWeightScaleSurfaceComponent } from './dw-weight-scale-surface.component';

describe('DwWeightScaleSurfaceComponent', () => {
  let component: DwWeightScaleSurfaceComponent;
  let fixture: ComponentFixture<DwWeightScaleSurfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwWeightScaleSurfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DwWeightScaleSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
