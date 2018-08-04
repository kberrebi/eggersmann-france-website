import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuventBerlinComponent } from './auvent-berlin.component';

describe('AuventBerlinComponent', () => {
  let component: AuventBerlinComponent;
  let fixture: ComponentFixture<AuventBerlinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuventBerlinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuventBerlinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
