import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAreaComponent } from './config-area.component';

describe('ConfigFormComponent', () => {
  let component: ConfigAreaComponent;
  let fixture: ComponentFixture<ConfigAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
