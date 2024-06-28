import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionWeigherFooterComponent } from './decision-weigher-footer.component';

describe('DecisionWeigherFooterComponent', () => {
  let component: DecisionWeigherFooterComponent;
  let fixture: ComponentFixture<DecisionWeigherFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionWeigherFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecisionWeigherFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
