import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwConfigAreaComponent } from './dw-config-area.component';

describe('ConfigFormComponent', () => {
  let component: DwConfigAreaComponent;
  let fixture: ComponentFixture<DwConfigAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwConfigAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwConfigAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
