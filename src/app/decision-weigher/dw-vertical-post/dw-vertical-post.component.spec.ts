import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwVerticalPostComponent } from './dw-vertical-post.component';

describe('DecisionWeigherVerticalPostComponent', () => {
  let component: DwVerticalPostComponent;
  let fixture: ComponentFixture<DwVerticalPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwVerticalPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DwVerticalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
