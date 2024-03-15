import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelOfChoicesComponent } from './wheel-of-choices.component';

describe('WheelOfChoicesComponent', () => {
  let component: WheelOfChoicesComponent;
  let fixture: ComponentFixture<WheelOfChoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelOfChoicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WheelOfChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
