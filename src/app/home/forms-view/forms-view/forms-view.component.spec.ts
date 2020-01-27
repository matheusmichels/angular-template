import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsView } from './forms-view.component';

describe('FormsView', () => {
  let component: FormsView;
  let fixture: ComponentFixture<FormsView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
