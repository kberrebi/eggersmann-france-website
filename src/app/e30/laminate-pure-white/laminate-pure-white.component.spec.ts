import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminatePureWhiteComponent } from './laminate-pure-white.component';

describe('LaminatePureWhiteComponent', () => {
  let component: LaminatePureWhiteComponent;
  let fixture: ComponentFixture<LaminatePureWhiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaminatePureWhiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminatePureWhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
