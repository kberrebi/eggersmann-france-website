import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonetteBonnComponent } from './maisonette-bonn.component';

describe('MaisonetteBonnComponent', () => {
  let component: MaisonetteBonnComponent;
  let fixture: ComponentFixture<MaisonetteBonnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonetteBonnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonetteBonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
