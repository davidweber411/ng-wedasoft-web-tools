import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrewComponent } from './screw.component';

describe('ScrewComponent', () => {
  let component: ScrewComponent;
  let fixture: ComponentFixture<ScrewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
