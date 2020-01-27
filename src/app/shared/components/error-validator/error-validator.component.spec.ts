import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorValidatorComponent } from './error-validator.component';

describe('ErrorValidatorComponent', () => {
  let component: ErrorValidatorComponent;
  let fixture: ComponentFixture<ErrorValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
