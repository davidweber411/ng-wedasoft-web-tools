import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwDragDropElementComponent } from './dw-drag-drop-element.component';

describe('DwDragDropElementComponent', () => {
  let component: DwDragDropElementComponent;
  let fixture: ComponentFixture<DwDragDropElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DwDragDropElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DwDragDropElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
