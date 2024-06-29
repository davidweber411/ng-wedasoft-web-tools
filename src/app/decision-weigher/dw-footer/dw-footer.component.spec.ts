import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwFooterComponent } from './dw-footer.component';

describe('DecisionWeigherFooterComponent', () => {
  let component: DwFooterComponent;
  let fixture: ComponentFixture<DwFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
