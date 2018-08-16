import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OakLaminateComponent } from './oak-laminate.component';

describe('OakLaminateComponent', () => {
  let component: OakLaminateComponent;
  let fixture: ComponentFixture<OakLaminateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OakLaminateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OakLaminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
