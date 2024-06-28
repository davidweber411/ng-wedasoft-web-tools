import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionWeigherVerticalPostComponent } from './decision-weigher-vertical-post.component';

describe('DecisionWeigherVerticalPostComponent', () => {
  let component: DecisionWeigherVerticalPostComponent;
  let fixture: ComponentFixture<DecisionWeigherVerticalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DecisionWeigherVerticalPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecisionWeigherVerticalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
