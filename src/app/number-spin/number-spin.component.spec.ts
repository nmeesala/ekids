import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSpinComponent } from './number-spin.component';

describe('NumberSpinComponent', () => {
  let component: NumberSpinComponent;
  let fixture: ComponentFixture<NumberSpinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberSpinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
