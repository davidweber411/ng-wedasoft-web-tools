import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionWeigherComponent } from './decision-weigher.component';

describe('DecisionWeigherComponent', () => {
  let component: DecisionWeigherComponent;
  let fixture: ComponentFixture<DecisionWeigherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionWeigherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecisionWeigherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
