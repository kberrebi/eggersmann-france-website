import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonHambourg2Component } from './maison-hambourg2.component';

describe('MaisonHambourg2Component', () => {
  let component: MaisonHambourg2Component;
  let fixture: ComponentFixture<MaisonHambourg2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonHambourg2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonHambourg2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
