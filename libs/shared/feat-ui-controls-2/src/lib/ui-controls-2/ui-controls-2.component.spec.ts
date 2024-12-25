import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiControls2Component } from './ui-controls-2.component';

describe('UiControls2Component', () => {
  let component: UiControls2Component;
  let fixture: ComponentFixture<UiControls2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiControls2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(UiControls2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
