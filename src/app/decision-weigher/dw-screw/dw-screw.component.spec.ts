import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwScrewComponent } from './dw-screw.component';

describe('ScrewComponent', () => {
  let component: DwScrewComponent;
  let fixture: ComponentFixture<DwScrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwScrewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwScrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
