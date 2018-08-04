import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuventHambourgComponent } from './auvent-hambourg.component';

describe('AuventHambourgComponent', () => {
  let component: AuventHambourgComponent;
  let fixture: ComponentFixture<AuventHambourgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuventHambourgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuventHambourgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
