import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { E30Component } from './e30.component';

describe('E30Component', () => {
  let component: E30Component;
  let fixture: ComponentFixture<E30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ E30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(E30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
