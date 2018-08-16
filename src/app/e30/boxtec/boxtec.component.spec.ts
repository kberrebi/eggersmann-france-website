import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxtecComponent } from './boxtec.component';

describe('BoxtecComponent', () => {
  let component: BoxtecComponent;
  let fixture: ComponentFixture<BoxtecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxtecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxtecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
