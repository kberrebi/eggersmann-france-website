import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaHambourg2Component } from './villa-hambourg2.component';

describe('VillaHambourg2Component', () => {
  let component: VillaHambourg2Component;
  let fixture: ComponentFixture<VillaHambourg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillaHambourg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaHambourg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
