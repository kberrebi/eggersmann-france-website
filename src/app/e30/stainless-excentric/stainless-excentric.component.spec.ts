import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StainlessExcentricComponent } from './stainless-excentric.component';

describe('StainlessExcentricComponent', () => {
  let component: StainlessExcentricComponent;
  let fixture: ComponentFixture<StainlessExcentricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StainlessExcentricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StainlessExcentricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
