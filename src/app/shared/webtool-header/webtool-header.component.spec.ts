import {ComponentFixture, TestBed} from "@angular/core/testing";
import {WebtoolHeaderComponent} from "./webtool-header.component";


describe('HeaderComponent', () => {
  let component: WebtoolHeaderComponent;
  let fixture: ComponentFixture<WebtoolHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebtoolHeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WebtoolHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
